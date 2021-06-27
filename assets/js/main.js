$(document).ready(function(){
     $('body').materialScrollTop();
     new WOW ().init();

     $(".header-nav-icon").click(function(){
          $('.header-nav').slideToggle();
      });
     $(".second-nav-icon").click(function(){
          $('#header-navigation').slideToggle();
      });
});