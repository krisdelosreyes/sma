$(document).ready(function() {
  $(".h-pro").hide();
  $(".h-patient").hide();

  
  $('#sd1').on('click', function() {
    $('.design1').slideToggle('fast');
    $( this ).toggleClass("open")
  });

  $('#sd2').on('click', function() {
    $('.design2').slideToggle('fast');
    $( this ).toggleClass("open")
  }); 

  $('#sd3').on('click', function() {
    $('.design3').slideToggle('fast');
    $( this ).toggleClass("open")
  });

  $('#sd4').on('click', function() {
    $('.design4').slideToggle('fast');
    $( this ).toggleClass("open")
  });   


  $('#spin_username').on('change', function() {
    var selected = document.getElementById("spin_username").selectedIndex;
      if ( selected == '1'){
        $(".h-pro").show();
        $(".h-patient").hide();
      //$("#user-login").attr("action", "/content/commercial-au/specialty/spinraza/hcp/en_au/home/hcp.html");
    }else if (selected == '2'){
        $(".h-pro").hide();
        $(".h-patient").show();
        $("#request-form").hide(500);
    }else{
      $(".h-pro").hide();
      $(".h-patient").hide();
      $("#request-form").hide(500);
    }
  });

  var selected = document.getElementById("spin_username").selectedIndex;
    if ( selected == '1'){
      $(".h-pro").show();
      $(".h-patient").hide();
    //$("#user-login").attr("action", "/content/commercial-au/specialty/spinraza/hcp/en_au/home/hcp.html");
  }else if (selected == '2'){
      $(".h-pro").hide();
      $(".h-patient").show();
  }else{
    $(".h-pro").hide();
    $(".h-patient").hide();
  }

  if (!$("body").hasClass(".page_hcp-home")) {
      $('.hcp-text p').show();
  }
  else {
      $('.hcp-text p').hide();
  }
});


$("#request-pword").click(function(){
    $("#request-form").show(500);
});

$("#request-pword").dblclick(function(){
    $("#request-form").hide(500);
});


$('.cg-video').parent().click(function () {
    if(
        $(this).children(".cg-video").get(0).paused){
        $(this).children(".cg-video").get(0).play();
        $(this).children(".cg-playpause").fadeOut(); }

    else {

        $(this).children(".cg-video").get(0).pause();
        $(this).children(".cg-playpause").fadeIn();
    }
});