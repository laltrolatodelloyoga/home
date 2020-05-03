/* SIDE NAV-BAR */
      function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(060,060,060)";
      }

      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        document.body.style.backgroundColor = "white";
      }

/* BUTTON TOP 1 */
      $(window).scroll(function() {
          var height = $(window).scrollTop();
          if (height > 100) {
              $('#back2Top').fadeIn();
          } else {
              $('#back2Top').fadeOut();
          }
      });
      $(document).ready(function() {
          $("#back2Top").click(function(event) {
              event.preventDefault();
              $("html, body").animate({ scrollTop: 0 }, "slow");
              return false;
          });

        });

/* BUTTON TOP 2 */
      $(window).scroll(function() {
          var height = $(window).scrollTop();
          if (height > 100) {
              $('#back2Top2').fadeIn();
          } else {
              $('#back2Top2').fadeOut();
          }
      });
      $(document).ready(function() {
          $("#back2Top2").click(function(event) {
              event.preventDefault();
              $("html, body").animate({ scrollTop: 0 }, "slow");
              return false;
          });

        });
/* BUTTON TOP 3 */
      $(window).scroll(function() {
          var height = $(window).scrollTop();
          if (height > 100) {
              $('#back2Top3').fadeIn();
          } else {
              $('#back2Top3').fadeOut();
          }
      });
      $(document).ready(function() {
          $("#back2Top3").click(function(event) {
              event.preventDefault();
              $("html, body").animate({ scrollTop: 0 }, "slow");
              return false;
          });

        });



/* Titolo a scomparsa */
	$(document).ready(function(){

	var $header = $('.global-header');

	var $hHeight = $header.height();

	var prevTop = $(window).scrollTop();

	$(window).on('scroll', function(e) {
        st = $(this).scrollTop(); // Set scroll location
        if (st > prevTop && st > $hHeight) { 
        $header.addClass('js-global-header-scrolling');
        } else {
        $header.removeClass('js-global-header-scrolling');
        }
        prevTop = st;
	});
  
	});