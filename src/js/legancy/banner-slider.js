;(function() {
  document.addEventListener('DOMContentLoaded', function() {
    const bannerSlider = document.querySelectorAll('.js-banner-slider')

    if (bannerSlider.length) {
      for (const bannerSliderElement of bannerSlider) {
        const bannerSliderSwiper = document.querySelector('.js-banner-slider-swiper')

        let prev = bannerSliderElement.querySelector('.js-banner-slider-prev') || document.createElement('div');
        let next = bannerSliderElement.querySelector('.js-banner-slider-next') || document.createElement('div');
        let pagination = bannerSliderElement.querySelector('.js-banner-slider-pagination') || document.createElement('div');

        new Swiper(bannerSliderSwiper, {
          slidesPerView: 'auto',
          spaceBetween: 30,
          navigation: {
            nextEl: next,
            prevEl: prev
          },
          autoplay: {
            delay: 5000
          },
          pagination: {
            el: pagination,
            clickable: true,
          }
        })
      }
    }
  })
})()
