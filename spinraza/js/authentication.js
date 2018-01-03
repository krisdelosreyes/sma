$(document).ready(function(){

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
    console.log(userName);
    $.ajax({
      url: url,
      data: { username: userName},
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
      }
    });
  }
});
});
