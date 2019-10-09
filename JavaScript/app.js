$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $('.navbar').css({'background':'white','opacity':'0.8'});
      $('.nav-item').css('color','black');
      $('.navbar .navbar-brand img').attr('src','Media/EGG-LOGO-black.png').css({'width':'100px', 'height':'auto'});
	  }

	  else {
		  $('.navbar').css({'background':'transparent'});
      $('.nav-link').css('color','white');
      $('.navbar .navbar-brand img').attr('src','Media/EGG-LOGO-white.png').css({'width':'100px', 'height':'auto'});

	  }
  })
})

// smooth scrolling

// Select all links with hashes
 
