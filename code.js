var prev = $(".prev .fa-angle-left");
var next = $(".next .fa-angle-right");
var last = $(".last")
var first = $(".first")


function nextImg() {

  next.click(function() {
    var active = $(".active");
    active.removeClass("active");
    active.next().addClass("active");
    if (active.hasClass("last")) {
      first.addClass("active")
    }
  })
  
}

function prevImg() {

  prev.click(function(){
    var active = $(".active");
    active.removeClass("active");
    active.prev().addClass("active");
    if (active.hasClass("first")) {
      last.addClass("active")
    }
  })
}
