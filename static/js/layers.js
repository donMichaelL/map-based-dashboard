var layers = [];

// Maps  ////////////////////////////////////
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
///////////////////////////////////////////////////

// Markers  ////////////////////////////////////

var droneMarkers = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [simpleCircleFeature].concat(dronesFeature)
    }),
    style: droneStyle
});

var submarineMarkers = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: submarineFeature
    }),
    style: submarineStyle
});
///////////////////////////////////////////////////

// Shapes  ////////////////////////////////////
var ring = [
  [20.4370, 38.2022], [22.977,36.269466],
  [23.977,38.269466], [20.4370, 38.2022]
];
var polygon = new ol.geom.Polygon([ring]);
polygon.transform('EPSG:4326', 'EPSG:3857');
var feature = new ol.Feature(polygon);


var shapelayer = new ol.layer.Vector({
  source: new ol.source.Vector({
    projection: 'EPSG:4326',
    features: [ 
      new ol.Feature(new ol.geom.Circle(ol.proj.fromLonLat([24.648, 40.684]), 40000)),
      feature
  ]
  }),
  style: [
    new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'blue',
        width: 3
      }),
      fill: new ol.style.Fill({
        color: 'rgba(0, 0, 255, 0.1)'
      })
    })
  ]
});

// var coordinates = [ [26.4370, 38.2022], [22.977,36.269466],]; 
// var lineGeom = new ol.geom.LineString(coordinates);
// lineGeom.transform('EPSG:4326', 'EPSG:3857');
// var lineFeature = new ol.Feature(lineGeom);

var source = new ol.source.Vector({
  projection: 'EPSG:4326',
  features: [ 
   // lineFeature
]
});

  var layerLines = new ol.layer.Vector({
    source: source,
    style: [
      new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: 'black',
          width: 1
        }),
        fill: new ol.style.Fill({
          color: 'rgba(0, 0, 255, 0.1)'
        })
      })
    ]
  });

///////////////////////////////////////////////////

layers.push(openStreetMap, satteliteMap, bingAerialMap, mapboxMap, droneMarkers, submarineMarkers, shapelayer, layerLines);

