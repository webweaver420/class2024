// $(function () {
//   // 이미지 슬라이드
//   let currentIndex = 0;
//   $(".sliderWrap").append($(".slider").first().clone(true));

//   setInterval(() => {
//     currentIndex++;
//     $(".sliderWrap").animate({ marginLeft: -100 * currentIndex + "%" }, 600);

//     if (currentIndex == 3) {
//       setTimeout(() => {
//         $(".sliderWrap").animate({ marginLeft: 0 }, 0);
//         currentIndex == 0;
//       }, 600)
//     }
//   }, 3000);
// });

$(function () {
  let currentIndex = 0; // 이미지 초기값 설정
  $(".sliderWrap").append($(".slider").first().clone(true));  // 전체이미지에서 첫번째 이미지를 복사해라

  setInterval(function () {  // 일정하게 실행해라
    currentIndex++;  // 현재이미지 1씩 증가
    // console.log(currentIndex)
    $(".sliderWrap").animate({ marginLeft: currentIndex * -100 + "%" }, 600);

    if (currentIndex == 3) {
      setTimeout(function () {
        $(".sliderWrap").animate({ marginLeft: 0 }, 0);
        currentIndex = 0;
      }, 600)
    }
  }, 3000);

});