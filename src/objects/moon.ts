import * as THREE from "three";

export function createMoon(): THREE.Mesh {
    const geometry = new THREE.SphereGeometry(0.3, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });
    return new THREE.Mesh(geometry, material);
}