$(document).ready(function(){
  var clickNum = 0;


  $(".generateContainer").click("click",function(){
    clickNum++;
    var containerButton1 = "<button class='changeColor'>Change Color</button>";
    var containerButton2 = "<button class='remove'>Remove</button>";
    var containerContent = "<div class='container'><p class='newNum'>" + "Line Num: " + clickNum + "</p><br />" + containerButton1 + containerButton2 + "</div>";


    $("body").append(containerContent);

    $(".changeColor").click("click",function(){
      $(this).parent().css("background-color", randomColor());
      console.log(randomColor());
    });//end changeColor

    $(".remove").click("click",function(){
      $(this).parent().css("background-color", "white");
    });//end changeColor

  });//end onClick

  function randomColor(){
    var text = "";
    var possible = "abcdef0123456789";

    for(var i=0; i < 6; i++ ){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return "#" + text;
  }//end randomColor

});//end documentReady
