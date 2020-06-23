var map = new ol.Map({
    target: 'map',
    layers: layers,
    view: new ol.View({
      center: ol.proj.fromLonLat([20.4370, 38.2022]),
      zoom: 6
    })
  });
  
  
  map.on('click', function(evt) {
      var feature = map.forEachFeatureAtPixel(evt.pixel,
        function(feature) {
          return feature;
        });
      if (uavFeatures.includes(feature) | uuvFeatures.includes(feature) |
          ugvFeatures.includes(feature) | usvFeatures.includes(feature)) {
        source.clear();
        var start = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');
        var coordinates = [ start, [getRandomInRange(20, 26, 4), getRandomInRange(33, 38, 4)], [getRandomInRange(20, 26, 4), getRandomInRange(33, 38, 4)],[getRandomInRange(20, 26, 4), getRandomInRange(33, 38, 4)],[getRandomInRange(20, 26, 4), getRandomInRange(33, 38, 4)],];
        var lineGeom = new ol.geom.LineString(coordinates);
        lineGeom.transform('EPSG:4326', 'EPSG:3857');
        var lineFeature = new ol.Feature(lineGeom);
        source.addFeatures([lineFeature]);


        flightsSource.clear();
        var start = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');
        var start = { x: start[0], y: start[1] };
        var end = { x: 28.979530, y: 41.015137 };
        var arcGenerator = new arc.GreatCircle(start, end);
        var arcLine = arcGenerator.Arc(100, {offset: 10});
        if (arcLine.geometries.length === 1) {
          var line = new ol.geom.LineString(arcLine.geometries[0].coords);
          line.transform(ol.proj.get('EPSG:4326'), ol.proj.get('EPSG:3857'));
          var feature = new ol.Feature({
              geometry: line,
              finished: false
          });
          flightsSource.addFeature(feature)
        }
      } else {
        console.log("Stou koutrouli ton gamo");
      }
    });


  // // Right Click
    // map.addEventListener('contextmenu', function(e) {
    //   alert("You've tried to open context menu"); //here you draw your own menu
    //   e.preventDefault();
    // }, false);

// Geolocation User ///////////////////////////////////////////////////
    var view = new ol.View({
      center: [0, 0],
      zoom: 2
    });
    
    var geolocation = new ol.Geolocation ({
      trackingOptions: {
        enableHighAccuracy: true
      },
      projection: view.getProjection()
    });
    
    geolocation.on('change:position', function() {
      var coordinates = geolocation.getPosition();
      positionFeature.setGeometry(coordinates ?
        new ol.geom.Point(coordinates) : null);
    });
    
    new ol.layer.Vector ({
      map: map,
      source: new ol.source.Vector({
        features: [positionFeature]
      })
    });
///////////////////////////////////////////////////
