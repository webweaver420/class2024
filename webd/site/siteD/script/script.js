$(function () {
    let currentIndex = 0;  //초기
    $(".sliderWrap").append($(".slider").first().clone(true));  //복제
    setInterval(function () {  //3초실행
        currentIndex++;  //증가식
        $(".sliderWrap").animate({ marginTop: -currentIndex * 400 + "px" }, 600);  //애니

        if (currentIndex == 3) {  //이프문
            setTimeout(function () {  //한번만실행
                $(".sliderWrap").animate({ marginTop: 0 }, 0);  //애니
                currentIndex = 0;  //초기
            }, 600);
        }
    }, 3000);

    // menu
    $(".nav>ul>li").mouseover(function () {
        $(this).find(".sub").stop().slideDown();
    });
    $(".nav>ul>li").mouseout(function () {
        $(this).find(".sub").stop().slideUp();
    });
});