$(document).ready(function () {
  // FOR THE NAV STICKY
  $('.js--section-about').waypoint(
    function (direction) {
      if (direction == 'down') {
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
    },
    {
      offset: '60px',
    }
  );

  // buttons to ids
  $(document).ready(function () {
    $('a').on('click', function (event) {
      if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top,
          },
          900,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
  });

  // animations on scroll
  $('.js--wp-1').waypoint(
    function (direction) {
      $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    },
    {
      offset: '70%',
    }
  );
  $('.js--project-1').waypoint(
    function (direction) {
      $('.js--project-1').addClass('animate__animated animate__fadeIn');
      flky.playPlayer();
    },
    {
      offset: '50%',
    }
  );
});
// mobile navigation
$('.js--nav-icon').click(function () {
  const nav = $('.js--main-nav');
  const icon = $('.js--nav-icon ion-icon');
  nav.slideToggle(200);

  // NAV PRODUCT BUTTONS
});

// flicky

var flky = new Flickity('.gallery', {
  // options, defaults listed

  accessibility: true,
  // enable keyboard navigation, pressing left & right keys

  adaptiveHeight: false,
  // set carousel height to the selected slide

  autoPlay: 1600,
  pauseAutoPlayOnHover: false,

  // advances to the next cell
  // if true, default is 3 seconds
  // or set time between advances in milliseconds
  // i.e. `autoPlay: 1000` will advance every 1 second

  cellAlign: 'center',
  // alignment of cells, 'center', 'left', or 'right'
  // or a decimal 0-1, 0 is beginning (left) of container, 1 is end (right)

  cellSelector: undefined,
  // specify selector for cell elements

  contain: false,
  // will contain cells to container
  // so no excess scroll at beginning or end
  // has no effect if wrapAround is enabled

  draggable: '>1',
  // enables dragging & flicking
  // if at least 2 cells

  dragThreshold: 3,
  // number of pixels a user must scroll horizontally to start dragging
  // increase to allow more room for vertical scroll for touch devices

  freeScroll: false,
  // enables content to be freely scrolled and flicked
  // without aligning cells

  friction: 0.4,
  // smaller number = easier to flick farther

  groupCells: false,
  // group cells together in slides

  initialIndex: 0,
  // zero-based index of the initial selected cell

  lazyLoad: true,
  // enable lazy-loading images
  // set img data-flickity-lazyload="src.jpg"
  // set to number to load images adjacent cells

  percentPosition: true,
  // sets positioning in percent values, rather than pixels
  // Enable if items have percent widths
  // Disable if items have pixel widths, like images

  prevNextButtons: false,
  // creates and enables buttons to click to previous & next cells

  pageDots: true,
  // create and enable page dots

  resize: true,
  // listens to window resize events to adjust size & positions

  rightToLeft: false,
  // enables right-to-left layout

  setGallerySize: true,
  // sets the height of gallery
  // disable if gallery already has height set with CSS

  watchCSS: false,
  // watches the content of :after of the element
  // activates if #element:after { content: 'flickity' }

  wrapAround: true,
  // at end of cells, wraps-around to first for infinite scrolling
});
flky.on('dragEnd', function (event, pointer, cellElement, cellIndex) {
  flky.playPlayer();
});
flky.pausePlayer();
