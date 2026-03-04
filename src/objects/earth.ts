import * as THREE from "three";

export function createEarth(): THREE.Mesh {
    const geometry = new THREE.SphereGeometry(0.8, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0x2233ff });
    return new THREE.Mesh(geometry, material);
}