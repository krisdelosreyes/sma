$(document).ready(function(){
  //live-site
  // var buttongroup = $('<div class="checkbox"><input class="hcp-checkbox" type="checkbox"><b>Yes,</b> I confirm that I am a healthcare professional registered in Australia<br></div><div class="proceed-button"><a target="_blank" href="https://www.togetherinsma-hcp.com.au" id="continue-button3" class="proceed-link"><img class="proceed" src="/content/dam/commercial-au/specialty/sma/caregiver/en_au/images/icons/button_proceed.png"/></a></div><a href="#" class="cancel-link" data-dismiss="modal">Cancel</a>');

  //content-prod
  var buttongroup = $('<div class="checkboxFive"><input type="checkbox" id="checkboxFiveInput" name=""/><label for="checkboxFiveInput"></label><b>Yes,</b> I confirm that I am a healthcare professional registered in Australia<br></div><div class="proceed-button"><a href="https://contentprod-togetherinsmahcp-com-au.biogen-support.com"  id="continue-button3" class="proceed-link">Proceed</a></div><a href="#" class="cancel-link" data-dismiss="modal">Cancel</a>');




  $(".exit-site .modal-buttons").append(buttongroup);
  $(".third-exit-site .modal-buttons").append(buttongroup);


  //$(".main-nav-list li:nth-child(2) a").attr("href","https://www.spinraza.com.au");

  $("#treatment, .link-spinraza,.sitemap-title-link").click(function(e){
    e.preventDefault();
    $('#third-exit-site').modal('show');
    validateIfHCP();
    return false;
  });

  $("#checkboxFiveInput").on("click", function(){
    validateIfHCP();
  });
});


function validateIfHCP(){
  if ($("#checkboxFiveInput").is(':checked')) {
    $(".proceed-button").removeClass("not-active");
  }else{
    $(".proceed-button").addClass("not-active");
  }
}
