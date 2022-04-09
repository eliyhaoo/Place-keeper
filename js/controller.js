'use strict'


function onSubmitForm(ev){
    ev.preventDefault()
    const userEmail = document.querySelector('input[name=email]').value
    updateUser(userEmail)
    
}


function showAge(age){
 document.querySelector('.age-display').innerText = age
 
}