var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.3,
    centeredSlides: true,
    spaceBetween: 15,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay:{
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });

  var menu = document.querySelector(".ri-menu-3-line");
  var close = document.querySelector(".ri-close-fill");
  var nav = document.querySelector(".respo-nav");

  menu.addEventListener("click", function() {
    nav.style.top = "0%";
  });

  close.addEventListener("click", function() {
    nav.style.top = "-100%";
  })

  var search = document.querySelector("#search");
  var popUp = document.querySelector(".search-popup");
  var flag = 0;

  search.addEventListener("click", function() {
    if(flag == 0) {
      popUp.style.top = "6%";
      flag = 1;
    }
    else {
      popUp.style.top = "-10%";
      flag = 0;
    }
  })