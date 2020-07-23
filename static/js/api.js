var uavFeatures = [];
var uuvFeatures = [];
var ugvFeatures = [];
var usvFeatures = [];

getVehicles();

function getVehicles() {
  $.get( "/vehicles", function( data ) {
      $.each(data, function(index, element) {
          var iconFeature = new ol.Feature({
              geometry: new ol.geom.Point(ol.proj.fromLonLat([
                  element['home_location']['longitude'], 
                  element['home_location']['latitude']])),
              name: 'Icon Marker',
              population: 40000,
              rainfall: 500
          });
          switch(element['type']) {
              case 'uav':
                  uavFeatures.push(iconFeature);
                break;
              case 'uuv':
                  uuvFeatures.push(iconFeature);
                break;
              case 'ugv':
                  ugvFeatures.push(iconFeature);
                break;
                case 'usv':
                  usvFeatures.push(iconFeature);
                break;
              default:
                break;
            }
      });
      refreshLayers();
  });
}

 

function refreshLayers() {
    uavLayer.getSource().clear();
    uuvLayer.getSource().clear();
    ugvLayer.getSource().clear();
    usvLayer.getSource().clear();

    uavLayer.getSource().addFeatures(uavFeatures);
    uuvLayer.getSource().addFeatures(uuvFeatures);
    ugvLayer.getSource().addFeatures(ugvFeatures);
    usvLayer.getSource().addFeatures(usvFeatures);
};