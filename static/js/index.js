var styles = [
  'openStreetMap',
  'satellite',
  'bingAerial',
  'mapboxMap'
]

var select = document.getElementById('layer-select');
select.addEventListener('change', function() {
  for(i=0; i< styles.length; ++i) {
    layers[i].setVisible(styles[i] === select.value);
  }
});



var droneCheckbox = document.getElementById('droneCheckbox');
droneCheckbox.addEventListener('change', function() {
  droneMarkers.setVisible(droneCheckbox.checked);
});



var submarineCheckbox = document.getElementById('submarineCheckbox');
submarineCheckbox.addEventListener('change', function() {
  submarineMarkers.setVisible(submarineCheckbox.checked);
});





var trackButton = document.getElementById('trackButton');
trackButton.addEventListener('click', function() {
  geolocation.setTracking(true);
});