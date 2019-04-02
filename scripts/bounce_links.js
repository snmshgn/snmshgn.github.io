$(document).ready(function() {
  $('a.animated').hover(function() {
    $(this).addClass('shake');
    $(this).css('display', 'block');
  }, function() {
    $('a.animated').removeClass('shake');
  });
});
