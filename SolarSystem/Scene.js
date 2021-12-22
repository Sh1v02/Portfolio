
// import { GUI } from 'dat.gui';



var scene, camera, renderer, pointLight1, pointLight2, pointLight3, pointLight4, pointLight5, pointLight6;
document.addEventListener('keydown', handleKeyDown);

function init() {
    scene = new THREE.Scene();
    
    
    const backGroundLoader = new THREE.TextureLoader();
    backGroundLoader.load('textures/stars-background.jpg', function(texture) {
        scene.background = texture;
    });


    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 20, -500);

    const lightValue = 250;
    pointLight1 = new THREE.PointLight(0xffffff, 1.0);
    pointLight1.position.set(0, 0, lightValue);
    pointLight2 = new THREE.PointLight(0xffffff, 1.0);
    pointLight2.position.set(0, 0, -lightValue);
    pointLight3 = new THREE.PointLight(0xffffff, 1.0);
    pointLight3.position.set(lightValue, 0, 0);
    pointLight4 = new THREE.PointLight(0xffffff, 1.0);
    pointLight4.position.set(-lightValue, 0, 0);
    pointLight5 = new THREE.PointLight(0xffffff, 1.0);
    pointLight5.position.set(0, 60, 0);
    pointLight6 = new THREE.PointLight(0xffffff, 1.0);
    pointLight6.position.set(0, -60, 0);
    scene.add(pointLight1);
    scene.add(pointLight2);
    scene.add(pointLight3);
    scene.add(pointLight4);
    // scene.add(pointLight5);
    // scene.add(pointLight6);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio); // HiDPI/retina rendering
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    controls = new THREE.OrbitControls(camera, renderer.domElement);

    // window.addEventListener('resize', handleResize, false);

}