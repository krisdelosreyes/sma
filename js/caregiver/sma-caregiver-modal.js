$(document).ready(function(){
  var buttongroup = $('<div class="checkbox"><input class="hcp-checkbox" type="checkbox"><b>Yes,</b> I confirm that I am a healthcare professional registered in Australia<br></div><div class="proceed-button"><a target="_blank" href="https://www.togetherinsma-hcp.com.au" id="continue-button3" class="proceed-link"><img class="proceed" src="/content/dam/commercial-au/specialty/sma/hcp/en_au/images/icons/button_proceed.png"/></a></div><a href="#" class="cancel-link" data-dismiss="modal">Cancel</a>');

  $(".modal-buttons").append(buttongroup);
  validateIfHCP();

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
