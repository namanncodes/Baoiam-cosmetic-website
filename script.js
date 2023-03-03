(function () {
    var words = ["Lorem ipsum dolor sit, amet consectetur adipisicing elit."," Cum dignissimos error repellat nesciunt sequi illum aliquam.","UI/Unix,Developer,Youtube,Happy Person" ],
    i = 0;
    setInterval(function(){ $('#words').fadeOut(function(){
        $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
      }); }, 2500)
  })();




  var swiper = new Swiper(".arrivals-slider", {
    loop: true,
    grabCursor : true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      550: {
        slidesPerView: 2,
      },
      850: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });





  
  var swiper = new Swiper(".blogs-slider", {
    loop: true,
    grabCursor : true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      650: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });