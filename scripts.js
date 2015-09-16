$(document).ready(function(){
  var clickNum = 0;

  $(".generateContainer").click("click",function(){
    clickNum++;
    var containerContent = "<div class='container'><p class='newNum'>" + "Line Num: " + clickNum + "</p><br /></div>";
    var containerButton1 = "<button class='changeColor'>Change Color</button>";
    var containerButton2 = "<button class='remove'>Remove</button>";

    $("body").append(containerContent + containerButton1 + containerButton2);

    $(".changeColor").click("click",function(){
      $(".container").css("background-color", changeColor(clickNum));
    });//end changeColor
  });//end onClick



  function changeColor(clickNum){
    var color = "";
    switch(clickNum){
      case(1):
          color = "red";
          break;
      case(2):
          color = "orange";
          break;
      case(3):
          color = "yellow";
          break;
      case(4):
          color = "blue";
          break;
      case(5):
          color="green";
          break;
    }
    return color;
  }

});//end documentReady
