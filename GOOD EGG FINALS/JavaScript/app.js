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

// function myMap() {
//  var myMaps = new google.maps.LatLng(51.508742,-0.120850);
//  var mapCanvas = document.getElementById("map");
//  var mapOptions = {center: myMaps, zoom: 12};
//  var map = new google.maps.Map(mapCanvas, mapOptions);
//  var marker = new google.maps.Marker({position:myMaps});
//  marker.setMap(map);
// }
