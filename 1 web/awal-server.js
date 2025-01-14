document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (password.length < 8) {
        alert('Password harus minimal 8 karakter.');
        return;
    }

    if (username === 'admin' && password === '12345678') {
        window.location.href = 'login-server.html';
    } else {
        alert('Username atau password salah.');
    }
});
