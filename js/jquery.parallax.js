var $ = jQuery.noConflict();
$(window).scroll(function(){
  var scroll = $(this).scrollTop();
  $('.parallax1').css({'background-position':'0px '+scroll/5+'px'});
  var scroll1 = $(this).scrollTop();
  $('.parallax2').css({'background-position':'0px -'+scroll1/18+'px'});
});
