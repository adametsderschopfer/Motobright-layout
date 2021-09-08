//if dev
window.isDev = window.location.hostname === 'localhost' || window.location.hostname.startsWith('html.dev')

// LazyLoad
;(function () {
  // Set the options to make LazyLoad self-initialize
  window.lazyLoadOptions = {
    elements_selector: '.lazy',
    // ... more custom settings?
  }

  // Listen to the initialization event and get the instance of LazyLoad
  window.addEventListener(
    'LazyLoad::Initialized',
    function (event) {
      window.lazyLoadInstance = event.detail.instance
      window.lazyLoadInstance.update()
    },
    false
  )
})()


// SVG
;(function () {
  loadScript(
    'https://cdnjs.cloudflare.com/ajax/libs/svg4everybody/2.1.9/svg4everybody.min.js',
    function () {
      svg4everybody()
    }
  )
})();

;(function () {
  function phoneMasks() {
    const inputPhoneAll = document.querySelectorAll('.js-phone-mask');
    const im = new Inputmask({'mask': '+7 (999) 999 99 99', showMaskOnHover : false});

    if(inputPhoneAll.length) {
      inputPhoneAll.forEach(function (el) {
        im.mask(el);
      });
    }
  }

  window.phoneMasks = {
    init: phoneMasks
  };

  document.addEventListener('DOMContentLoaded', function() {
    window.phoneMasks.init();
  });
})();

;(function() {
  const orderPopupHtml = document.querySelector('.js-call-popup-order');
  const techPopupHtml = document.querySelector('.js-call-popup-tech');

  const orderPopup = legancyPopup({
    content: orderPopupHtml,
    title: '',
    onAfterAppend(content) {
      orderPopupHtml.remove();
      const closeBtn = content.querySelector('.js-default-popup-form__close');

      closeBtn.addEventListener('click', () => {
         orderPopup.close();
      });
    }
  });

  const techPopup = legancyPopup({
    content: techPopupHtml,
    title: '',
    onAfterAppend(content) {
      techPopupHtml.remove();
      const closeBtn = content.querySelector('.js-default-popup-form__close');

      closeBtn.addEventListener('click', () => {
         techPopup.close();
      });
    }
  });

  const orderPopupBtns = document.querySelectorAll('[data-popup="order"]');
  const techPopupBtns = document.querySelectorAll('[data-popup="tech"]');

  if (orderPopupBtns.length) {
    for (const orderPopupBtn of orderPopupBtns) {
      orderPopupBtn.addEventListener('click', () => {
        orderPopup.open();
      });
    }
  }

  if (techPopupBtns.length) {
    for (const techPopupBtn of techPopupBtns) {
      techPopupBtn.addEventListener('click', () => {
        techPopup.open();
      });
    }
  }
})();
