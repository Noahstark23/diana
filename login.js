// Simple login script
// Hardcoded credentials for demonstration
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    if (user === 'user' && pass === 'password') {
      localStorage.setItem('loggedInUser', user);
      window.location.href = 'index.html';
    } else {
      alert('Invalid credentials');
    }
  });
}

// Update nav link based on login status
function updateLoginLink() {
  const link = document.getElementById('login-link');
  if (!link) return;
  const user = localStorage.getItem('loggedInUser');
  if (user) {
    link.textContent = 'Logout';
    link.href = '#';
    link.addEventListener('click', function(e) {
      e.preventDefault();
      localStorage.removeItem('loggedInUser');
      window.location.reload();
    });
  } else {
    link.textContent = 'Login';
    link.href = 'login.html';
  }
}

document.addEventListener('DOMContentLoaded', updateLoginLink);
