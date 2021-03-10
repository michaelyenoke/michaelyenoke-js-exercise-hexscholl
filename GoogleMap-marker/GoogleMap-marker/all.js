var map;

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: { lat: 22.59493325, lng: 120.3068658 }
  });
  var marker = new google.maps.Marker({
    position: { lat: 22.592975, lng: 120.307146},
    map: map
  });
  
}
