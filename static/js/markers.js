var droneStyle = new ol.style.Style({
    image: new ol.style.Icon({
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        size: [32, 32],
        src: 'static/img/drone.png'
      })
});

var submarineStyle = new ol.style.Style({
    image: new ol.style.Icon({
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        size: [32, 32],
        src: 'static/img/submarine.png'
      })
});

// Markers ////////////////////////////////////

var simpleCircleFeature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([72, 37.983810]))
    });



var dronesFeature = [];

for (i = 0; i < 4; i++) {
    var iconFeature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([
            getRandomInRange(23, 28, 4), 
            getRandomInRange(37, 40, 4)])),
        name: 'Icon Marker',
        population: 40000,
        rainfall: 500
    });
    dronesFeature.push(iconFeature);
}


var submarineFeature = [];

for (i = 0; i < 4; i++) {
    var iconFeature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([
            getRandomInRange(20, 23, 4), 
            getRandomInRange(33, 35, 4)])),
        name: 'Icon Marker',
        population: 40000,
        rainfall: 500
    });
    submarineFeature.push(iconFeature);
}


var positionFeature = new ol.Feature();
positionFeature.setStyle(new ol.style.Style({
    image: new ol.style.Circle ({
      radius: 8,
      fill: new ol.style.Fill({
        color: '#000000'
      }),
      stroke: new ol.style.Stroke({
        color: '#fff',
        width: 2
      })
    })
  }));

///////////////////////////////////////////////////


function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
}