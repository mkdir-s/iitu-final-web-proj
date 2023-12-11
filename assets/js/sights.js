// take links to vars of dropdown options and gallery/table sections
let dropdownTableOption = document.getElementById('sights-table');
let dropdownGalleryOption = document.getElementById('sights-gallery');
let sightsGallerySection = document.body.querySelector('.sights-gallery');
let sightsTableSection = document.body.querySelector('.sights-table');

// if click on gallery option - show gallery section (thanks to class sights-shown)
dropdownGalleryOption.addEventListener('click', (e) => {
  e.preventDefault();
  sightsGallerySection.classList.add('sights-shown');
  sightsTableSection.classList.remove('sights-shown');
})

// if click on table option - show gallery section (thanks to class sights-shown)
dropdownTableOption.addEventListener('click', (e) => {
  e.preventDefault();
  sightsGallerySection.classList.remove('sights-shown');
  sightsTableSection.classList.add('sights-shown');
})

// take link to var of sights items
let sightsItems = document.body.querySelectorAll('.sights__item');

// cycle, where on every item i add event listener to click
sightsItems.forEach(oneItem => {
  oneItem.addEventListener('click', (e) => {
    // take link to vars of modal window and close icon of this modal window
    const modalWindow = document.body.querySelector(`[data-modal='${e.currentTarget.dataset.id}'`);
    const closeIcon = modalWindow.querySelector('.sights__box-close');
    // add shown class (this class make display: flex for modal window (not display: none))
    modalWindow.classList.add('sights__modal--shown');
    // add overflow hidden to body when modal window is open to user can't scroll page
    document.body.classList.add('overflow-hidden');
    closeIcon.addEventListener('click', (e) => {
      modalWindow.classList.remove('sights__modal--shown');
      document.body.classList.remove('overflow-hidden');
    })
    // if user press esc - remove shown class (make display: none for modal window)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        modalWindow.classList.remove('sights__modal--shown');
        document.body.classList.remove('overflow-hidden');
      }
    })
  })
})