$(document).ready(function(){
    let owl = $('.owl-carousel');
   
   owl.owlCarousel({
        responsive: {
            0 : {
                items : 1,
                nav : true,
                slideBy:1,
                loop: true
                // autoplay: true
            },
            632: {
                items : 3,
                nav: false,
                mouseDrag:false
            }
        }
    });
    $('.next').click(function(){
        owl.trigger('next.owl.carousel');
    });
    $('.prev').click(function(){
        owl.trigger('prev.owl.carousel', [300]);
    })
  });