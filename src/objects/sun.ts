import * as THREE from "three";

export function createSun(): THREE.Mesh {
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    return new THREE.Mesh(geometry, material);
}