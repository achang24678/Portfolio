// function toggleContent() {
//     var x = document.getElementById("toogle");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

$(document).ready(function() {

            // Select all links with hashes
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

        //toggle about me hidden content
        $(".btn-toggle").click(function(){
          $(".toggle").slideToggle();
        });


     
        //scroll about me animation
        $('.js--wp-1').waypoint(function(direction) {
            $('.js--wp-1').addClass('animated fadeInLeft');
        }, {
            // when scroll to half of the section, show content
            offset: '70%'
        });
        $('.js--wp-2').waypoint(function(direction) {
            $('.js--wp-2').addClass('animated fadeIn');
        }, {
            // when scroll to half of the section, show content
            offset: '70%'
        });
        $('.js--wp-3').waypoint(function(direction) {
            $('.js--wp-3').addClass('animated fadeInRight');
        }, {
            // when scroll to half of the section, show content
            offset: '50%'
        });
        $('.js--wp-4').waypoint(function(direction) {
            $('.js--wp-4').addClass('animated fadeInDown');
        }, {
            // when scroll to half of the section, show content
            offset: '80%'
        });


        /* For the sticky navigation */
        $('.js--section-about').waypoint(function (direction) {
            if (direction == "down") {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
        }, {
                // 5px before we hit the about me
                offset: '5px;'
            });

        /* Mobile Nav */
        $('.js--nav-icon').click(function() {
            var nav = $('.js--main-nav');
            nav.slideToggle(200);
        });
        /* remove toggle element when -> show original nav bar*/
        $(window).resize(function(){
            if(window.innerWidth > 980) {
                $(".js--main-nav").removeAttr("style");
            }
        });

});