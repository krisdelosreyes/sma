$(document).ready(function(){
  authenticateLogin();
  validateFieldsforRequestPassword();
  validateFieldsforGetInTouch();
  setSelectionState();

});

function setSelectionState(){
  var getUser = localStorage.getItem('initialUser');

  if(getUser){
    $('#spin_username').val(getUser);
  }else{
    $('#spin_username').val("0");
  }
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
