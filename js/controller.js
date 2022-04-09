'use strict'


function onSubmitForm(ev){
    ev.preventDefault()
    const userEmail = document.querySelector('input[name=email]').value
    updateUser(userEmail)
    
}


function showAge(age){
 document.querySelector('.age-display').innerText = age
 
}


function getPosition(){
    console.log('getting pos');
    navigator.geolocation.getCurrentPosition(getLocation,handleLocationErorr)

}

function getLocation(pos){
    initMap(pos.coords.latitude,pos.coords.longitude)
     console.log(pos.coords.latitude,pos.coords.longitude)
     console.log('getting location',pos)
}

function handleLocationErorr(){
    console.log('handling erorr');
}

function initMap(lat,lng) {
    const elMap = document.querySelector('.map-container')
    let options = {
        center: {lat,lng},
        zoom: 10
    }

    const map = new google.maps.Map(elMap,options)
}

function mapReady(){
    console.log('map is ready');
}


// function initMap(lat,lng){
//     console.log('lat',lat);
//     console.log('lng',lng);

// }


