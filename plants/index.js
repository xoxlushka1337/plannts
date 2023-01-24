console.log(
  ' 1. Вёрстка валидная +10\n 2. Вёрстка семантическая +20\n В коде странице присутствуют следующие элементы (указано минимальное количество, может быть больше):\n header, main, footer +3\n четыре заголовка <h2> (количество секций минус одна, у которой заголовок <h1>) +3\n один элемент <nav> (панель навигации) +3\n два списка ul > li > a (панель навигации, ссылки на соцсети) +3\n пять кнопок <button> +2\n 3. Вёрстка соответствует макету +48\n блок <header> +6\n секция welcome +7\n секция about +7\n секция service +7\n секция prices +7\n секция contacts +7\n блок <footer> +7\n 4. Требования к css + 12\n для построения сетки используются флексы или гриды +2\n при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2\n фоновый цвет тянется на всю ширину страницы +2\n иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2\n изображения добавлены в формате .jpg или .png +2\n есть favicon +2\n Интерактивность, реализуемая через css +20\n плавная прокрутка по якорям +5\n cсылки в футере при нажатии на них ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/ +5\n интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +5\n обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5',
);
//burger
var header = document.querySelector('.header');

var sidebarIsOpen = () => header.classList.contains('open');

var openSidebar = () => {
  header.classList.add('open');
};

var closeSidebar = () => {
  header.classList.remove('open');
};

document.getElementById('burger').addEventListener('click', function (e) {
  sidebarIsOpen() ? closeSidebar() : openSidebar();
  e.stopPropagation();
});

document.addEventListener('click', function () {
  closeSidebar();
});

//service button

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

      // buttonsService.forEach((btn) => btn.classList.remove('button-actice'));
      for (let i = 0; i < buttonsService.length; i++) {
        buttonsService[i].classList.remove('button-active');
      }
    }
  }

  function setBlur(cards) {
    cards.forEach((card) => {
      card.classList.add('hide');

      if (visibleCategory.includes(card.classList[1])) {
        card.classList.remove('hide');
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
