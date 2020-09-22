/* Preloader function */
$(function(){ // this replaces document.ready
  setTimeout(function(){
    $('.pre-loader').fadeOut('slow', function() {
      $(this).remove();
    });
   }, 1500);
});
/* Show and hide menu */
$(document).ready(function(){
    
    'use strict';

    $(window).scroll(function() {
    
        'use strict';

        if($(window).scrollTop() < 80 ) {

            $('.navbar').css ({
               'margin-top':'-100px',
               'opacity': '0'
            });
        }else {

            $('.navbar').css ({
                'margin-top':'0px',
                'opacity':'1'
            });
        }
        
    })
});

//Add smooth scrolling
$(document).ready(function(){

    'use strict'
    
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
})

//Add Counter
$(document).ready(function(){

  $('.counter-num').counterUp({
    delay: 10,
    time: 2000
  });
});

//Add Animation //Initialize wow
$(document).ready(function(){

  'use strict';
  new WOW().init();
  
})