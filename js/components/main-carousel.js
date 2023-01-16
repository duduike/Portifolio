    const btnRight = document.querySelector('.button-arrow.-right');
    const btnLeft = document.querySelector('.button-arrow.-left');
    const elements = document.querySelector('.elements');
    let pixels = 0
    let totalWidth = elements.scrollWidth;

    btnRight.addEventListener('click', function () {

      pixels = pixels + 100;
      elements.style = `transform: translateX(${pixels}px)`;

      if (pixels > totalWidth - 200) {
        pixels = 0 - 100;
      }
    })

    btnLeft.addEventListener('click', function () {
      pixels = pixels - 100;
      elements.style = `transform: translateX(${pixels}px)`;

      if (pixels < -totalWidth + 200) {
        pixels = 0 + 100;
      }
    })
