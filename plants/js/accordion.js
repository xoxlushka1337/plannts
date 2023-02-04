//prices accordion

document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.prices__lining');

  let openedAccordion = null;
  accordions.forEach((el) => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;

      if (openedAccordion == null) {
        self.classList.add('open');
        openedAccordion = self;
        return;
      }

      if (!self.classList.contains('open')) {
        openedAccordion.classList.remove('open');
        self.classList.add('open');
        openedAccordion = self;
      } else {
        openedAccordion.classList.remove('open');
        openedAccordion = null;
      }
    });
  });
  const buttonOrders = document.querySelectorAll('.prices__order');
  buttonOrders.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });
});
