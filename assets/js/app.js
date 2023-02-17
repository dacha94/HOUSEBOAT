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

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuLinks = document.querySelectorAll('.menu__link');

if(menuLinks) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', () => {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
        })
    })
}

if (iconMenu) {
    iconMenu.addEventListener('click', e => {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}