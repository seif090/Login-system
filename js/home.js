let userNameElement = document.getElementById('user-name');
let logOutBtn = document.getElementById('logout-btn');
let restoredUserName = localStorage.getItem('user_name');

if (restoredUserName) {
  userNameElement.innerText = restoredUserName;
}

logOutBtn.addEventListener('click', function () {
  localStorage.removeItem('user_name');
});
