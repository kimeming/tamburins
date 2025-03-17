// store component
// 카테고리별 제이슨 데이터 불러오기
import storeData from '../../data/store-banner.json' with { type: "json" };

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
  data(){
    return{
      storeData: storeData,
    }
  },
  mounted(){
    // 6401 팀프로젝트 :: 탬버린즈 - store.js //

/*************************************************************
  [  요구사항  ]
  - prev, next 버튼 없이 스와이프로 동작
  - 배너 개수에 맞게 하단에 바형 인디케이터 설정 및 조작
**************************************************************/


// 스와이프 대상요소
const descEle = document.querySelector(".store-desc");
const targetList = document.querySelector(".store_list");

// 국가코드 배열
let countryCode = ["korea", "japan", "china", "exhibition"];

// 스토어 배너 리스트 생성함수 최초호출
setListFn(0);

/************************************ 
  함수명 : setListFn
  기능 : 스토어 배너 리스트 생성함수
************************************/
function setListFn(countryNum) {
  // countryNum - 국가코드 전달변수

  // 선택 데이터 할당
  const selData = storeData[countryCode[countryNum]];

  console.log(selData, targetList, descEle);

  ////// 스와이프 배너 구현 //////
  targetList.innerHTML = selData.map(
    (v) => `
    <li class="${countryNum == 3 ? "exhibition" : ""}">
      <div class="store_slide_wrap">
        <ul class="store_img">
        ${Array.from({ length: v["img-cnt"] })
          .map(
            (val, seq) => `
          <li>
            <img src="./assets/img/store/img_store_${v["img-key"]}_${seq < 9 ? "0" + (seq + 1) : seq + 1}.jpg" alt="${
              v.name
            } ${seq < 9 ? "" + (seq + 1) : seq + 1}번째 이미지" />
          </li>
          `
          )
          .join("")}        
        </ul>
        <div class="store_indic">
          <ol></ol>
          <!-- 표시박스 -->
          <div class="indic_box"></div>
        </div>
      </div>
      <div class="store_contents">
        <div class="store_info">
          <h2 class="store_name">${v["name"]}</h2>
          ${
            countryNum == 3
              ? countryNum == 3
                ? ""
                : `<a href="${v["store-map"]}" class="store_address" target="_blank">지도보기</a>`
              : `<a href="${v["store-map"]}" class="store_address" target="_blank">지도보기</a>`
          }
        </div>
        <div class="store_disc">
          ${countryNum == 3 ? "<p class='store_description exhibition'>" + v["store-desc"] + "</p>" : ""}
          <p class="store_disc_address">${v["store-address"]}</p>
          <p class="store_disc_phone">${v["store-phone"]}</p>
          <p>${v["store-time"]}</p>
        </div>
      </div>
    </li>
  `
  ).join("");

  const targetEl = document.querySelectorAll(".store_slide_wrap");
  //////// 스와이프 ////////

  ////// 배너 이미지 개수에 맞게 인디케이터 설정 //////
  targetEl.forEach((el) => setElFn(el));

  function setElFn(tgEl) {
    const storeOl = tgEl.querySelector(".store_indic ol");
    const indicBox = tgEl.querySelector(".indic_box");
    const slidesContainer = tgEl.querySelector(".store_img");

    const slides = slidesContainer.querySelectorAll("li");
    let currentIndex = 0;

    // 인디케이터 생성
    slides.forEach(() => {
      storeOl.innerHTML += `<li></li>`;
    });

    const indicators = tgEl.querySelectorAll(".store_indic ol li");
    indicators[currentIndex].classList.add("active"); // 초기 활성화 인디케이터

    // 인디케이터 박스의 너비 설정
    indicBox.style.width = 100 / slides.length + "%";

    // 스와이프 기능 구현
    let startX, endX;

    tgEl.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      e.preventDefault(); // 기본 동작 방지
    });

    tgEl.addEventListener("touchmove", (e) => {
      endX = e.touches[0].clientX;
      e.preventDefault(); // 기본 동작 방지
    });

    tgEl.addEventListener("touchend", () => {
      if (startX > endX + 50) {
        // 왼쪽으로 스와이프
        nextSlide();
      } else if (startX + 50 < endX) {
        // 오른쪽으로 스와이프
        prevSlide();
      }
    });
    tgEl.addEventListener("mousedown", (e) => {
      startX = e.pageX;
      e.preventDefault(); // 기본 동작 방지
    });
    tgEl.addEventListener("mousemove", (e) => {
      endX = e.pageX;
      e.preventDefault(); // 기본 동작 방지
    });
    tgEl.addEventListener("mouseup", () => {
      if (startX > endX + 50) {
        // 왼쪽으로 스와이프
        nextSlide();
      } else if (startX + 50 < endX) {
        // 오른쪽으로 스와이프
        prevSlide();
      }
    });

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlides();
    }
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlides();
    }
    function updateSlides() {
      slides.forEach((slide, index) => {
        slide.style.display = index === currentIndex ? "block" : "none";
      });
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentIndex);
      });
      indicBox.style.left = indicators[currentIndex].offsetLeft + "px";
    }

    updateSlides(); // 초기 슬라이드 설정
  } // setElFn

  // [대한민국] 카테고리에는 별도 서브메뉴 노츨 //
  if (countryNum == 0) {
    descEle.style.display = "block";
  } // if
  else {
    descEle.style.display = "none";
  } // else
} // setListFn 함수 

// 카테고리 탭 메뉴
document.querySelectorAll(".category-tab li").forEach((el, i, obj) => {
  el.onclick = function () {

    // 전부 클래스 on제거
    obj.forEach((ele) => ele.classList.remove("on"));
    // 해당요소만 on넣기
    this.classList.add("on");

    // 리스트생성함수 호출
    setListFn(i);
  };
});

  }
};
