$('.cg-video').parent().click(function () {
    if($(this).children(".cg-video").get(0).paused){
        $(this).children(".cg-video").get(0).play();
        $(this).children(".cg-playpause").fadeOut();
    }else{
       $(this).children(".cg-video").get(0).pause();
        $(this).children(".cg-playpause").fadeIn();
    }
});
