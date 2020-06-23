var dronesFeature = [];
var submarineFeature = [];
var ugvFeature = [];
var usvFeature = [];


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
                dronesFeature.push(iconFeature);
              break;
            case 'uuv':
                submarineFeature.push(iconFeature);
              break;
            case 'ugv':
                ugvFeature.push(iconFeature);
              break;
              case 'usv':
                usvFeature.push(iconFeature);
              break;
            default:
              break;
          }
    });
    refreshLayers();
});


function refreshLayers() {
    s=droneMarkers.getSource();
    s.addFeatures(dronesFeature);
    k=submarineMarkers.getSource();
    k.addFeatures(submarineFeature);
    l=ugvMarkers.getSource();
    l.addFeatures(ugvFeature);
    o=usvMarkers.getSource();
    o.addFeatures(usvFeature);
};