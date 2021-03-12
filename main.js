$(document).ready(function(){


  nextImg();
  prevImg();

  $(document).keydown(function(e){
    if (e.keyCode == "39") {
      nextImg();
    }

    if (e.keyCode == "37") {
      prevImg();
    }
  })

})
