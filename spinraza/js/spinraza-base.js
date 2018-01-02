$(document).ready(function() {

    $('#auth').on('change', function() {
          if ( this.value == '1')
          {
            $(".h-pro").show();
            $("#user-login").attr("action", "/content/commercial-au/specialty/spinraza/hcp/en_au/home/hcp.html");
          }

          else
          {
            $(".h-pro").hide();
          }

          if ( this.value == '2')
          {
            $(".h-patient").show();
            $("#user-login").attr("action", "/content/commercial-au/specialty/spinraza/hcp/en_au/home/patient-resources.html");
          }

          else
          {
            $(".h-patient").hide();
          }
    });

    if (!$("body").hasClass(".page_hcp-home")) {
        $('.hcp-text p').show();
    }
    else {
        $('.hcp-text p').hide();
    }
});

$("#request-pword").click(function(){
    $("#request-pword-form").show(500);
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
