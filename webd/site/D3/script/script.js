$(function () {
    // menu
    $(".nav>ul>li").mouseover(function () {
        $(".nav>ul>li>ul").stop().slideDown(1200);
    });
    $(".nav>ul>li").mouseout(function () {
        $(".nav>ul>li>ul").stop().slideUp(600);
    });

    // slider
    let currentIndex = 0;

    setInterval(function () {
        let nextIndex = (currentIndex + 1) % 3

        $(".slider").eq(currentIndex).fadeOut(1200);
        $(".slider").eq(nextIndex).fadeIn(1200);

        currentIndex++;

        currentIndex = nextIndex;
    }, 3000);

});