const RegistrForm = document.getElementById('sign-up__form');

RegistrForm.addEventListener('submit', (e) => {
  // cancel default action to submit
  e.preventDefault();
  // get values of inputs
  const email = document.getElementById('sign-box__email').value;
  const password = document.getElementById('sign-box__password').value;

  // validation for email. reg exp. (every symbol before @ and every symbol before . and every symbol)
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let emailErrorElement = document.getElementById('sign-box__email-validation');
  if (!emailRegex.test(email)) {
      emailErrorElement.textContent = 'Invalid email. Enter valid email';
      return;
  } else {
      emailErrorElement.textContent = '';
  }

  // validation for password
  let passwordErrorElement = document.getElementById('sign-box__password-validation');
  if (password.length < 3) {
      passwordErrorElement.textContent = 'Password must be at least 3 characters long';
      return;
  } else {
      passwordErrorElement.textContent = '';
  }

  // save email and password localStorage
  localStorage.setItem('userEmail', email);
  localStorage.setItem('userPassword', password);

  alert('Registration successful');
});

