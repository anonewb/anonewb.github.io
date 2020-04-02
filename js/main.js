(function() {
  'use strict';

  var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    }
  };

  var fullHeight = function() {
    if (!isMobile.any()) {
      $('.js-fullheight').css('height', $(window).height());
      $(window).resize(function() {
        $('.js-fullheight').css('height', $(window).height());
      });
    }
  };

  // Parallax
  var parallax = function() {
    $(window).stellar();
  };

  var contentWayPoint = function() {
    var i = 0;
    $('.animate-box').waypoint(
      function(direction) {
        if (
          direction === 'down' &&
          !$(this.element).hasClass('animated-fast')
        ) {
          i++;

          $(this.element).addClass('item-animate');
          setTimeout(function() {
            $('body .animate-box.item-animate').each(function(k) {
              var el = $(this);
              setTimeout(
                function() {
                  var effect = el.data('animate-effect');
                  if (effect === 'fadeIn') {
                    el.addClass('fadeIn animated-fast');
                  } else if (effect === 'fadeInLeft') {
                    el.addClass('fadeInLeft animated-fast');
                  } else if (effect === 'fadeInRight') {
                    el.addClass('fadeInRight animated-fast');
                  } else {
                    el.addClass('fadeInUp animated-fast');
                  }

                  el.removeClass('item-animate');
                },
                k * 100,
                'easeInOutExpo'
              );
            });
          }, 50);
        }
      },
      { offset: '85%' }
    );
  };

  var goToTop = function() {
    $('.js-gotop').on('click', function(event) {
      event.preventDefault();

      $('html, body').animate(
        {
          scrollTop: $('html').offset().top
        },
        500,
        'easeInOutExpo'
      );

      return false;
    });

    $(window).scroll(function() {
      var $win = $(window);
      if ($win.scrollTop() > 200) {
        $('.js-top').addClass('active');
      } else {
        $('.js-top').removeClass('active');
      }
    });
  };

  var pieChart = function() {
    $('.chart').easyPieChart({
      scaleColor: false,
      lineWidth: 4,
      lineCap: 'butt',
      barColor: '#3F95EA',
      trackColor: '#f5f5f5',
      size: 160,
      animate: 1000
    });
  };

  var skillsWayPoint = function() {
    if ($('#ano-skills').length > 0) {
      $('#ano-skills').waypoint(
        function(direction) {
          if (direction === 'down' && !$(this.element).hasClass('animated')) {
            setTimeout(pieChart, 400);
            $(this.element).addClass('animated');
          }
        },
        { offset: '90%' }
      );
    }
  };

  // Loading page
  var loaderPage = function() {
    $('.ano-loader').fadeOut('slow');
  };

  $(function() {
    contentWayPoint();
    goToTop();
    loaderPage();
    fullHeight();
    parallax();
    // pieChart();
    skillsWayPoint();
  });

  // Off Canvas Menu Open & Close
  $('#offCanvas').on('click', function() {
    $('.nav-offcanvas').addClass('open');
    $('.offcanvas-overlay').addClass('on');
  });
  $('#offCanvasClose, .offcanvas-overlay').on('click', function() {
    $('.nav-offcanvas').removeClass('open');
    $('.offcanvas-overlay').removeClass('on');
  });
})();

particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#ffffff' },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#000000' },
      polygon: { nb_sides: 5 },
      image: { src: 'img/github.svg', width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: true, mode: 'push' },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
