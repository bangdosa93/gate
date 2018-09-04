$(document).ready(function () {
  const context = $('.scrolling-wrapper')
  $('.left-arrow').bind('click touchstart', function (e) {
    // console.log(context)
    context.animate({scrollLeft: 0}, 'fast', 'swing');
    
  })
  
  $('.right-arrow').bind('click touchstart', function (e) {
    // console.log(context)
    context.animate({ scrollLeft: document.body.scrollWidth}, 'fast', 'swing');
    
  })



  
});