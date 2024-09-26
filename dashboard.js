// Display username from localStorage
const user = JSON.parse(localStorage.getItem('user'));

if (user) {
  document.getElementById('usernameDisplay').textContent = user.fullname.toUpperCase();
  document.getElementById('userViewName').textContent = user.fullname;
}