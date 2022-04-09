"use strict";
let gCurrMarker

function onSubmitForm(ev) {
  ev.preventDefault();
  const userEmail = document.querySelector("input[name=email]").value;
  updateUser(userEmail);
}

function showAge(age) {
  document.querySelector(".age-display").innerText = age;
}

// MAP CONTROLLAER

function renderPlaces() {
  const locations = getPlaces();

  const locationsSTR = locations.map((location) => {
   return `
    <li data-id-${location.id} onclick="onSavedlocationClick('${location.id}')">
         <span>${location.name}</span>  <button data-id-${location.id} onClick="onDeleteLocation('${location.id}')" class="delete-btn">x</button>
    </li>
    `
});
   const elSavedLocations = document.querySelector('.saved-locations-list')
   elSavedLocations.innerHTML= locationsSTR
   console.log(elSavedLocations);
}


function onInitMap() {
  initMap();
  renderPlaces()
  
}

function onMyLocation() {
  centerMap();
}

function onSavedlocationClick(locationId) {
    const place = findPlaceById(locationId)
    if (!place) return
    gCurrMarker  = placeMarkerAndPanTo(place.pos,place.name)
}


function mapReady() {
  console.log("map is ready");
}

function onDeleteLocation(locationId){
    
    delteLocation(gCurrMarker,locationId)
    renderPlaces()

}




// function initMap(lat,lng){
//     console.log('lat',lat);
//     console.log('lng',lng);

// }
