
function confirmPlanetCreation() {
    var timeToOrbit = document.getElementById("speed").value
    var distanceFromSun = document.getElementById("distanceFromSun").value
    var radius = document.getElementById("radius").value

    var texturePath = "textures/random-planet-".concat(document.getElementById("texture").value);
    
    constructPlanet(radius, texturePath.concat(".jpg"), -distanceFromSun, 0.01, timeToOrbit);
    
    // createInvisible();
    renderer.render( scene, camera );
}