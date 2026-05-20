import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/**
 * CONFIGURATION FOR THE USER
 * Change USER_MODEL_PATH to point to your uploaded .glb or .gltf file.
 */
const USER_MODEL_PATH = '/models/Head v1.glb'; 
const FALLBACK_MODEL_URL = 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@master/examples/models/gltf/LeePerrySmith/LeePerrySmith.glb';

const DitherShader = {
  uniforms: {
    'tDiffuse': { value: null },
    'tSize': { value: new THREE.Vector2(256, 256) },
    'palette': { value: [
      new THREE.Vector3(0.02, 0.02, 0.02), // Shadows
      new THREE.Vector3(0.33, 0.0, 1.0),    // Midtones (Purple)
      new THREE.Vector3(1.0, 0.33, 0.0),    // Highlights (Orange)
    ]}
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform vec2 tSize;
    uniform vec3 palette[3];
    varying vec2 vUv;

    float luma(vec3 color) {
      return dot(color, vec3(0.299, 0.587, 0.114));
    }

    float bayer4x4(vec2 p) {
      vec2 ip = floor(mod(p, 4.0));
      int index = int(ip.y) * 4 + int(ip.x);
      float m[16];
      m[0] = 0.0;  m[8] = 0.5;  m[2] = 0.125; m[10] = 0.625;
      m[12] = 0.75; m[4] = 0.25; m[14] = 0.875; m[6] = 0.375;
      m[3] = 0.1875; m[11] = 0.6875; m[1] = 0.0625; m[9] = 0.5625;
      m[15] = 0.9375; m[7] = 0.4375; m[13] = 0.8125; m[5] = 0.3125;
      for (int i = 0; i < 16; i++) { if (i == index) return m[i]; }
      return 0.0;
    }

    void main() {
      float pixelScale = 250.0;
      vec2 p = floor(vUv * pixelScale) / pixelScale;
      vec4 texel = texture2D(tDiffuse, p);
      
      // If fully transparent, don't dither
      if (texel.a < 0.01) {
        discard;
      }
      
      float brightness = luma(texel.rgb);
      float threshold = bayer4x4(gl_FragCoord.xy / 2.0);
      vec3 finalColor;
      if (brightness < 0.1 + (threshold * 0.1)) {
        finalColor = palette[0];
      } else if (brightness < 0.45 + (threshold * 0.2)) {
        finalColor = palette[1];
      } else {
        finalColor = palette[2];
      }
      gl_FragColor = vec4(finalColor, texel.a);
    }
  `
};

export function createReactiveHead(container) {
  if (!container) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
  renderer.setClearColor(0x000000, 0); 
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(1);
  container.appendChild(renderer.domElement);

  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const ditherPass = new ShaderPass(DitherShader);
  composer.addPass(ditherPass);

  const mainGroup = new THREE.Group();
  scene.add(mainGroup);

  // Background Grid Plane (Enhanced)
  const gridGeom = new THREE.PlaneGeometry(200, 200, 100, 100);
  const gridMat = new THREE.MeshBasicMaterial({ 
    color: 0x5500FF, 
    wireframe: true, 
    transparent: true, 
    opacity: 0.05 
  });
  const gridMesh = new THREE.Mesh(gridGeom, gridMat);
  gridMesh.rotation.x = -Math.PI / 2;
  gridMesh.position.y = -10;
  gridMesh.position.z = -20;
  scene.add(gridMesh);

  // Initial Placeholder Sphere
  const sphereGeom = new THREE.SphereGeometry(2.5, 32, 32);
  const sphereMat = new THREE.MeshPhongMaterial({ color: 0x888888, shininess: 100 });
  const placeholder = new THREE.Mesh(sphereGeom, sphereMat);
  mainGroup.add(placeholder);

  // Loading Ring (Subtle Animation)
  const ringGeom = new THREE.TorusGeometry(3.5, 0.05, 16, 100);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0x5500FF, wireframe: true, transparent: true, opacity: 0.5 });
  const loadingRing = new THREE.Mesh(ringGeom, ringMat);
  mainGroup.add(loadingRing);

  let userModel = null;
  let isLoading = true;
  const loader = new GLTFLoader();

  // Loading Logic
  const loadModel = (url) => {
    loader.load(url, (gltf) => {
      if (userModel) mainGroup.remove(userModel);
      userModel = gltf.scene;
      placeholder.visible = false;
      loadingRing.visible = false;
      isLoading = false;
      
      const customMat = new THREE.MeshPhongMaterial({ color: 0xcccccc, shininess: 30 });
      userModel.traverse((child) => { if (child.isMesh) child.material = customMat; });
      
      // Auto-scale and center
      const box = new THREE.Box3().setFromObject(userModel);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 5 / maxDim;
      userModel.scale.set(scale, scale, scale);
      userModel.position.set(0, -size.y * scale / 2, 0);
      
      mainGroup.add(userModel);
    }, undefined, (err) => {
      console.warn('User model not found at:', url, '. Using fallback.');
      if (url !== FALLBACK_MODEL_URL) loadModel(FALLBACK_MODEL_URL);
    });
  };

  loadModel(USER_MODEL_PATH);

  // Lighting - Boosted for visibility
  const spotLight = new THREE.SpotLight(0xffffff, 4);
  spotLight.position.set(10, 10, 20);
  spotLight.angle = 0.5;
  scene.add(spotLight);

  const fillLight = new THREE.PointLight(0x5500FF, 3);
  fillLight.position.set(-15, 5, 10);
  scene.add(fillLight);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);

  scene.background = null; 

  camera.position.z = 12;

  let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
  const handleMouseMove = (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
  };
  window.addEventListener('mousemove', handleMouseMove);

  function animate() {
    const frameId = requestAnimationFrame(animate);
    targetX += (mouseX - targetX) * 0.05;
    targetY += (mouseY - targetY) * 0.05;
    
    mainGroup.rotation.y = targetX * 0.5;
    mainGroup.rotation.x = -targetY * 0.3;
    mainGroup.position.y = Math.sin(Date.now() * 0.001) * 0.15;

    if (isLoading) {
      loadingRing.rotation.z += 0.05;
      loadingRing.rotation.x += 0.02;
      placeholder.scale.setScalar(1 + Math.sin(Date.now() * 0.01) * 0.1);
    }
    
    gridMesh.position.z = -20 + Math.sin(Date.now() * 0.0005) * 5;
    
    composer.render();
    return frameId;
  }

  const animId = animate();
  const handleResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
  };
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('resize', handleResize);
    cancelAnimationFrame(animId);
    renderer.dispose();
    if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
  };
}
