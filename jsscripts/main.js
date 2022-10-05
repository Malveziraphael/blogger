const responsive = {
  0 : {
    items: 1
  },
   320 : {
      items: 1
   },
   560 :{
     items: 2
   },
   960 :{
     item: 3
   },

}





$(document).ready(function() {
  $nav = $('.nav');
  $toggleCollapse = $('.toggle-collapse');

  /** Click event on toggle menu */
  $toggleCollapse.click(function(){
   $nav.toggleClass('collapse');
  
  })

  // owl-crousel for blog
   $('.owl-carousel').owlCarousel({
     loop: true,
     autoplay: true,
     autoplayTimeout: 3000,
     dots: false,
     nav: true,
     navText: [$('.owl-navegation .owl-nav-prev'), $('.owl-navegation .owl-nav-next') ],
     responsive: responsive
   });
 



   // click up page
   $('.move-up span').click(function(){
      $('html, body').animate({
        scrollTop: 0
      }, 1000 );

   })



   //aos instance animation acces
  AOS.init();

  
});