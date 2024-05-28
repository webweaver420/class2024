// 이미지 슬라이드 위로

$(function () {
  let currentIndex = 0;  //초기값설정
  $(".imageWrap").append($(".image").first().clone(true));  //전체이미지중 첫번째복제

  setInterval(function () {  //3초동안 일정하게 이미지1씩 증가
    currentIndex++;
    $(".imageWrap").animate({ marginTop: -400 * currentIndex + "px" }, 600);

    if (currentIndex == 3) {
      setTimeout(function () {
        $(".imageWrap").animate({ marginTop: 0 }, 0);
        currentIndex = 0;
      }, 600);
    }
  }, 3000);

  // 메뉴
  $(".nav>ul>li").mouseover(function () {
    $(this).find(".submenu").stop().slideDown();
  });

  $(".nav>ul>li").mouseout(function () {
    $(this).find(".submenu").stop().slideUp();
  });

  // 팝업
  $(".popup-btn").click(function () {
    $(".popup-view").show();
  });
  $(".popup-close").click(function () {
    $(".popup-view").hide();
  });
});




