import * as THREE from "three";

export type AppScene = {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
};

export function createAppScene(): AppScene {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    // свет
    const light = new THREE.PointLight(0xffffff, 2, 100);
    scene.add(light);

    return { scene, camera, renderer };
}