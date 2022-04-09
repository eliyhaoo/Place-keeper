"use strict";

let gMap;


let gPlaces = [];
_createPlaces();

function initMap(lat, lng) {
  const elMap = document.querySelector(".map-container");

  if (!lat && !lng) {
    lat = 29.557134;
    lng = 34.950985;
  }

  const options = {
    center: { lat, lng },
    zoom: 12,
  };

  const map = new google.maps.Map(elMap, options);
  new google.maps.Marker({
    position: { lat, lng },
    map,
    title: "Eilat",
  });

  // GOOGLE//

  map.addListener("click", (e) => onClickedLocation(e.latLng, map));

  gMap = map;
}

function centerMap() {
  navigator.geolocation.getCurrentPosition(showLocation, _handleLocationErorr);
}


function onClickedLocation(latLng, map) {
  const locationName = prompt("Enter a name");
  placeMarkerAndPanTo(latLng, locationName, map);

  gPlaces.push(_createPlace(latLng, locationName));
  console.log("gPlaces", gPlaces);
  _savePlaceToStorage();
  renderPlaces();
}

function showLocation(pos, title = "Your location") {
  const currLatLng = new google.maps.LatLng(
    pos.coords.latitude,
    pos.coords.longitude
  );
  gMap.setCenter(currLatLng);

  const marker = new google.maps.Marker({
    position: currLatLng,
    gMap,
    title,
  });
  marker.setMap(gMap);
}

function placeMarkerAndPanTo(latLng, locationName, map = gMap) {
  const marker = new google.maps.Marker({
    position: latLng,
    map,
    title: locationName,
  });

  map.panTo(latLng);
  return marker
 

 
}

function delteLocation(marker,locationId){
   
    const placeIdx = gPlaces.findIndex(place=> place.id===locationId)
    gPlaces.splice(placeIdx,1)
    marker.setMap(null)
    _savePlaceToStorage()
}

function findPlaceById(id){
    return gPlaces.find(place => place.id === id)
}


function getPlaces() {
  return gPlaces;
}
function _createPlaces() {
  let places = loadFromStorage("gPlacesDB");
  if (!places || !places.length) return;
  gPlaces = places;
}

function _createPlace(pos, name) {
  return {
    id: makeId(),
    pos,
    name,
  };
}
function _handleLocationErorr() {
  console.log("handling erorr");
}

function _savePlaceToStorage() {
  console.log("sending to save");
  saveToStorage("gPlacesDB", gPlaces);
}
