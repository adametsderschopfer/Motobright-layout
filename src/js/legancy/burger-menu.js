;(function() {
  document.addEventListener('click', () => {
    const openButtons = document.querySelectorAll('.js-burger-menu-open')
    const closeButtons = document.querySelectorAll('.js-burger-menu-close')
    const menu = document.querySelector('.js-burger-menu')

    if (menu) {
      if (openButtons.length) {
        for (const openButton of openButtons) {
          openButton.addEventListener('click', () => {
            menu.classList.add('active');
            document.body.style.overflow = 'hidden';
          });
        }
      }
      
      if (closeButtons.length) {
        for (const closeButton of closeButtons) {
          closeButton.addEventListener('click', () => {
            menu.classList.remove('active');
            document.body.style.overflow = 'visible';
          });
        }
      }
    }
  })
})()
