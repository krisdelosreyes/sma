$('.cg-video').parent().click(function () {
    if($(this).children(".cg-video").get(0).paused){
        $(this).children(".cg-video").get(0).play();
        $(this).children(".cg-playpause").fadeOut();
    }else{
       $(this).children(".cg-video").get(0).pause();
        $(this).children(".cg-playpause").fadeIn();
    }
});

$(".visible-xs-block").click(function(){
    $(this).removeAttr("href");
  var e = $("#tab-panels"),
      i = $("#tab-nav"),
      n = i.find("li"),
      s = i.find("a"),
      a = $("#tab-panels").find(".tab-pane");

  var t = ($(this), "#" + $(this).next().attr("id")),
  s = i.find('a[href="' + t + '"]');
  $(this).hasClass("active") ? ($(this).removeClass("active"), $(this).children(".glyphicon").removeClass("glyphicon-minus-sign").addClass("glyphicon-plus-sign"), $(this).next(".tab-pane").removeClass("active")) : ($(this).addClass("active"),
  $(this).children(".glyphicon").removeClass("glyphicon-plus-sign").addClass("glyphicon-minus-sign"), $(this).next(".tab-pane").addClass("active")), n.removeClass("active"), s.parent("li").addClass("active"),
  $.browser.msie && $.browser.version < 9 && e.addClass("iefix").removeClass("iefix"), o = $(t), !1;
});
