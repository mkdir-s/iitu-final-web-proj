const authForm = document.getElementById('auth-form');

authForm.addEventListener('submit', (e) => {
  // cancel default action to submit
  e.preventDefault();
  // get values of inputs
  let loginEmail = document.getElementById('auth-email').value;
  let loginPassword = document.getElementById('auth-password').value;

  // get email and password from localStorage
  let storedEmail = localStorage.getItem('userEmail');
  let storedPassword = localStorage.getItem('userPassword');

  let errorElement = document.getElementById('auth-warn');

  // comparing the entered data with the data in the local storage
  if (loginEmail !== storedEmail || loginPassword !== storedPassword) {
      errorElement.textContent = 'Email or password is wrong';
      return;
  } else {
      errorElement.textContent = '';
      // add information about successful authorization in local storage
      localStorage.setItem('isLoggedIn', 'true');

      // redirect user to index.html
      window.location.href = 'index.html';
  }
});