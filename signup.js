
  document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const fullname = document.getElementById('fullname').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Password confirmation check
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Create user object
    const user = {
      fullname: fullname,
      username: username,
      email: email,
      password: password
    };

    // Save user to localStorage
    localStorage.setItem('user', JSON.stringify(user));
    alert('Sign up successful! Redirecting to login...');
    window.location.href = 'login.html';
  });
