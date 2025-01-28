document.getElementById('switch-to-signup').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('login-form').classList.remove('active-form');
  document.getElementById('signup-form').classList.add('active-form');
});

document.getElementById('switch-to-login').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('signup-form').classList.remove('active-form');
  document.getElementById('login-form').classList.add('active-form');
});
