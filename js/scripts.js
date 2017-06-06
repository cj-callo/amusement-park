$(document).ready(function(){
  var inches = parseInt(prompt("How tall are you-use inches?"));

  if (inches >= 52) {
    $('#tall').show();
    $('#safe').show();
  } else {
    $('#tall').show();
    $('#safe').show();
    $('.safe').css('background-color','green');

  }
});
