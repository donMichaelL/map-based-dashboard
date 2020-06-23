var uavStyle = new ol.style.Style({
    image: new ol.style.Icon({
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        size: [32, 32],
        src: 'static/img/drone.png'
      })
});

var uuvStyle = new ol.style.Style({
    image: new ol.style.Icon({
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        size: [32, 32],
        src: 'static/img/submarine.png'
      })
});

var ugvStyle = new ol.style.Style({
    image: new ol.style.Icon({
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        size: [32, 32],
        src: 'static/img/war.png'
      })
});


var usvStyle = new ol.style.Style({
    image: new ol.style.Icon({
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        size: [32, 32],
        src: 'static/img/yacht.png'
      })
});

// Markers ////////////////////////////////////

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