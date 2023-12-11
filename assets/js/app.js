document.addEventListener('DOMContentLoaded', () => {
  let isLoggedIn = localStorage.getItem('isLoggedIn');
  const headerButtons = document.body.querySelector('.header-buttons');
  const logOutButton = document.getElementById('header-logOut');

  if (isLoggedIn) {
    headerButtons.style.display = 'none';
    logOutButton.style.display = 'block';
  }
  
  logOutButton.addEventListener('click', (e) => {
    e.preventDefault();

    location.reload();
    localStorage.removeItem('isLoggedIn');
  })
})