$(document).ready(function(){
  authenticateLogin();
  validateFieldsforRequestPassword();
  validateFieldsforGetInTouch();
  setSelectionState();
  // processRegistration();
});

function checkCurrentSelection(){
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
}

function setSelectionState(){
  var getUser = localStorage.getItem('initialUser');

  if(getUser){
    $('#spin_username').val(getUser);
  }else{
    $('#spin_username').val("0");
  }
  checkCurrentSelection();
}

function authenticateLogin(){
  var form = $('#user-login');
  var requiredMessage = $('#required_message').val();
  var error = $('.invalidLogin');

  if(window.location.search.indexOf('j_reason=') > -1){
      error.show();
  }

  form.validate({
    rules: {
      j_username: "required",
      j_password: "required"
    },
    messages: {
      j_username: requiredMessage,
      j_password: requiredMessage
    }
  });

  var verify = false;

  form.submit(function(e){

    error.hide();
    var $this = $(this);
    if($this.valid() && !verify){
      e.preventDefault();

      var url = $('#path_to_resource').val() + ".p.html";
      var userName = $('#spin_username').val();
      var passWord = $('#j_password').val();
      localStorage.setItem('initialUser', userName);

      $.ajax({
        url: url,
        data: { username: userName, j_username: userName},
        method: "POST",
        dataType: 'json',
        success: function(data) {
          if(data.valid){
            $('#auth_redirect').val(data.redirect + ".html");
            console.log(data.redirect);
            $this.attr('action', data.redirect + "/j_security_check");
            verify = true;
            $this.submit();
          } else {
            error.show();
          }
        },
        error: function(){
            error.show();
            console.log(localStorage.getItem('initialUser'));
            // var element = document.getElementById('#spin_username');
            // element.value = userName;
        }
      });
    }
  });
}

function validateFieldsforRequestPassword(){
  var request_form = $('#request-pword-form');
  var requiredMessage = $('#required_message').val();
  // var error = $('.invalidLogin');
  //
  //   if(window.location.search.indexOf('j_reason=') > -1){
  //       error.show();
  //   }

  request_form.validate({
    rules: {
      r_title: "required",
      r_fname: "required",
      r_lname: "required",
      r_email: "required",
      r_phone: "required",
      r_checkbox: "required"
    },
    messages: {
      r_checkbox: requiredMessage,
      r_title: requiredMessage,
      r_fname: requiredMessage,
      r_lname: requiredMessage,
      r_email: requiredMessage,
      r_phone: requiredMessage
    },
    // onsubmit: false
  });

//   var verify = false;
//   request_form.submit(function(e){
//
// //    error.hide();
//   e.preventDefault();
//     // var $this = $(this);
//     // if($this.valid() && !verify){
//     //   e.preventDefault();
//     // }else{
//     //   error.show();
//     // }
//   });

}

function validateFieldsforGetInTouch(){
  var request_form = $('#get-in-touch-form');
  var requiredMessage = $('#required_message').val();
  // var error = $('.invalidLogin');
  //
  //   if(window.location.search.indexOf('j_reason=') > -1){
  //       error.show();
  //   }

  request_form.validate({
    rules: {
      g_title: "required",
      g_fname: "required",
      g_lname: "required",
      g_email: "required",
      g_phone: "required",
      g_checkbox: "required"
    },
    messages: {
      g_checkbox: requiredMessage,
      g_title: requiredMessage,
      g_fname: requiredMessage,
      g_lname: requiredMessage,
      g_email: requiredMessage,
      g_phone: requiredMessage
    },
    // onsubmit: false
  });

//   var verify = false;
//   request_form.submit(function(e){
//
// //    error.hide();
//   e.preventDefault();
//     // var $this = $(this);
//     // if($this.valid() && !verify){
//     //   e.preventDefault();
//     // }else{
//     //   error.show();
//     // }
//   });
}

function scrollToFormTop() {
  $('html, body').animate({
      scrollTop: $('.sma-hcpregistration').offset().top
  }, 1000);
}

function processRegistration(){

  var form = $("#request-pword-form");

  form.unbind('submit');

  form.submit(function(event){
      event.preventDefault();
      event.stopImmediatePropagation();
      if($(this).valid()){
          var url = "/content/commercial-au/specialty/spinraza/hcp/en_au/home/jcr:content/secondarypar/divwrapper/divwrapperpar/sma_hcpregistration/register.p.html";
          //$('.submit-registration').addClass('disabled');
          jQuery.ajax({
              url: url,
              data: $(this).closest('form').serializeArray(),
              method: "POST",
              success: function(data) {
               $('.sma-hcpregistration').append(data);
                //  $("#validate-email").hide();
               // $("#register-div").hide();
               // $("#login-div").hide();
               // $("#update-div").show();
                //  $("#part_two").show();
               // $("#part_one").hide();
                  window.scrollTo(0,0);

                  // if (CQ_Analytics.Sitecatalyst) {
                  //     var currentTime = formatedDateTime();
                  //
                  //     var events = "successfulRegistration";
                  //
                  //     var checkbox = $('input[name=receive_updates]');
                  //     if(checkbox.is(':checked')){
                  //         events += ",receiveUpdates"
                  //     }
                  //
                  //     CQ_Analytics.record(populateAnalytics(events,'/apps/hcp/components/csd/sma-hcpregistration/register','hcp:spinraza:account:registered',null,'hcp:spinraza:account',null,null));
                  // }

              }
          });
      }else{
       scrollToFormTop();
      }
  });
}
