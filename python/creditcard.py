from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.chrome.options import Options as ChromeOptions
from selenium.common.exceptions import NoSuchElementException
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
from datetime import datetime
import time
import json
# 현재 날짜 가져오기
current_date = datetime.now().strftime("%Y-%m-%d")
folder_path = "scrapList"
filename = f"{folder_path}/cardHana_{current_date}.json"
# 웹드라이브 설치
options = ChromeOptions()
service = ChromeService(executable_path=ChromeDriverManager().install())
browser = webdriver.Chrome(service=service, options=options)
browser.get("https://card-search.naver.com/list?companyCode=SK&sortMethod=ri&isRefetch=true&bizType=CPC")
# 페이지가 완전히 로드될 때까지 대기
WebDriverWait(browser, 10).until(
    EC.presence_of_element_located((By.CLASS_NAME, "list"))
)
# 스크롤을 최하단으로 이동하고 ".more" 버튼이 나타날 때마다 클릭하는 함수 정의
def scroll_and_click_more(browser):
    while True:
        # 현재 브라우저의 높이 가져오기
        last_height = browser.execute_script("return document.body.scrollHeight")
        # 스크롤을 최하단으로 이동
        browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        # 스크롤이 완료될 때까지 대기
        time.sleep(1)  # 적절한 대기 시간을 선택합니다.
        try:
            # ".more" 버튼 요소 찾기
            more_button = browser.find_element(By.CSS_SELECTOR, ".more")
            # ".more" 버튼이 존재하면 클릭하고, 그렇지 않으면 반복문을 종료
            if more_button:
                more_button.click()
                # 스크롤 후에 페이지가 업데이트되어 더 이상 스크롤이 필요하지 않을 때까지 반복
                while True:
                    # 새로운 높이 가져오기
                    new_height = browser.execute_script("return document.body.scrollHeight")
                    if new_height == last_height:
                        break
                    last_height = new_height
                    browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")
                    time.sleep(1)  # 적절한 대기 시간을 선택합니다.
            else:
                break
        except NoSuchElementException:
            break
# 스크롤을 최하단으로 이동하고 ".more" 버튼을 클릭하여 추가 콘텐츠를 로드
scroll_and_click_more(browser)
# 업데이트된 페이지 소스를 변수에 저장
html_source_updated = browser.page_source
soup = BeautifulSoup(html_source_updated, 'html.parser')  # 파서를 명시적으로 지정합니다.
card_data = []
tracks = soup.select(".cards .item")
for track in tracks:
    cardImg = track.select_one(".preview .anchor .figure .img").get('src')
    cardName = track.select_one(".info .anchor .name").text.strip()
    cardDesc = track.select_one(".info .desc").text.strip()
    cardAnnual = track.select_one(".info .annual_fee").text.strip()
    card_data.append({
        "cardImg": cardImg,
        "cardName": cardName,
        "cardDesc": cardDesc,
        "cardAnnual": cardAnnual
    })
# print(card_data)
# 데이터를 JSON 파일로 저장
with open(filename, 'w', encoding='utf-8') as f:
    json.dump(card_data, f, ensure_ascii=False, indent=4)
# 20초 동안 대기
time.sleep(5)
# 브라우저 종료
browser.quit()