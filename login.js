document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Retrieve user data from localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
      alert('Login successful!');
      window.location.href = 'index.html';
    } else {
      alert('Invalid email or password.');
    }
  });