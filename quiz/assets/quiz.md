#퀴즈 이펙트
자바스크립트를 이용하여 퀴즈 게임을 만드는 미션입니다.

## 01 퀴즈
- json 파일로 정보처리기능사 100문제 주관식을 만들어주세요! (6번파일참조)
- json 파일을 가져와서 화면에 뿌려줍니다.
- 정답을 적으면 바로 확인할 수 있어야 합니다. (1번파일참조)
- 정답 확인 후 다음 문제를 클릭하면 다음 문제를 볼 수 있어야 합니다.
- 현재 몇 문제 중에 몇 번째인지 항상 표시가 되어 있어야 합니다.
- 100문제를 다 풀면 점수와 맞은 개수/틀린 개수를 표시합니다.
- 파일 이름은 c-quiz01.html
금요일까지 숙제 


###
자바스크립트를 사용하여 퀴즈를 만들기 위해 다음과 같은 단계를 따를 수 있습니다.

1. **퀴즈 데이터 정의**: 
   - 퀴즈 질문, 보기, 정답 등을 정의한 데이터를 준비합니다. 이 데이터는 일반적으로 JSON 형식으로 작성됩니다.

2. **HTML 구조 작성**: 
   - 퀴즈를 표시할 HTML 구조를 작성합니다. 퀴즈의 질문과 보기를 표시할 요소들을 마련합니다.

3. **CSS 스타일링**: 
   - 퀴즈 요소들에 대한 스타일을 작성하여 디자인을 정의합니다. 이는 사용자가 퀴즈를 풀 때 화면에 어떻게 나타날지를 결정합니다.

4. **자바스크립트로 퀴즈 데이터 처리**: 
   - 미리 준비한 퀴즈 데이터를 자바스크립트로 가져와서 처리합니다. 이 데이터를 기반으로 퀴즈를 동적으로 생성하고, 사용자의 답변을 확인하여 정답 여부를 판단합니다.

5. **이벤트 처리 및 결과 표시**: 
   - 사용자가 답을 선택하고 제출하는 등의 이벤트를 처리합니다. 이벤트 발생 시 정답 여부를 확인하고, 결과를 화면에 표시합니다.

6. **옵션: 타이머 추가**:
   - 필요하다면 시간 제한이 있는 퀴즈를 위해 타이머를 추가할 수 있습니다. 타이머를 사용하면 사용자에게 정해진 시간 내에 답을 선택하도록 유도할 수 있습니다.

이러한 단계를 따라가면 자바스크립트로 퀴즈를 만들고 실행할 수 있습니다. 초보자라면 먼저 간단한 퀴즈부터 시작하여 기능을 하나씩 추가하면서 익숙해지는 것이 좋습니다. 필요한 경우 인터넷에서 자바스크립트 퀴즈 튜토리얼을 찾아보거나 관련 자료를 참고하여 학습할 수 있습니다.