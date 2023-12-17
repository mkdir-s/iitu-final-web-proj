// when page is loaded, check loggenIn var in localStorage

document.addEventListener('DOMContentLoaded', () => {
  let isLoggedIn = localStorage.getItem('isLoggedIn');
  const headerButtons = document.body.querySelector('.header-buttons');
  const logOutButton = document.getElementById('header-logOut');

  // is is logged in - hide buttons and add button 'log out'
  if (isLoggedIn) {
    headerButtons.style.display = 'none';
    logOutButton.style.display = 'block';
  }
  
  logOutButton.addEventListener('click', (e) => {
    e.preventDefault();

    // refresh page to show another button
    location.reload();
    localStorage.removeItem('isLoggedIn');
  })
})