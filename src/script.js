import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75, window.innerWidth / window.innerHeight, 0.1, 1000
);

const axesHelper = new THREE.AxesHelper(5); // show axes
scene.add(axesHelper);

// camera.position.x = 1;
// camera.position.y = 1;
// camera.position.z = 5;
camera.position.set(1, 2, 5);

const boxGeometry = new THREE.BoxGeometry();
const boxMeterial = new THREE.MeshBasicMaterial({color: 0x00FF00})
const box = new THREE.Mesh(boxGeometry, boxMeterial);
const orbit = new OrbitControls(camera, renderer.domElement);

scene.add(box);
// box.rotation.set(3, 2, 1);
orbit.update(); // make possible to change scene by cursur

const animate =(time)=>{
    box.rotation.x += time / 50000;
    box.rotation.y += time / 50000;
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);