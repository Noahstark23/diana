document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('login-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var user = document.getElementById('username').value;
            var pass = document.getElementById('password').value;
            if (user === 'admin' && pass === 'password') {
                alert('Login successful!');
            } else {
                alert('Invalid credentials');
            }
        });
    }
});
