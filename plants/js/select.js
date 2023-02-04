const dropDownSelect = document.querySelector('.contacts__select');
const dropDownList = document.querySelector('.contacts__list');
const dropDownListItems = document.querySelectorAll('.contacts__list--item');

dropDownSelect.addEventListener('click', function () {
  dropDownList.classList.toggle('contacts__list--visible');
  this.classList.add('contacts__select--active');
});

dropDownListItems.forEach(function (listItem) {
  listItem.addEventListener('click', function (e) {
    dropDownSelect.innerText = this.innerText;
    dropDownSelect.focus();
    document.querySelector('.contacts__input').value = this.dataset.value;
    dropDownList.classList.remove('contacts__list--visible');
  });
});

const Canandaigua = {
  City: 'Canandaigua, NY',
  Phone: '+1 585	393 0001',
  Office: '151 Charlotte Street',
};
const NY = {
  City: 'New York City',
  Phone: '+1	212	456 0002',
  Office: '9 East 91st Street',
};
const Sherrill = {
  City: 'Sherrill, NY',
  Phone: '+1	315	908 0004',
  Office: '14 WEST Noyes BLVD',
};
const Yonkers = {
  City: 'Yonkers, NY',
  Phone: '+1	914	678 0003',
  Office: '511 Warburton Ave',
};

let city = new Map([
  ['Canandaigua, NY', Canandaigua],
  ['New York City', NY],
  ['Sherrill, NY', Sherrill],
  ['Yonkers, NY', Yonkers],
]);

const appNode = document.querySelector('.contacts__card1');
let html = '';

dropDownListItems.forEach(function (listCard) {
  listCard.addEventListener('click', function render(e) {
    e.stopPropagation();
    document.querySelector('.contacts__img').classList.add('contacts__img--active');
    document.querySelector('.contacts').classList.add('contacts--active');
    let cardCity = city.get(e.currentTarget.innerText);
    html += `
    <div class="contacts__card">
      <div class="contacts__inform">
        <div class="contacts__column1">
          <p class="contacts__item">City:</p>
          <p class="contacts__item">Phone:</p>
          <p class="contacts__item l">Office adress:</p>
        </div>
        <div class="contacts__column2">
          <p class="contacts__text">${cardCity.City}</p>
          <p class="contacts__text">${cardCity.Phone}</p>
          <p class="contacts__text l">${cardCity.Office}</p>
        </div>
      </div>
        <div class="contacts__call">
          <a class="contacts__call-a" href="tel:${cardCity.Phone}">Call us</a>
        </div> 
    </div>
      `;

    appNode.innerHTML = html;
  });
});

// Закрытие блока при клике

document.addEventListener('click', function (e) {
  const click = e.composedPath().includes(appNode);
  if (!click) {
    html = '';
    appNode.innerHTML = html;
    document.querySelector('.contacts__img').classList.remove('contacts__img--active');
    document.querySelector('.contacts').classList.remove('contacts--active');
  }
});
