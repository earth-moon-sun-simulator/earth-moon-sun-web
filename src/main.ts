import { createAppScene } from "./scene/scene";
import { createSun } from "./objects/sun";
import { createEarth } from "./objects/earth";
import { createMoon } from "./objects/moon";

const { scene, camera, renderer } = createAppScene();

const sun = createSun();
scene.add(sun);

const earth = createEarth();
earth.position.x = 5;
scene.add(earth);

const moon = createMoon();
moon.position.x = 1.5;
earth.add(moon);

function animate() {
    requestAnimationFrame(animate);

    earth.rotation.y += 0.01;
    moon.rotation.y += 0.03;

    renderer.render(scene, camera);
}

animate();