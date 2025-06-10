// Simple login script with admin role
const creds = [
  {username: 'user', password: 'password', role: 'user'},
  {username: 'admin', password: 'adminpass', role: 'admin'}
];

const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const found = creds.find(c => c.username === user && c.password === pass);
    if (found) {
      localStorage.setItem('loggedInUser', found.username);
      localStorage.setItem('role', found.role);
      window.location.href = found.role === 'admin' ? 'admin.html' : 'dashboard.html';
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
      localStorage.removeItem('role');
      window.location.reload();
    });
  } else {
    link.textContent = 'Login';
    link.href = 'login.html';
  }
}

function updateDashboardLink() {
  const dash = document.getElementById('dashboard-link');
  if (!dash) return;
  const user = localStorage.getItem('loggedInUser');
  const role = localStorage.getItem('role');
  if (user) {
    dash.style.display = 'inline-block';
    dash.textContent = role === 'admin' ? 'Admin Panel' : 'Dashboard';
    dash.href = role === 'admin' ? 'admin.html' : 'dashboard.html';
  } else {
    dash.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  updateLoginLink();
  updateDashboardLink();
});
