$(function () {
  let currentIndex = 0;
  $(".imageWrap").append($(".image").first().clone(true));

  setInterval(() => {
    currentIndex++;
    $(".imageWrap").animate({ marginTop: -400 * currentIndex + "px" }, 600);

    if (currentIndex == 3) {
      setTimeout(() => {
        $(".imageWrap").animate({ marginTop: 0 }, 0);
        currentIndex = 0;
      }, 600);
    }
  }, 3000);
});