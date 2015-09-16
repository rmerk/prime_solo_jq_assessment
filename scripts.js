$(document).ready(function(){
  var clickNum = 0;

  $(".generateContainer").click("click",function(){
    clickNum++;
    var containerButton1 = "<button class='changeColor'>Change Color</button>";
    var containerButton2 = "<button class='remove'>Remove</button>";
    var containerContent = "<div class='container'><p class='newNum'>" + "Line Num: " + clickNum + "</p><br />" + containerButton1 + containerButton2 + "</div>";


    $("body").append(containerContent);

    $(".changeColor").click("click",function(){
      $(this).parent().css("background-color", "green");
    });//end changeColor

    $(".remove").click("click",function(){
      $(this).parent().css("background-color", "white");
    });//end changeColor

  });//end onClick

});//end documentReady
