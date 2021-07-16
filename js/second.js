var typed = new Typed('.type-text', {
    strings: ["Programming", "Web Development", "JavaScript", "Python"],
    loop: true,
    typeSpeed: 80,
    backSpeed: 70
  });
  /* Type JS End */
  $(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('#scrolltop').fadeIn();
        }
        else{
            $('#scrolltop').fadeOut();
        }
    });
    $('#scrolltop').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
  });
/* Scroll JS End */


/* Sketch End */

