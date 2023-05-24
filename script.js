$(".header-arrow").click(function () {
  $("html, body").animate({ scrollTop: 670 }, "30");
});

$(window).on("scroll", function () {
  var windowTop = $(this).scrollTop();

  $(this).addClass("header-active");
});

$(window).scroll(function () {
  var windowTop = $(this).scrollTop();

  $("section").each(function () {
    if (windowTop > $(this).offset().top - 1200) {
      $(this).addClass("part");
    } else {
      $(this).removeClass("part");
    }
  });
});

$(".brand").on("click", function () {
  $(window).scrollTop(0);
});

$(".home").on("click", function (e) {
  e.preventDefault;
  $(window).scrollTop(0);
});

$("nav a").on("click", function () {
  var itemId = $(this).attr("href");

  $("nav a").removeClass("active");
  $(this).addClass("active");
  $(itemId).addClass("active");
});
