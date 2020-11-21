var mySwiper = new Swiper ('.swiper-container', {
  // ここからオプション
  loop: true,
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  autoplay: {
    delay: 5000,
  },
});