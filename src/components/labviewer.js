import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function createLabViewer(container, modelUrl) {
  if (!container) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1.0;

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

  const spotLight = new THREE.SpotLight(0xff5500, 2);
  spotLight.position.set(-5, 5, 5);
  scene.add(spotLight);

  camera.position.z = 5;

  let currentModel = null;
  let wireframeActive = false;
  const loader = new GLTFLoader();

  const applyWireframe = (model, active) => {
    if (!model) return;
    model.traverse((child) => {
      if (child.isMesh && child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach(m => {
            m.wireframe = active;
          });
        } else {
          child.material.wireframe = active;
        }
      }
    });
  };

  const loadModel = (url) => {
    // Show technical loader info
    const loaderEl = document.createElement('div');
    loaderEl.className = 'absolute inset-0 flex items-center justify-center font-mono text-[9px] text-brand-accent animate-pulse';
    loaderEl.innerText = '// INITIALIZING_UPLINK...';
    container.appendChild(loaderEl);

    loader.load(url, (gltf) => {
      if (currentModel) scene.remove(currentModel);
      currentModel = gltf.scene;
      
      // Auto-center and scale
      const box = new THREE.Box3().setFromObject(currentModel);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 3 / maxDim;
      currentModel.scale.setScalar(scale);
      currentModel.position.x = -center.x * scale;
      currentModel.position.y = -center.y * scale;
      currentModel.position.z = -center.z * scale;

      // Apply wireframe state if currently enabled
      applyWireframe(currentModel, wireframeActive);

      scene.add(currentModel);
      container.removeChild(loaderEl);
    }, undefined, (error) => {
      console.error(error);
      loaderEl.innerText = '// ERROR: UPLINK_FAILED';
    });
  };

  loadModel(modelUrl);

  function animate() {
    const frameId = requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
    return frameId;
  }

  const animId = animate();

  const handleResize = () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  };
  window.addEventListener('resize', handleResize);

  return {
    cleanup: () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    },
    updateModel: (newUrl) => {
       loadModel(newUrl);
    },
    setWireframe: (active) => {
      wireframeActive = active;
      applyWireframe(currentModel, wireframeActive);
    },
    isWireframe: () => wireframeActive
  };
}
