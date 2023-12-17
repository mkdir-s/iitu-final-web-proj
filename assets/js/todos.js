const form = document.body.querySelector('.todos__form');
const input = document.body.querySelector('.todos__form-input');
const placesWrapper = document.body.querySelector('.todos__form-list');


class Place {
  constructor(wrapper, name='nameless place') {
    this.item = document.createElement('div');
    this.item.classList.add('todos__list-item');
    this.itemText = document.createElement('p');
    this.itemText.textContent = name;
    this.itemText.classList.add('todos__list-text');

    wrapper.append(this.item);
    this.item.append(this.itemText);
  }
}

function createPlace(wrapper, name) {
  new Place(wrapper, name);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value.length > 0) {
    createPlace(placesWrapper, input.value);
  } else {
    createPlace(placesWrapper, 'nameless place');
  }
  input.value = '';
})