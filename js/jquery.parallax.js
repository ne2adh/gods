var $ = jQuery.noConflict();
/* $(window).scroll(function(){
	var scroll = $(this).scrollTop();
	$('.parallax1').css({'background-position':'0px '+scroll/2+'px'});
	var scroll1 = $(this).scrollTop();
	$('.parallax2').css({'background-position':'0px -'+scroll1/4+'px'});
});


 */
  
  var initScrollTop = $(window).scrollTop();  
  $('.parallax1').css({'background-position-y' : (initScrollTop/5)+'%'});
  $('.parallax2').css({'background-position-y' : -(initScrollTop/45)+'%'});
  
  $(window).scroll(function() {
    
    
  var scrollTop = $(window).scrollTop();    
	$('.parallax1').css({'background-position-y' : (scrollTop/5)+'%'});
	$('.parallax2').css({'background-position-y' : -(scrollTop/45)+'%'});
	
    
  });