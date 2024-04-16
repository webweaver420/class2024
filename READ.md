####

명령 프롬프트를 사용할 때 필요한 몇 가지 기능이 있습니다. 이러한 기능을 이해하고 익히면 명령 프롬프트를 보다 효율적으로 사용할 수 있습니다. 명령 프롬프트에서 사용할 수 있는 주요 기능은 다음과 같습니다:

디렉토리 이동 (cd):
cd 명령은 현재 작업 디렉토리를 변경하는 데 사용됩니다. 예를 들어, cd Documents는 현재 작업 디렉토리를 "Documents"로 변경합니다.

디렉토리 내용 표시 (dir):
dir 명령은 현재 디렉토리의 파일과 하위 디렉토리 목록을 표시합니다.

파일 및 디렉토리 생성 및 삭제 (mkdir, rmdir, del):
mkdir은 새 디렉토리를 생성하고, rmdir은 디렉토리를 삭제하며, del은 파일을 삭제합니다.

파일 복사 및 이동 (copy, move):
copy는 파일을 복사하고, move는 파일을 이동합니다.

파일 내용 보기 (type, more, less):
type 명령은 파일 내용을 표시하고, more 및 less는 화면을 넘겨가며 파일 내용을 표시합니다.

파일 및 디렉토리 검색 (find):
find 명령은 파일 내용에서 특정 문자열을 검색합니다.

파일 및 디렉토리 이동 (pushd, popd):
pushd는 디렉토리를 스택에 추가하고 이동하며, popd는 스택의 최상위 디렉토리를 제거하고 해당 디렉토리로 이동합니다.

도움말 (help):
help 명령은 명령 프롬프트에서 사용 가능한 명령들에 대한 도움말을 표시합니다.

이러한 기능들은 명령 프롬프트를 효율적으로 사용하기 위한 기본적인 것들입니다. 추가로 명령 프롬프트에서 사용할 수 있는 명령어들을 익히고 활용하면 작업을 보다 효율적으로 수행할 수 있습니다.

##  명령프롬프트 저장방법


#### 메뉴 각각 슬라이드
1차 메뉴를 오버하면 서브메뉴를 각각 보여줘라!
 $(".nav>ul>li").mouseover(function(){
  $(this).find(".submenu").stop().fadeIn(900);
 });
1차 메뉴를 아웃하면 서브메뉴를 숨겨라!
 $(".nav>ul>li").mouseout(function(){
  $(this).find(".submenu").stop().fadeOut(100);
 }); 

 #### 전체 서브메뉴를 보여줌
 1차 메뉴를 오버하면 서브메뉴를 전체 보여줘라!
 $(".nav>ul>li").mouseover(function(){
  $(".nav>ul>li>ul").stop().fadeIn();
 });
 1차 메뉴를 아웃하면 서브메뉴를 전체 숨겨라!
 $(".nav>ul>li").moustout(function(){
  $(".nav>ul>li>ul").stop().fadeOut();
 });

#### 제이쿼리용 이미지 슬라이드 처리
 $(function(){  // 문서 로딩이 다 되면 실행해라
 let currentIndex = 0;  // 현재 이미지 초기값 변수 설정

 setInterval(function(){  // 일정하게 실행호출
 let nextIndex = (currentIndex + 1) % 3  // 무한반복식

 currentIndex = nextIndex;  // 두번째 인덱스값을 현재 인덱스값에 저장
   // console.log("currentIndex:" + currentIndex)
   // console.log("nextIndex:" + nextIndex)      //콘솔로그를 통해 체크
  }, 3000);
  });

##### 자바스크립트용 이미지 슬라이드 (CSS 설정해줘야 함)
window.onload = function(){
let currentIndex = 0;  // 현재 이미지 초기값 변수 설정
  // 모든 이미지를 변수에 저장
const slider = document.querySelectorAll(".slider");   
  // 모든 이미지를 투명하게 처리
slider.forEach(img => img.style.opacity = "0");
  // 첫번째 이미지만 보이게 처리       
slider[0].style.opacity = "1";                      

  // 일정하게 실행해라
setInterval(() => {  
  // 1 2 0 1 2.. 무한반복     
let nextIndex = (currentIndex + 1) % slider.length;
  // 첫번째 이미지 사라짐
  slider[currentIndex].style.opacity = "0";  
  // 두번째 이미지 나타남
  slider[nextIndex].style.opacity = "1";
  // 이미지 애니메이션 효과추가   
  slider.forEach(img => img.style.transition = "all 1s");   
  // 두번째 인덱스값을 현재 인덱스값에 저장
  currentIndex = nextIndex;   
}, 3000);
}

