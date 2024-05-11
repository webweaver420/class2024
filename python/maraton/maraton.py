import requests
from bs4 import BeautifulSoup

# World Marathon Calendar 사이트에서 대회 일정 페이지의 URL
url = "https://worldsmarathons.com/marathon-calendar"

# GET 요청을 보내고 응답을 받아옴
response = requests.get(url)

# BeautifulSoup을 사용하여 HTML 파싱
soup = BeautifulSoup(response.text, "html.parser")

# 대회 일정이 포함된 요소를 찾음 (여기서는 이벤트 카드)
event_cards = soup.find_all("div", class_="col-lg-4 col-md-6")

# 각 이벤트 카드에서 대회 정보 추출
for event_card in event_cards:
    # 대회 날짜
    date = event_card.find("div", class_="date").text.strip()
    # 대회 이름
    name = event_card.find("h4").text.strip()
    # 대회 장소
    location = event_card.find("div", class_="location").text.strip()
    
    # 결과 출력
    print("Date:", date)
    print("Event:", name)
    print("Location:", location)
    print()