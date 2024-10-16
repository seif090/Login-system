let emailInput = document.getElementById('email-input');
let passwordInput = document.getElementById('password-input');
let logInBtn = document.getElementById('login-btn');
let alertMessage = document.getElementById('alert');
let incorrectMessage = document.getElementById('incorrect');

function handeSignIn() {
  if (emailInput.value == '' || passwordInput.value == '') {
    alertMessage.classList.add('show');
    return;
  } else {
    getSavedDataFromLocal();
  }
}

function getSavedDataFromLocal() {
  let the_data = JSON.parse(localStorage.getItem('all_users'));

  if (the_data) {
    the_data.forEach((data) => {
      if (
        data.email === emailInput.value &&
        data.password === passwordInput.value
      ) {
        localStorage.setItem('user_name', data.name);
        window.location.replace(
          'https://ahmed-abouelfetouh.github.io/smart-login-app/pages/home.html',
        );
      } else {
        if (emailInput.value !== '' || passwordInput.value !== '') {
          incorrectMessage.classList.add('show');
          if (alertMessage) {
            alertMessage.classList.remove('show');
          }
        }
      }
    });
  }
}

getSavedDataFromLocal();

logInBtn.addEventListener('click', function (e) {
  e.preventDefault();
  handeSignIn();
});
