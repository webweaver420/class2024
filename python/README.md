# 파이썬 설치 리스트 보기
````
 pip rist
````
 
## 파이썬 패키지 설치
````
 pip install requests
 pip install beautifulsoup4
 pip install lxml
 pip install pandas
 pip install selenium
 pip install webdriver_manager
````
### 파이썬 접속
- cd python 
- python(접속할주소).py

 ### 뮤직차트 데이터 수집시 초기세팅 
````
 import requests as req
 from bs4 import BeautifulSoup as bs
 import pandas as pd
 res = req.get(“https://music.bugs.co.kr/chart”)
 # print(res.status_code)  # 200
 # print(res.text)
````

