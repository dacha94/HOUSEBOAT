let swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 15,
  loop: true,
  speed:400,
  interval: 10000,
  mousewheel: true,
  keyboard: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }, 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 5
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    830: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    1080: {
      slidesPerView: 2,
      spaceBetween: 8
    },
    2160: {
      slidesPerView: 2,
      spaceBetween: 10
    }
  }
});  

const header = document.querySelector('.header');
const burger = document.querySelector('.header__burger');

burger.addEventListener('click', () => {
  header.classList.toggle('open');
})
