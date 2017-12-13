$(document).ready(function(){
  var buttongroup = $('<div class="checkbox"><input class="hcp-checkbox" type="checkbox"><b>Yes,</b> I confirm that I am a healthcare professional registered in Australia<br></div><div class="proceed-button"><a href="https://www.spinraza.com.au" target="_blank" id="continue-button3" class="proceed-link"><img class="proceed" src="/content/dam/commercial-au/specialty/sma/hcp/en_au/images/icons/button_proceed.png"/></a></div><a href="#" class="cancel-link" data-dismiss="modal">Cancel</a>');

  $(".modal-buttons").append(buttongroup);

  //$(".main-nav-list li:nth-child(2) a").attr("href","https://www.spinraza.com.au");

  $(".main-nav-list li:nth-child(2) a, #treatment").click(function(e){
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
