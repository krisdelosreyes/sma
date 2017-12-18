$(document).ready(function() {
    if (!$("body").hasClass(".page_hcp-home")) {
    	$('.hcp-text p').show();
    }
    if (!$("body").hasClass(".page_home")) {
    	$('.header.spinraza-header, .main-nav-list').hide();
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
