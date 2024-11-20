document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); 

  const email = document.getElementById('email').value.trim().toLowerCase();
  const password = document.getElementById('password').value.trim();
  const messageDiv = document.getElementById('message');

  messageDiv.innerHTML = '';

  console.log(`Email: "${email}"`);
  console.log(`Password: "${password}"`);

  if (!email || !password) {
    messageDiv.innerHTML = `<p class="text-danger">You seem to have forgotten your username and password.</p>`;
  } else if (email === 'admin@example.com' && password === 'password') {
    messageDiv.innerHTML = `<p class="text-success">Welcome back Admin!</p>`;
  } else {
    messageDiv.innerHTML = `<p class="text-danger">That email and password doesn't seem to be right. Try again.</p>`;
  }
});