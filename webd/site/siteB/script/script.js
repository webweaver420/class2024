$(function () {
  // 이미지 슬라이드
  let currentIndex = 0;  //현재 이미지
  $(".sliderWrap").append(S(".slider").first().clone(true));

  setInterval(function () {
    currentIndex++;  // 현재 이미지 1씩 증가
    $(".sliderWrap").animate({ marginLeft: -1200 * currentIndex }, 600);

    if (currentIndex == 3) {
      setTimeout(function () {
        $(".sliderWrap").animate({ marginLeft: 0 }, 0);
        currentIndex = 0;
      }, 700);
    }
  }, 3000);
});