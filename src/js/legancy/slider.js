;(function() {
  document.addEventListener('DOMContentLoaded', function() {
    let powerSlider = document.querySelector('#power-slider');
    let powerSliderMax = document.querySelector('#power-slider-max');
    let powerSliderMin = document.querySelector('#power-slider-min');

    if (powerSlider) {
      const slider = noUiSlider.create(powerSlider, {
        start: [+powerSlider.dataset.minStart || 0, +powerSlider.dataset.maxStart || 0],
        connect: true,
        range: {
          'min': +powerSlider.dataset.min || 0,
          'max': +powerSlider.dataset.max || 10
        }
      });

      slider.on('update', () => {
        const [min, max] = slider.get();

         if (powerSliderMax) {
           powerSliderMax.innerText = parseInt(max).toString();
         }

         if (powerSliderMin) {
           powerSliderMin.innerText = parseInt(min).toString();
         }
      });
    }
  });
})();
