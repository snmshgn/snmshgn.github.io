var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // vanilla JS
  var flkty = new Flickity('.carousel');
  flkty.next();
  flkty.select( 3 );
});

// external js: flickity.pkgd.js

$('.carousel').flickity({
  arrowShape: {
    x0: 10,
    x1: 60, y1: 50,
    x2: 65, y2: 50,
    x3: 15
}
});
