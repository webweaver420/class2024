$(function () {
    // 메뉴
    $(".nav > ul > li").mouseover(function () {
        $(this).find(".sub").stop().slideDown();
    });
    $(".nav > ul > li").mouseout(function () {
        $(this).find(".sub").stop().slideUp();
    });

    // script
    let currentIndex = 0;

    $(".sliderWrap").append($(".slider").first().clone());

    setInterval(() => {
        currentIndex++;
        $(".sliderWrap").animate({ marginLeft: -currentIndex * 100 + "%" }, 600);

        if (currentIndex == 3) {
            setTimeout(() => {
                $(".sliderWrap").animate({ marginLeft: 0 }, 0);
                currentIndex = 0;
            }, 600);
        }
    }, 3000);

    // popup
    $(".popup_btn").click(function () {
        $(".popup_view").show();
    });
    $(".popup_close").click(function () {
        $(".popup_view").hide();
    });
});