// 6401 팀프로젝트 :: 탬버린즈 - store.js //

/*************************************************************
  [  요구사항  ]
  - prev, next 버튼 없이 스와이프로 동작
  - 배너 개수에 맞게 하단에 바형 인디케이터 설정 및 조작
**************************************************************/
// 데이터 불러오기
import storeData from '../data/store-banner.json' with { type: "json" };

// 대상요소
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
function setListFn(setNum) { // setNum - 국가코드배열순번전달변수
  // 선택 데이터 할당하기
  const selData = storeData[countryCode[setNum]];

  console.log(selData, targetList, descEle);

  ////// 스와이프 배너 구현 //////
  targetList.innerHTML = selData.map(
    (v) => `
    <li class="${setNum==3?'exhibition':''}">
      <div class="store_slide_wrap">
        <ul class="store_img">
        ${Array.from({ length: v["img-cnt"] })
          .map(
            (val, seq) => `
          <li>
            <img src="./img/store/img_store_${v["img-key"]}_${
              seq < 9 ? "0" + (seq + 1) : seq + 1
            }.jpg" alt="${v.name} ${
              seq < 9 ? "" + (seq + 1) : seq + 1
            }번째 이미지" />
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
          ${setNum == 3 ? (setNum == 3 ? '' : `<a href="${v["store-map"]}" class="store_address" target="_blank">지도보기</a>`) : `<a href="${v["store-map"]}" class="store_address" target="_blank">지도보기</a>`}
        </div>
        <div class="store_disc exhibition">
          ${setNum==3?"<p class='store_description'>"+v['store-desc']+"</p>":''}
          <p class="store_disc_address">${v["store-address"]}</p>
          <p class="store_disc_phone">${v["store-phone"]}</p>
          <p>${v["store-time"]}</p>
        </div>
      </div>
    </li>
  `
  );
  const targetEl = document.querySelectorAll(".store_slide_wrap");
  ////// 스와이프 배너 구현 //////

  ////// 인디케이터 //////
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

    function goToSlide(index) {
      currentIndex = index;
      updateSlides();
    }

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
  } ////////////// setElFn 함수 /////////////////////

  if(setNum==0){
    descEle.style.display = 'block';
  } /// if ///
  else{
    descEle.style.display = 'none';
  } /// else ///
} //////////// setListFn 함수 ////////////

document.querySelectorAll(".category-tab li").forEach((el, i, obj) => {
  // el-해당요소, i-순번, obj-요소전체
  el.onclick = function () {
    console.log(this);
    // 클래스 넣기/제거하기 기능
    // 전부 클래스 on제거
    obj.forEach((ele) => ele.classList.remove("on"));
    // 해당요소만 on넣기
    this.classList.add("on");

    // 리스트생성함수 호출하기
    setListFn(i);
  };
});
