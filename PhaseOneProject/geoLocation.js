let locationBtn = document.getElementById('myLocation');
let locationPara = document.getElementById('location');
let mapLink = document.getElementById('mapLink');

mapLink.href = '';
mapLink.textContent = '';



function getLocation() {
  if(!navigator.geolocation){
    locationPara.textContent = "Geolocation Not Available";
  }
  else{
    locationPara.textContent = "Locating...";
    navigator.geolocation.getCurrentPosition(showPosition, errorMsg);
  }
}

function showPosition(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  locationPara.textContent = "";
  mapLink.textContent = 'Check Out The Map';
  mapLink.href = `https://www.openstreetmap.org/#map=12"/${latitude}${longitude}`;

}

function errorMsg(){
  para.textContent =  "sorry something went wrong";
}

locationBtn.onclick = getLocation;
