$(document).ready(function(){

  $(".mo_view").css({"right":"-30%"}); /* 처음위치 */
  $(".close").hide();

  $(".mo_menu_btn").click(function(){
    $(".mo_view").stop(true,true).animate({"right":"0%"});
    $(".close").show();
  });

  $(".close").click(function(){
    $(".mo_view").stop(true,true).animate({"right":"-30%"});
    $(".close").hide();
  });

});
