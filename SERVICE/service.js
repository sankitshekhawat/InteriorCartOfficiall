  const slideshowContainers = document.querySelectorAll('.slideshow-container');

  function showNextSlide(container) {
      const slideshowImages = container.querySelectorAll('.slideshow-image');
      let currentSlide = 0;

      function displayNextSlide() {
          slideshowImages[currentSlide].style.display = 'none';
          currentSlide = (currentSlide + 1) % slideshowImages.length;
          slideshowImages[currentSlide].style.display = 'block';
      }

      setInterval(displayNextSlide, 3000);
  }

  slideshowContainers.forEach(showNextSlide);