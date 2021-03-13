$(function () {
    $('.slide_icon').slick({
        dots: true,
        infinite: true,
        arrows:false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        
    });

    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 780 ){
            $(".menu").addClass('nav_bg');
        }else{
            $(".menu").removeClass('nav_bg');
        }
        if(scrolling > 10){
            $('.top_to_bottom').fadeIn(1000);
        }else{
            $('.top_to_bottom').fadeOut(1000);
        }
    });
});