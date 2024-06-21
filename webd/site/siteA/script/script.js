$(function () {
    // menu
    $(".nav>ul>li").mouseover(function () {
        $(this).find(".sub").stop().slideDown();
    });
    $(".nav>ul>li").mouseout(function () {
        $(this).find(".sub").stop().slideUp(200);
    });


    // script
    let currentIndex = 0;  //초기값

    setInterval(function () {

        let nextIndex = (currentIndex + 1) % 3;  //공식

        $(".slider").eq(currentIndex).fadeOut(1200);  //사라지고
        $(".slider").eq(nextIndex).fadeIn(1200);  //사라지고

        currentIndex++;  //증가

        currentIndex = nextIndex;
    }, 3000);

    // popup
    $(".popup_btn").click(function () {
        $(".popup_view").show();
    });
    $(".popup_close").click(function () {
        $(".popup_view").hide();
    });

    // tab
    // const tabBtn = $(".info_menu > a");
    // const tabCont = $(".info_cont > div");
    // tabCont.hide().eq(0).show();

    // tabBtn.click(function () {
    //     const index = $(this).index();

    //     $(this).addClass("active").siblings().removeClass("active");
    //     tabCont.eq(index).show().siblings().hide();
    // });

    // let tabBtn = $(".tab-menu > a");  //버튼설정
    // let tabCont = $(".tab-cont > div");  //컨텐츠설정
    // tabCont.hide().eq(0).show();  //컨텐츠전체숨기고 첫번째컨텐츠만 보이게

    // tabBtn.click(function () {  //탭버튼클릭시 실행
    //     let index = $(this).index();  //내가클릭한인덱스값저장

    //     $(this).addClass("active").siblings().removeClass("active");  //클릭버튼액티브추가 나머지지움
    //     tabCont.eq(index).show().siblings().hide();
    // });

    // const tabBtn = $(".info_menu > a")  //메뉴 설정
    // const tabCont = $(".info_cont > div")  //컨텐츠 설정
    // tabCont.hide().eq(0).show();  //컨텐츠 전체 숨기고 첫번째 컨텐츠만 보이게

    // tabBtn.click(function () {  //탭버튼 클릭시 실행
    //     const index = $(this).index();  //내가 클릭한 인덱스값 저장

    //     $(this).addClass("active").siblings().removeClass("active");  //클릭한버튼에 액티브추가 나머지는 제거
    //     tabCont.eq(index).show().siblings().hide();
    // });

    // let tabBtn = $(".tab-menu > a");
    // let tabCont = $(".tab-cont > div");  //버튼설정 후 컨텐츠숨기고 첫번째만 보이게
    // tabCont.hide().eq(0).show();  //탭버튼클릭시 내가 클릭한 인덱스값 저장

    // tabBtn.click(function () {
    //     let index = $(this).index();  //내가클릭한것 액티브추가 나머지제거

    //     $(this).addClass("active").siblings().removeClass("active");  //컨텐츠 보여주고 나머지숨김
    //     tabCont.eq(index).show().siblings().hide();
    // });

    // let tabBtn = $(".tab-menu > a");
    // let tabCont = $(".tab-cont > div");  //버튼설정후 컨텐츠모두숨기고 첫번째만 보여줌
    // tabCont.hide().eq(0).show();  //탭버튼클릭시실행

    // tabBtn.click(function () {  //인덱스변수설정후 내가클릭한인덱스값저장
    //     let index = $(this).index();  //인덱스액티브추가 후 나머지형제들제거

    //     $(this).addClass("active").siblings().removeClass("active");  //컨텐츠에 액티브한 인덱스보여주고 나머지숨김
    //     tabCont.eq(index).show().siblings().hide();
    // });

    // let tabBtn = $(".tab-menu > a");
    // let tabCont = $(".tab-cont > div");  //버튼설정후 컨텐츠모두숨기고 첫번째컨텐츠만 보이게
    // tabCont.hide().eq(0).show();  //탭버튼 클릭시 실행/ 인덱스변수설정후 내가클릭한인덱스값저장

    // tabBtn.click(function () {
    //     let index = $(this).index();  //내가클릭한버튼 액티브추가 나머지제거
    //     $(this).addClass("active").siblings().removeClass("active");  //선택메서드로 액티브한인덱스보여주고 나머지형제들숨김
    //     tabCont.eq(index).show().siblings().hide();
    // });
});