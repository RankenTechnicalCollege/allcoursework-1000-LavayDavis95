// Swiper Initialization
    const swiper = new Swiper('.swiper', {
      loop: true,
      autoplay: {
        delay: 3000, // 3 seconds
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      effect: 'slide', // You can change this to 'fade', 'cube', 'coverflow', or 'flip'
    });
