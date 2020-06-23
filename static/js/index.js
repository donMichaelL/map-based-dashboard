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



var uavCheckbox = document.getElementById('uavCheckbox');
uavCheckbox.addEventListener('change', function() {
  uavLayer.setVisible(uavCheckbox.checked);
});

var uuvCheckbox = document.getElementById('uuvCheckbox');
uuvCheckbox.addEventListener('change', function() {
  uuvLayer.setVisible(uuvCheckbox.checked);
});

var ugvCheckbox = document.getElementById('ugvCheckbox');
ugvCheckbox.addEventListener('change', function() {
  ugvLayer.setVisible(ugvCheckbox.checked);
});

var usvCheckbox = document.getElementById('usvCheckbox');
usvCheckbox.addEventListener('change', function() {
  usvLayer.setVisible(usvCheckbox.checked);
});



var trackButton = document.getElementById('trackButton');
trackButton.addEventListener('click', function() {
  geolocation.setTracking(true);
});