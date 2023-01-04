$(document).ready(function () {
  $('.dest_carus').slick(
    {
       

        slidesToShow:1,
        slidesToScroll: 1,
        dots:true,
        arrows:false,
        adaptiveHeight:true,
        speed:1000,
        easing:'linear',
        initialSlide:0,
        autoplay:false,
        autoplaySpeed:1500,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        draggable:false,
        swipe:true,
        touchThreshold:10,
        touchMove:true,
        waitForAnimate:false,
        centerMode:false,
        variableWidth:false,
        rows:1,
        slidesPerRow:1,
        vertical:false,
        verticalSwiping:true,
        responsive: [
            { breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                  arrows:false
              }
            },
            
          ]

        });

        /* $('#community').validate();
        $('#subscribe').validate({
          rules: {
            name: "required"
          }
        }
          );
 */
       /*  $('#subscribe-form').validate();
        $('#community-form').validate(); */

        //Smoth scroll and pageup

        $(window).scroll(function() {
          if ($(this).scrollTop()  > 1600) {
            $('.pageup').fadeIn();
          } else {
            $('.pageup').fadeOut();
          }
        });

        $("a[href^='#]").click(function() {
          const _href = $(this).attr("href");
          $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
          return false;
        });

});

