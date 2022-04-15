let training = $("#training");

training.slick({
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 900,
    responsive: [
        {
          breakpoint: 768,
          settings: {
          slidesToShow: 2,
          centerMode: false,
          slidesToScroll: 1
          }
        },
        {
            breakpoint: 520,
            settings: {
            slidesToShow: 1,
            centerMode: false,
            slidesToScroll: 1
            }
          }
       ]
});


$("#training__arrow-prev").on("click", function(event) {
    event.preventDefault();

    training.slick('slickPrev');
});

$("#training__arrow-next").on("click", function(event) {
    event.preventDefault();

    training.slick('slickNext');
});