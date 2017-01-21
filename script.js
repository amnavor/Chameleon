$(document).ready(function() {

  //colors for the box
  var R;
  var G;
  var B;
  var RGB;
  var x;
  var y;
  var z;
  var backgroundRGB;
  
  var level = 1;
  var difRange = [0, 50,40,30,20,10];
  var maxDif = difRange[level];

  //random color generator
  function randomColor() {
    var step = 5;
    var max = 256;
    var random = Math.random() * (max + step);
    var randomMultiple = random - (random % step);
    return randomMultiple;
  }

  //sets new game
  function newGame() {
    x = randomColor();
    y = randomColor();
    z = randomColor();
    backgroundRGB = "rgb(" + x + "," + y + "," + z + ")";
    $("#background").css("background-color", backgroundRGB);
    $("span").html("Level: " + level);
  }

  //returns true if colors match closely enough based on level
  function closeEnough() {
    var diff = Math.abs(x - R) + Math.abs(y - G) + Math.abs(z - B);
    return (diff < maxDif);
  }

  //updates color of square 
  function change() {
    R = $('#rangeR').val();
    G = $('#rangeG').val();
    B = $('#rangeB').val();
    RGB = "rgb(" + R + "," + G + "," + B + ")";
    $("#square").css("background-color", RGB);
    $("#p").html(backgroundRGB + " " + RGB + " " + (Math.abs(x - R) + Math.abs(y - G) + Math.abs(z - B)));
  }

  //updates color based on movement
  $("input").mousemove(function() {
    change();
  });

  //starting point 
  $("#rangeR").focus();
  newGame();

  //allows arrow keys to toggle active range bar
  $('input').keydown(function(e) {
    if (e.keyCode == 40) {
      $(this).next('input').focus();
    } else if (e.keyCode == 38) {
      $(this).prev('input').focus();
    } else {
      change();
    }
  });
  
  $('#submit').click(function() {
    if (closeEnough()){
      $('span').html("You got it!");
      level++;
    } else {
      $('span').html("Try again!");
      level = 1;
    }
   maxDif = difRange[level];
   setTimeout(newGame, 1500);
  });

});
