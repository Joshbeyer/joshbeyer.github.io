$('.carousel.carousel-slider').carousel({fullWidth: true});

  $('.carousel.carousel-slider').carousel({
    indicators: true,
    padding: 50
  });



var backgrounds = ["#FDC300", "#232C35", "white"];
var current = 0;

window.setInterval(function(){
  $('.carousel').carousel('next');
  $('#carousel').css({
    "backgroundColor": backgrounds[current]
  });
  if(current < 2){
    current++; 
  }else{
    current = 0;
  }
  
}, 2500);


// // Next slide
// $('.carousel').carousel('next');
// $('.carousel').carousel('next', 3); // Move next n times.
// // Previous slide
// $('.carousel').carousel('prev');
// $('.carousel').carousel('prev', 4); // Move prev n times.
// // Set to nth slide
// $('.carousel').carousel('set', 4);
      