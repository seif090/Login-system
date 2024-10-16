let nameInput = document.getElementById('name-input');
let emailInput = document.getElementById('email-input');
let passwordInput = document.getElementById('password-input');
let signUpBtn = document.getElementById('signup-btn');
let alertMessage = document.getElementById('alert');
let successMessage = document.getElementById('success');
let existMessage = document.getElementById('exist');

let arrayOfUsers = [];

if (localStorage.getItem('all_users')) {
  arrayOfUsers = JSON.parse(localStorage.getItem('all_users'));
}

getDataFromLocal();

function addUsersToArray() {
  if (
    nameInput.value == '' ||
    emailInput.value == '' ||
    passwordInput.value == ''
  ) {
    alertMessage.classList.add('show');
    return;
  } else {
    if (checkEmailExist()) {
      return;
    }
    alertMessage.classList.remove('show');
    successMessage.classList.add('show');
    if (existMessage) {
      existMessage.classList.remove('show')
    }
    let users = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };
    arrayOfUsers.push(users);
    saveUsersToLocal(arrayOfUsers);
    clearAllInputs();
  }
}

function saveUsersToLocal(data) {
  localStorage.setItem('all_users', JSON.stringify(data));
}

function getDataFromLocal() {
  let data = localStorage.getItem('all_users');
  if (data) {
    let finalData = JSON.parse(data);
    console.log(finalData[0].name);
    saveUsersToLocal(finalData);
  }
}

function clearAllInputs() {
  nameInput.value = '';
  emailInput.value = '';
  passwordInput.value = '';
}

function checkEmailExist() {
  let localStorageData = JSON.parse(localStorage.getItem('all_users'));
  if (localStorageData) {
    if (localStorageData[0].email === emailInput.value) {
      existMessage.classList.add('show');
      successMessage.classList.remove('show')
      return true;
    } else {
      return false;
    }
  }
}

signUpBtn.addEventListener('click', function (e) {
  e.preventDefault();
  addUsersToArray();
});
