var swiper = new Swiper(".mySwiper1", {
    direction: "vertical",
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination1",
      clickable: true,
    },
  });

  $(".hamburger1").on("click", function(){
    $(this).toggleClass("active");
    $(".menu-item1").toggleClass("active");
  })
  
  $(document).ready(function(){
    $("select").niceSelect();
  })
  
  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    
    freeMode: true,
    // centeredSlides: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
    breakpoints: {
      575: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      750: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
  
    },
  });

  var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 30,
    
    freeMode: true,
    // centeredSlides: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination3",
      clickable: true,
    },
    breakpoints: {
      // 575: {
      //   slidesPerView: 2,
      //   spaceBetween: 30,
      // },

      750: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
  
    },
  });