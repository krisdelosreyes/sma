$(document).ready(function(){
  //$(".main-nav-list li:nth-child(2) a").attr("href","https://www.spinraza.com.au");
  var buttongroup = $('<div class="checkboxFive"><input type="checkbox" id="checkboxFiveInput" name=""/><label for="checkboxFiveInput"></label><b>Yes,</b> I confirm that I am a healthcare professional registered in Australia<br></div><div class="proceed-button"><a href="https://contentprod-togetherinsma-com-au.biogen-support.com"  id="continue-button3" class="proceed-link">Proceed</a></div><a href="#" class="cancel-link" data-dismiss="modal">Cancel</a>');
  $(".exit-site .modal-buttons").append(buttongroup);
  $(".third-exit-site .modal-buttons").append(buttongroup);


  $(".main-nav-list li.level-1:nth-child(4) a, #treatment, .link-spinraza,.sitemap-title-link").click(function(e){
    $(".proceed-button").remove();
    $(".cancel-link").remove();

    e.preventDefault();

    var buttongroup = $('<div class="proceed-button"><a href="https://contentprod-spinraza-com-au.biogen-support.com"  id="continue-button3" class="proceed-link">Proceed</a></div><a href="#" class="cancel-link" data-dismiss="modal">Cancel</a>');
    $(".exit-site .modal-buttons").append(buttongroup);
    $(".third-exit-site .modal-buttons").append(buttongroup);

    $(".caregiver-site").addClass("hide-element");
    $(".spinraza-site").removeClass("hide-element");
    $(".checkboxFive").removeClass('hide-element');
    $(".proceed-button").removeClass("not-active");
    $(".checkboxFive").removeClass('hide-element');
    $('#third-exit-site').modal('show');
    validateIfHCP();
    return false;
  });

  $("ul.navbar-nav li:nth-child(2) a").click(function(e){

    $(".proceed-button").remove();
    $(".cancel-link").remove();

    var buttongroup = $('<div class="proceed-button"><a href="https://contentprod-togetherinsma-com-au.biogen-support.com"  id="continue-button3" class="proceed-link">Proceed</a></div><a href="#" class="cancel-link" data-dismiss="modal">Cancel</a>');
    $(".third-exit-site .modal-buttons").append(buttongroup);

    e.preventDefault();
    $(".spinraza-site").addClass('hide-element');
    $(".checkboxFive").addClass('hide-element');
    $(".caregiver-site").removeClass("hide-element");
    $(".proceed-button").removeClass("not-active");
    
    $('#third-exit-site').modal('show');

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

// function proceedToOtherSite(){
//     if ($(".hcp-checkbox").is(':checked')) {
//       $(".proceed-button").click(function (){
//         $(".continue-button3").trigger("click");
//       });
//     }
// }
