
// createInvisible

function constructPlanet(radius, texturePath, distanceFromSunCentre, axisRotation, orbittingSpeed) {
    const planetGeometry = new THREE.SphereGeometry(radius);
    const texture = new THREE.TextureLoader().load(texturePath);
    const material = new THREE.MeshPhongMaterial( { map: texture } );
    const planet = new THREE.Mesh( planetGeometry, material );
    planet.position.z = distanceFromSunCentre;
    addToSolarSystem(planet);
    addToPlanetData(axisRotation, orbittingSpeed);
    
}

function constructMoon(radius, parent, distanceFromParent, axisRotation, orbittingSunSpeed, orbittingSpeed) {
    const moonGeometry = new THREE.SphereGeometry(radius);
    const moonTexture = new THREE.TextureLoader().load("textures/moon.jpg");
    const moonMaterial = new THREE.MeshPhongMaterial( { map: moonTexture } );
    var moon = new THREE.Mesh( moonGeometry, moonMaterial );
    moon.position.z = parent.position.z - distanceFromParent;

    // Add the moon to the parent
    parent.add(moon); // Add the moon to the earth so we can reference it to its local coordinate system

    // Add to the satelites
    satelites[sateliteCount] = new Array(moon, parent);
    
    // Add to the solar system
    addToSolarSystem(moon);
    addToSateliteData(axisRotation, orbittingSunSpeed, orbittingSpeed);

    
}


function orbitOnAxis(planet, speed) {
    planet.rotateOnAxis(new THREE.Vector3(0, 1, 0), speed);
}

function orbitSun(planet, speedDivisor) {
    var matrix = new THREE.Matrix4();
    matrix.makeRotationY(Math.PI/speedDivisor);
    planet.position.applyMatrix4(matrix);
}

function orbitPlanet(satelite, parent, speedDivisor) {
    var matrix = new THREE.Matrix4();
    matrix.makeRotationY(Math.PI/speedDivisor);
    parent.worldToLocal(satelite);
    satelite.position.applyMatrix4(matrix);
    parent.localToWorld(satelite);
}

