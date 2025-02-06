// store component

export const StoreComp = {
  template: `
      <div class="sub-container" id="main">
        <!-- sub-top s -->
        <div class="sub-top">
          <div class="inner">
            <h3 class="sub-title">store</h3>
            <ul class="category-tab">
              <li class="on"><a href="#">대한민국</a></li>
              <li><a href="#">일본</a></li>
              <li><a href="#">중국</a></li>
              <li><a href="#">전시</a></li>
            </ul>
          </div>
        </div>
        <!-- sub-top e -->
        <!-- contents s -->
        <div class="contents">
          <!-- 여기부터 컨텐츠 추가 -->
          <div class="store_wrap">
            <div class="store_section">
              <ul class="store_list"></ul>
            </div>

            <div class="store-desc">
              <div class="store_section">
                <h3>백화점 / 면세점</h3>
                <ul class="store_grid">
                  <li class="item">
                    <strong>신세계 면세점 인천국제공항 T2</strong>
                    <ul>
                      <li>
                        인천광역시 중구 공항로 272, 인천국제공항 제2여객터미널
                        신세계 면세점 3F
                      </li>
                      <li>+82 032-743-4750</li>
                      <li>월-일 6:30am-9:30pm</li>
                    </ul>
                  </li>
                  <li class="item">
                    <strong>신라 면세점 인천국제공항 T1</strong>
                    <ul>
                      <li>
                        인천광역시 중구 공항로 271, 인천국제공항 제1여객터미널
                        신라면세점 3F
                      </li>
                      <li>+82 032-743-4467</li>
                      <li>월-일 6:30am-9:30pm</li>
                    </ul>
                  </li>
                  <li class="item">
                    <strong>스타필드 하남점</strong>
                    <ul>
                      <li>경기도 하남시 미사대로 750 스타필드 하남 1F</li>
                      <li>+82 031 8072 8499</li>
                      <li>월-일 10:00am-10:00pm</li>
                    </ul>
                  </li>
                  <li class="item">
                    <strong>신세계 면세점 명동점</strong>
                    <ul>
                      <li>서울 중구 퇴계로 77 신세계백화점 본점 04583 10F</li>
                      <li>+82 02 6370 4182</li>
                      <li>
                        월-목 10:30am-8:00pm / 금-일,공휴일 10:30am-8:30pm
                      </li>
                    </ul>
                  </li>
                  <li class="item">
                    <strong>신세계 백화점 강남점</strong>
                    <ul>
                      <li>서울특별시 서초구 신반포로 176 (반포동) 1F</li>
                      <li>+82 02 3479 1275</li>
                      <li>
                        월-목 10:30am-8:00pm / 금-일,공휴일 10:30am~8:30pm
                      </li>
                    </ul>
                  </li>
                  <li class="item">
                    <strong>신세계 백화점 센텀시티점</strong>
                    <ul>
                      <li>
                        부산 해운대구 센텀남대로 35 신세계백화점 센텀시티점 1F
                      </li>
                      <li>+82 051 745 1398</li>
                      <li>
                        월-목 10:30am-8:00pm / 금-일,공휴일 10:30am-8:30pm
                      </li>
                    </ul>
                  </li>
                  <li class="item">
                    <strong>롯데백화점 본점</strong>
                    <ul>
                      <li>서울 중구 남대문로 81 롯데백화점 본점 B1F</li>
                      <li>+82 02 772 3905</li>
                      <li>
                        월-목 10:30am-8:00pm / 금-일,공휴일 10:30am-8:30pm
                      </li>
                    </ul>
                  </li>
                  <li class="item">
                    <strong>현대백화점 판교점</strong>
                    <ul>
                      <li>경기도 성남시 분당구 판교역로146번길 20 (1F)</li>
                      <li>+82 031 5170 1153</li>
                      <li>
                        월-목 10:30am-8:00pm / 금-일,공휴일 10:30am-8:30pm
                      </li>
                    </ul>
                  </li>
                  <li class="item">
                    <strong>더현대 서울점</strong>
                    <ul>
                      <li>서울 영등포구 여의대로 108 1F</li>
                      <li>+82 02 3277 8593</li>
                      <li>
                        월-목 10:30am-8:00pm / 금-일, 공휴일 10:30am-8:30pm
                      </li>
                    </ul>
                  </li>
                  <li class="item">
                    <strong>롯데 면세점 명동점</strong>
                    <ul>
                      <li>서울 중구 을지로 30 12F</li>
                      <li>+82 70 4240 9664</li>
                      <li>월-일 9:30am-8:00pm</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="store_section">
                <h3>스톡키스트</h3>
                <ul class="store_grid">
                  <li class="item">
                    <strong>시코르 AK 플라자 홍대점</strong>
                    <ul>
                      <li>서울특별시 마포구 양화로 188 AK플라자 1층</li>
                      <li>+82 02 789 9810</li>
                      <li>월-일 10:30am-10:00pm</li>
                    </ul>
                  </li>
                  <li class="item">
                    <strong>시코르 강남역점</strong>
                    <ul>
                      <li>서울 서초구 강남대로 441 서산빌딩 1층</li>
                      <li>+82 02 3495 7600</li>
                      <li>월-일 10:30am-10:00pm</li>
                    </ul>
                  </li>
                  <li class="item">
                    <strong>10 꼬르소꼬모 에비뉴엘점</strong>
                    <ul>
                      <li>서울 중구 남대문로 73 5층 10 꼬르소꼬모</li>
                      <li>+82 02 2118 6095</li>
                      <li>월-일 10:30am-8:00pm</li>
                    </ul>
                  </li>
                  <li class="item">
                    <strong>10 꼬르소꼬모 청담점</strong>
                    <ul>
                      <li>서울 강남구 압구정로 416</li>
                      <li>+82 02 3018 1010</li>
                      <li>월-일 11:00am-8:00pm</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- contents e -->
      </div>
  `,
  mounted(){
    $("head").append(`<script type="module" src="/assets/js/store.js"></script>`);
  }
};
