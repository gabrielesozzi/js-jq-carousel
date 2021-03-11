
$(document).ready(function(){
  var prev = $(".prev .fa-angle-left")
  var next = $(".next .fa-angle-right")
  var imgActive = $(".images img.active")


   next.click(function() {
    imgActive.removeClass("active");
    imgActive.next().addClass("active");

  })


})
