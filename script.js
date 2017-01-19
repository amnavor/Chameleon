$(document).ready(function() {

   var R;
  var G;
  var B;
  var RGB;
  
  function randomColor() {
    var step = 5;
    var max = 256;
var random = Math.random() * (max + step);
var randomMultiple = random - (random % step);
    return randomMultiple;
  }
  
    var x = randomColor();
  var y = randomColor();
  var z = randomColor();
   var backgroundRGB = "rgb(" + x + "," + y + "," + z + ")";
  
  $("#background").css("background-color", backgroundRGB);

  function closeEnough() {
    var diff = Math.abs(x-R) + Math.abs(y-G) + Math.abs(z-B);
    return diff<30;
  }
     
function change() {
    R = $('#rangeR').val();
    G = $('#rangeG').val();
    B = $('#rangeB').val();
    RGB = "rgb(" + R + "," + G + "," + B + ")";
    $("#square").css("background-color", RGB);
    $("#p").html(backgroundRGB + " " + RGB + " " + (Math.abs(x-R) + Math.abs(y-G) + Math.abs(z-B)));
    // if (closeEnough()) {
    //    $('#p').html("win");
    // }
  }
  
    $("input").mousemove(function() { 
    change();
      });
  
 $('input').keydown(function(e) {
    if (e.keyCode==40) {
        $(this).next('input').focus();
    }
});
  
   $("div").keydown(function() { 
    change();
      });
});