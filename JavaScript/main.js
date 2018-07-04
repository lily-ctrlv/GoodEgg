function myMap() {
  var myMaps = new google.maps.LatLng(51.508742,-0.120850);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myMaps, zoom: 12};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myMaps});
  marker.setMap(map);
}

// API key - AIzaSyB3nN3lVWSD64WLFDFwq7sevMF_RnNs-44
