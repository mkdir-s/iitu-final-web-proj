const form = document.body.querySelector('.todos__form');
const input = document.body.querySelector('.todos__form-input');
const placesWrapper = document.body.querySelector('.todos__form-list');

// class that describes place (item of todo)
class Place {
  // constructor describes what to do when we add one place (object)
  constructor(wrapper, name) {
    this.item = document.createElement('div');
    this.item.classList.add('todos__list-item');
    this.itemText = document.createElement('p');
    this.itemText.textContent = name;
    this.itemText.classList.add('todos__list-text');

    wrapper.append(this.item);
    this.item.append(this.itemText);
  }
}

// function to create places through the class Place
function createPlace(wrapper, name) {
  new Place(wrapper, name);
}


// when submit input in form - create place through the function createPlace
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value.length > 0) {
    createPlace(placesWrapper, input.value);
  } else {
    createPlace(placesWrapper, 'nameless place (please, write the name of place)');
  }
  input.value = '';
})