'use strict'

function saveToStorage(key,value){
    console.log('saving');
    localStorage.setItem(key,JSON.stringify(value))
}

function loadFromStorage(key){
   return JSON.parse(localStorage.getItem(key)) 

}