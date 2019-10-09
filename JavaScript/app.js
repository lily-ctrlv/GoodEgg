//navbar scrolling colour-changine effect



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


//smooth scrolling

// Select all links with hashes
$(document).ready(function(){

  // Get the height of the navbar
  var navbarHeight = $("nav").height();

 // Add smooth scrolling to all links
 $("a").on('click', function(event) {

   if (this.hash !== "") {
     // Prevent default anchor click behavior
     event.preventDefault();

     // Store hash
     var hash = this.hash;
     var target = $(this).attr("href"); //Get the target
     var scrollToPosition = $(target).offset().top - (navbarHeight + 50);



     // Using jQuery's animate() method to add smooth page scroll
     // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area

     //method 1
     // $('html, body').animate({
     //   scrollTop: $(hash).offset().top-navbarHeight}, 800, function(){
     //
     //   window.location.hash = hash;



     //method 2

     $('html').animate({ 'scrollTop': scrollToPosition }, 600, function(){
    window.location.hash = "" + target;
    // This hash change will jump the page to the top of the div with the same id
    // so we need to force the page to back to the end of the animation
    $('html').animate({ 'scrollTop': scrollToPosition }, 0);
});
     };

 });
});
