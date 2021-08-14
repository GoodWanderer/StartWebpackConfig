
  import Swiper from 'swiper';
  import 'swiper/swiper-bundle.css';

  const swiper = new Swiper('.trend__swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });