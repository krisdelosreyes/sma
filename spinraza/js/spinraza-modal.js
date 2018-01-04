$(document).ready(function(){
  var buttongroup = $('<div class="checkbox"><input class="hcp-checkbox" type="checkbox"><span class="hcp-checkmark"></span><b>Yes,</b> I confirm that I am a healthcare professional registered in Australia<br></div><div class="proceed-button"><a href="https://contentprod-spinraza-com-au.biogen-support.com" target="_blank" id="continue-button3" class="proceed-link">Proceed</a></div><a href="#" class="cancel-link" data-dismiss="modal">Cancel</a>');

  $(".exit-site .modal-buttons").append(buttongroup);
  $(".third-exit-site .modal-buttons").append(buttongroup);
  $(".hcp-exit-site .modal-buttons").append(buttongroup);

  //$(".main-nav-list li:nth-child(2) a").attr("href","https://www.spinraza.com.au");

  $(".main-nav-list li:nth-child(4) a, #treatment, .link-spinraza,.sitemap-title-link").click(function(e){
    e.preventDefault();
    $('#third-exit-site').modal('show');
    validateIfHCP();
    return false;
  });

  $(".hcp-checkbox").on("click", function(){
    validateIfHCP();
  });
});


function validateIfHCP(){
  if ($(".hcp-checkbox").is(':checked')) {
    $(".proceed-button").removeClass("not-active");
  }else{
    $(".proceed-button").addClass("not-active");
  }
}

// function proceedToOtherSite(){
//     if ($(".hcp-checkbox").is(':checked')) {
//       $(".proceed-button").click(function (){
//         $(".continue-button3").trigger("click");
//       });
//     }
// }
