var swiper = new Swiper(".mySwiper1", {
    direction: "vertical",
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    //   },
    pagination: {
      el: ".swiper-pagination1",
      clickable: true,
    },
  });

  $(".hamburger").on("click", function(){
    $(this).toggleClass("active");
    $(".menu-item").toggleClass("active");
  })
  
  $(document).ready(function(){
    $("select").niceSelect();
  })