/* scroll */
$(function() {
  $('a[href^="#"]').on('click', function() {
    const id = $(this).attr('href');
    const headerHeight = $('.l-header').innerHeight();
    const target = $(id).offset();
    $('html, body').animate({
      scrollTop: target.top - headerHeight
    }, 500);
    return false;
  });
});