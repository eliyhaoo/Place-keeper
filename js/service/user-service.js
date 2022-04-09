"use strict";

let gUsers = {};
_createUsers();

function updateUser(email) {
  let user = _findUser(email);
  if (!user) {
    console.log("creating user");
    user =(createUser(email));
    gUsers.push(user)
  }
  const age = document.querySelector('input[name="age"]').value;
  const birthDate = document.querySelector('input[name="birth-date"]').value;
  const birthTime = document.querySelector('input[name="birth-time"]').value;

  user.age = age ? age : user.age;
  user["birth-date"] = birthDate ? birthDate : user["birth-date"];
  user["birth-time"] = birthTime ? birthTime : user["birth-time"];
  _updateColors(user)

  _saveUsersToStorage();
}

function createUser(email) {
  return {
    email,
    age:null,
    "bg-color": null,
    "txt-color": null,
    "birth-date": null,
    "birth-time": null,
  };
}

function _updateColors(user){
    const bgColor = document.querySelector('input[name="bg-color"]').value
    const txtColor = document.querySelector('input[name="text-color"]').value
    if (!bgColor & !txtColor) return
    user['bg-color']= bgColor ? bgColor : user['bg-color']
    user['txt-color']= txtColor ? txtColor : user['txt-color']
    document.body.style.backgroundColor = user['bg-color']
    document.body.style.color = user['txt-color']

}

function _createUsers() {
  let users = loadFromStorage("gUsersDB");
  if (!users || !users.length) {
    users = [
      createUser("test1@mail.com"),
      createUser("test2@mail.com"),
      createUser("test3@mail.com"),
    ];
  }
  gUsers = users;
  _saveUsersToStorage();
}

function _findUser(email) {
  return gUsers.find((user) => user.email === email);
}

function _saveUsersToStorage() {
  saveToStorage("gUsersDB", gUsers);
}
