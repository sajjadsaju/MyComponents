$(document).ready(function(){
  init();
});
function init() {
  owl();
  vegas();
  countdown();
  popup();
  particles();
  owlcarousel();
  smooth();
  scrollrevel();
  valform();
  wow();
}
// owl slider goes here
function vegas() {
  $(".vegas").vegas({
      timer: false,
      transition: 'slideLeft',
      transitionDuration: 2000,
      slides: [
          { src: "img/latest/1.jpg" },
          { src: "img/zfr/vegas/2.jpg" },
          { src: "img/zfr/vegas/1.jpg" },
          { src: "img/zfr/vegas/4.jpg" },
      ],
      overlay: 'img/vegas/overlays/02.png'
  });
}
/*
function fc() {
  var clock = $('#Myclock').FlipClock(7200*24*3,{
    clockFace:"dailyCounter",
    countdown:true,
    showSeconds:true
  // ... your options here
  });*/
/*}*/
function countdown() {
  $('.timer').startTimer({
  });
}
function popup() {
      $('.test-popup-link').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
    }
   });
   }
function particle() {
  window.onload = function() {
   Particles.init({
     selector: '.background'
  });
};

}
function particles() {
  particlesJS();particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 700
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "star",
        "stroke": {
          "width": 0,
          "color": "#ddd"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 25,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 900,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);
}
function owl() {
   $(document).ready(function  () {

 $(".owl-carousel").owlCarousel({
    items: 3,
    itemsDesktop : [1199, 3],
    itemsDesktopSmall : [979, 2],
    itemsTablet : [768, 1],
    itemsMobile : [479, 1],



    autoPlay: true,
    responsive: true,
    responsiveRefreshRate:100,
    responsiveBaseWidth: window,
    autoHeight: false,
    pagination:false,
    navigation:false,
    navigationText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],


  });
});
}
function smooth() {
  smoothScroll.init({
  speed: 500, // Integer. How fast to complete the scroll in milliseconds
  easing: 'easeInOutCubic', // Easing pattern to use
  updateURL: true, // Boolean. Whether or not to update the URL with the anchor hash on scroll
  offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
  callbackBefore: function ( toggle, anchor ) {}, // Function to run before scrolling
  callbackAfter: function ( toggle, anchor ) {} // Function to run after scrolling
});s
}
function owlcarousel() {
  $("#owl-demo").owlCarousel({
    items:4,
    // navigation : true
  });

  $("#owl-shoping-single").owlCarousel({
    // items:1,
    autoPlay: true,
    slideSpeed : 200,
    itemsCustom : [
      [0, 1],
      [600, 3],
      [1000, 1]
    ],
    // navigation : true
  });

  $("#owl-sidebar-slides").owlCarousel({
    // items:1,
    autoPlay: true,
    slideSpeed : 200,
    itemsCustom : [
      [0, 1],
      [600, 1],
      [1000, 1]
    ],
    // navigation : true
  });

}

function scrollrevel(){
  var fooReveal = {
    delay : 500,
    distance : "40px",
    easing : "ease-in-out",
    rotate : { z: 10 },
    scale : 0.9
  };

  window.sr = ScrollReveal();
  sr.reveal('.animate' , {delay : 500, scale: 0.9} );
}
function wow() {
  var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();
}
function valform() {
  /*$("#commentForm").validate();*/
  var validator = $( "#myform" ).validate();
  validator.form();
}