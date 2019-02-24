$(document).ready(function(){
     $(".main_slider_wrap").owlCarousel({
        dots : false,
        nav : false,
        autoplay : true,
        autoplayTimeout : 5000,
        loop : true,
        items : 1,
      });
     $(".about_sect__slider").owlCarousel({
        dots : false,
        nav : true,
        autoplay : true,
        autoplayTimeout : 5000,
        loop : true,
        items : 1,
      });
     $(".about_page__docum_slider").owlCarousel({
        dots : false,
        nav : true,
        autoplay : true,
        autoplayTimeout : 5000,
        loop : true,
        items : 3,
        margin : 30,
      });

      $('.block_wrap').click(function(){
        $(this).parent().toggleClass('open_question');
      });

      $('.products__menu_link').click(function(){
        $(this).parent().toggleClass('drop_sub_menu_items');
      });

      /*$('.products__menu_link').click(function(){ 
        $('.menu_wrap').toggleClass('drop_sub_menu_items'); 
      });*/


     $('.mobile-menu').click(function(){ 
        $('.header_menu_wrap').toggleClass('openedMob-menu'); 
      });


/*      $(window).on("scroll", function() {
        if ($(window).scrollTop() > 200){
          $('body').addClass('header_menu_up');
        } else {
          $('body').removeClass('header_menu_up');
        }
      });*/
  });