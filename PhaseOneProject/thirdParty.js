
let map;
let infoWindow;
let mapSpot = document.getElementById('map');
let myHome = {
  lat: 	44.411754,
  lng: -79.683876
};

function initMap(){
  map = new google.maps.Map(mapSpot, {
    zoom: 15,
    center: myHome,
  });

  infoWindow = new google.maps.InfoWindo;

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
      function(position) {
      let pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function(){
      handleLocationError(true, infoWindow, map.getCenter());
    });
  }
  else {
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos){
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ? 'Error: geolocation service has failed' : 'Error: Your browser doesnot support Geolocation');
  infoWindow.open(map);

}
