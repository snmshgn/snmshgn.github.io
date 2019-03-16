$(document).ready(function() {
  // Check if element is scrolled into view
  function isScrolledIntoView('.animated') {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $('.animated').offset().top;
    var elemBottom = elemTop + $('.animated').height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  // If element is scrolled into view, fade it in
  $(window).scroll(function() {
    $('.scroll-animations .animated').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('fadeInUp delay-3s');
      }
    });
  });
});
