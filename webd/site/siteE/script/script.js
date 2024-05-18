$(function () {  //$ 기호는 jQuery 함수를 호출하는 축약형
    // 이미지 슬라이드
    let currentIndex = 0;  // 현재 이미지 초기값 설정
    $(".sliderWrap").append($(".slider").first().clone(true));  // 전체 이미지에서 찾아서 첫번째 이미지 복사

    setInterval(function () {  //3초마다 일정하게 실행해라
        currentIndex++;  // 현재이미지 1씩증가
        // console.log(currentIndex) 정상작동하는지 확인하고!!!
        $(".sliderWrap").animate({ marginLeft: (currentIndex * -100) + "%" }, 600);  //슬라이더 이미지 전체를 왼쪽으로 100%씩 이동
        if (currentIndex == 3) {  //슬라이더가 마지막 이미지에 도달하면
            setTimeout(function () {  //setTimeout 함수는 지정된 시간(0.6초 후)이 지난 후에 내부에 정의된 함수를 실행
                $(".sliderWrap").animate({ marginLeft: 0 }, 0);  //.sliderWrap 요소의 왼쪽 여백을 0으로, 애니메이션의 지속 시간은 0을 전달하여 애니메이션을 즉시 실행
                currentIndex = 0;  // 인덱스를 0으로 재설정
            }, 600);
        }
    }, 3000);

    // 메뉴
    $(".nav>ul>li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown();
    });
    $("nav>ul>li").mouseout(function () {
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