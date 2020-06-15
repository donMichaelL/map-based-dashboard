var map = new ol.Map({
    target: 'map',
    layers: layers,
    view: new ol.View({
      center: ol.proj.fromLonLat([20.4370, 38.2022]),
      zoom: 16
    })
  });
  
  
  map.on('click', function(evt) {
      var feature = map.forEachFeatureAtPixel(evt.pixel,
        function(feature) {
          return feature;
        });
      if (feature) {
        console.log(feature);
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
