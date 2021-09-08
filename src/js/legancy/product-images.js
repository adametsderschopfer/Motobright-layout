;(function() {
  document.addEventListener('DOMContentLoaded', function() {
    const imagesContainer = document.querySelector('.js-images')
    if (imagesContainer) {
      const imagesList = imagesContainer.querySelector('.js-images-list')
      const imagesCurrent = imagesContainer.querySelector('.js-images-current')

      if (imagesList && imagesCurrent) {
        const imagesItems = imagesList.querySelectorAll('.js-images-item')
        if (imagesItems.length) {
          for (const imagesItem of imagesItems) {
            imagesItem.addEventListener('click', function() {
              imagesCurrent.style.opacity = '0';
              
              const tId = setTimeout(() => {
                imagesCurrent.src = '';
                imagesCurrent.src = imagesItem.src
                imagesCurrent.style.opacity = '1';

                clearTimeout(tId)
              }, 300);
            })
          }
        }
      }
    }
  })
})()
