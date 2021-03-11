
$(document).ready(function(){
  var prev = $(".prev .fa-angle-left")
  var next = $(".next .fa-angle-right")
  var active = $(".active")



  next.click(function() {
    active.removeClass("active");
    active.next().addClass("active");

  })

  prev.click(function(){
    active.removeClass("active");
    active.prev().addClass("active");
  })

})
