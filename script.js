$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });
});

$(document).ready(function () {
  $(document).on("mousemove", function (e) {
    var cursor = $(".cursor");
    cursor.attr(
      "style",
      "top:" + (e.pageY - 10) + "px; left:" + (e.pageX - 10) + "px;"
    );
  });
});

$(document).ready(function () {
  $(window).on("scroll", function () {
    var scrollPosition = $(window).scrollTop();
    var animatedParagraphOffSet =
      $(".animated-paragraph").offset().top - $(window).height();

    if (scrollPosition > animatedParagraphOffSet) {
      $(".animated-paragraph").addClass("visible").removeClass("hidden");
    }

    if (scrollPosition < animatedParagraphOffSet) {
      $(".animated-paragraph").addClass("hidden").removeClass("visible");
    }
  });
});

$(document).ready(function () {
  let autoChangeInterval;

  $(".card").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");

    clearInterval(autoChangeInterval);

    autoChangeInterval = setInterval(activeCard, 3000);
  });

  function activeCard() {
    var $activeCard = $(".card.active");
    var $nextCard = $activeCard.next(".card");

    if ($nextCard.length > 0) {
      $activeCard.removeClass("active");
      $nextCard.addClass("active");
    } else {
      $activeCard.removeClass("active");
      $(".card").first().addClass("active");
    }
  }
});
