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