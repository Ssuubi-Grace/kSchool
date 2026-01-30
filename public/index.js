const historyContent = document.querySelector('.history-content');
const showLessButton = document.querySelector('.history-container button');

showLessButton.addEventListener('click', () => {
  if (historyContent.classList.contains('max-h-48')) {
    historyContent.classList.remove('max-h-48');
    showLessButton.textContent = 'Show Less';
  } else {
    historyContent.classList.add('max-h-48');
    showLessButton.textContent = 'Show More';
  }
});




/*WELCOME*/

document.addEventListener('DOMContentLoaded', function() {
      document.querySelector('.show-more-btn').addEventListener('click', function() {
        const hiddenContent = document.querySelector('.hidden-content');
        if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
          hiddenContent.style.display = 'inline';
          this.textContent = 'Show Less';
        } else {
          hiddenContent.style.display = 'none';
          this.textContent = 'Learn More';
        }
      });
    });


    /* Coursel*/
  document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carouselExample');
    let items = carousel.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showSlide(index) {
      items[currentIndex].classList.remove('active');
      currentIndex = (index + items.length) % items.length;
      items[currentIndex].classList.add('active');
    }

    document.querySelector('.carousel-control-prev').addEventListener('click', function (e) {
      e.preventDefault();
      showSlide(currentIndex - 1);
    });

    document.querySelector('.carousel-control-next').addEventListener('click', function (e) {
      e.preventDefault();
      showSlide(currentIndex + 1);
    });

    // Initially show the first slide
    items[currentIndex].classList.add('active');
  });


  /*impact */
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.item');

  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('animate-fall');
    }, index * 100); // Stagger the animation
  });
});

   //Back to top button
      function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      window.onscroll = function () {
        showBackToTopButton();
      };

      function showBackToTopButton() {
        const backToTopButton = document.querySelector(".back-to-top");
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          backToTopButton.style.display = "block";
        } else {
          backToTopButton.style.display = "none";
        }
      }

      /*STATS*/
    document.addEventListener("DOMContentLoaded", function() {
  const counters = document.querySelectorAll('.count');

  counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;

      const increment = target / 200; // Adjust this number to control the speed

      if (current < target) {
        counter.innerText = `${Math.ceil(current + increment)}`;
        setTimeout(updateCounter, 10);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
});


/* GALL COURASEL*//
const carousel = document.querySelector('.carousel');
const carouselInner = carousel.querySelector('.carousel-inner');
const carouselItems = carouselInner.querySelectorAll('.carousel-item');
const prevBtn = carousel.querySelector('.carousel-control-prev');
const nextBtn = carousel.querySelector('.carousel-control-next');

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
});