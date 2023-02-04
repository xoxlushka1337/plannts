//service filter button

function app() {
  const buttonsService = document.querySelectorAll('.service__button');
  const cards = document.querySelectorAll('.service__block');
  let visibleCategory = new Array();

  function filter(category, cards) {
    if (!visibleCategory.includes(category)) {
      visibleCategory.push(category);
      setBlur(cards);
    } else {
      var index = visibleCategory.indexOf(category);
      if (index !== -1) {
        visibleCategory.splice(index, 1);
      }

      setBlur(cards);
    }

    if (visibleCategory.length === 0 || visibleCategory.length > 2) {
      visibleCategory.length = 0;
      cards.forEach((card) => {
        card.classList.remove('hide');
      });

      for (let i = 0; i < buttonsService.length; i++) {
        buttonsService[i].classList.remove('button-active');
      }
    }
  }

  function setBlur(cards) {
    cards.forEach((card) => {
      card.classList.add('service-blur');

      if (visibleCategory.includes(card.classList[1])) {
        card.classList.remove('service-blur');
      }
    });
  }

  buttonsService.forEach((service__button) => {
    service__button.addEventListener('click', () => {
      const currentCattegoru = service__button.dataset.filter;

      if (service__button.classList.contains('button-active')) {
        service__button.classList.remove('button-active');
      } else {
        service__button.classList.add('button-active');
      }

      filter(currentCattegoru, cards);
    });
  });
}
app();
