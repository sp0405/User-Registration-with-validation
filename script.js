const form = document.getElementById('registerForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // clear all error messages
  document.querySelectorAll('.error').forEach(el => el.textContent = '');
  successMsg.textContent = '';

  let valid = true;

  // username validation
  if (username.value.trim() === '') {
    document.getElementById('usernameError').textContent = 'Username is required';
    valid = false;
  } else if (username.value.trim().length < 3) {
    document.getElementById('usernameError').textContent = 'At least 3 characters required';
    valid = false;
  }

  // email validation
  const emailPattern = /^[a-z0-9._]+@[a-z]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email.value.trim())) {
    document.getElementById('emailError').textContent = 'Enter a valid email';
    valid = false;
  }

  // password validation
  if (password.value.length < 6) {
    document.getElementById('passwordError').textContent = 'Min 6 characters required';
    valid = false;
  }

  // confirm password
  if (password.value !== confirmPassword.value) {
    document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
    valid = false;
  }

  // success
  if (valid) {
    successMsg.textContent = '✅ Registration successful!';
    form.reset();
  }
});
