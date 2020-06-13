// Layers ////////////////////////////////////
var layers = [];

var openStreetMap = new ol.layer.Tile({
  source: new ol.source.OSM()
});

var satteliteMap = new ol.layer.Tile({
  visible: false,
  source: new ol.source.XYZ({
    attributions: ['Powered by Esri',
                   'Source: Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community'],
    attributionsCollapsible: true,
    url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  })
});

var bingAerialMap = new ol.layer.Tile({
  visible: false,
  preload: Infinity,
  source: new ol.source.BingMaps({
    imagerySet: 'Aerial',
    key: 'AneacQswNOvJ7RZyyM99M3jhdQQi9rbx-GGv2aFZVdArvGFckGdIvC7UKwmKywlK',
  })
})

var mapboxMap = new ol.layer.Tile({
  visible: false,
  source: new ol.source.XYZ({
    attributions: '©Mapbox',
    attributionsCollapsible: true,
    url: 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWljaGFlbGxvdWtlcmlzIiwiYSI6ImNrYmF4ZmUyeTBhZDkydG1iY2h0aGZqbmoifQ.xbeLT84KQz9Sk-t8lFb0WA',
  })
})

var droneMarkers = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [simpleCircleFeature].concat(dronesFeature)
    })
});

var submarineMarkers = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: submarineFeature
    })
});

layers.push(openStreetMap, satteliteMap, bingAerialMap, mapboxMap, droneMarkers, submarineMarkers);

///////////////////////////////////////////////////