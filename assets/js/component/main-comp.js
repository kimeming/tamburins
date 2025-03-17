// main component
import productList from "../../data/product-list.js";
import { newProduct } from "../../data/main-data.js";

const bestProducts = [...productList]
  .sort((a, b) => b.pSelling - a.pSelling)
  .slice(0, 5);

export const Main = {
  data() {
    return {
      bestProducts: [],
      newProduct: [],
    };
  },
  mounted() {
    this.bestProducts = bestProducts;
    this.newProduct = newProduct;

    // bestseller sllide
    const bestSlide = new Swiper(".best-slide", {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      breakpoints: {
        360: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
          centeredSlides: false,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
          centeredSlides: false,
        },
      },
    });

    // new product slide
    const newSlide = new Swiper(".new-slide", {
      loop: true,
      navigation: {
        nextEl: ".new-slide .swiper-button-next",
        prevEl: ".new-slide .swiper-button-prev",
      },
    });

    // header logo animation
    let prevWidth = window.innerWidth;
    let resizeTimer;

    function headerAni(playVideo = false) {
      if (window.innerWidth >= 1024) {
        // 1024 이상: 전체 애니메이션 실행
        const $logo = $(".header .logo");
        const pcVideo = $(".video-wrap .web");

        $(".header .util, .header-left").hide();
        pcVideo[0].pause();
        $("body").addClass("on");

        setTimeout(function () {
          $logo.addClass("active");

          if (playVideo) {
            pcVideo[0].play();
          }

          $(".header .util, .header-left").fadeIn();
          $("body").removeClass("on");
        }, 500);
      } else if (window.innerWidth >= 768) {
        // 768 이상 1024 미만: video만 play
        $(".video-wrap .web")[0].play();
      }
    }

    // 초기 실행
    if (window.innerWidth >= 1024) {
      headerAni(true);
    } else if (window.innerWidth >= 768) {
      $(".video-wrap .web")[0].play();
    }

    // 리사이즈 감지 (디바운스 적용)
    $(window).on("resize", function () {
      clearTimeout(resizeTimer); // 이전 타이머 제거
      resizeTimer = setTimeout(function () {
        let currentWidth = window.innerWidth;

        if (prevWidth < 1024 && currentWidth >= 1024) {
          headerAni(true); // 1024 미만 → 1024 이상으로 바뀔 때 전체 실행
        } else if (prevWidth < 768 && currentWidth >= 768) {
          $(".video-wrap .web")[0].play(); // 768 미만 → 768 이상으로 바뀔 때 video 실행
        }

        prevWidth = currentWidth; // 현재 너비 저장
      }, 300); // 300ms 후에 실행 (성능 최적화)
    });

    // store slide
    const storeSlide = new Swiper(".store-slide", {
      slidesPerView: 1,
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        draggable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
      on: {
        slideChange: function () {
          const storeArr = [
            "플래그십 스토어 한남",
            "플래그십 스토어 성수",
            "플래그십 스토어 삼청",
            "하우스 도산",
            "플래그십 스토어 신사",
          ];
          let realIdx = this.realIndex;
          const storeName = document.querySelector(".store-name");

          // 클래스 초기화
          storeName.classList.remove("show");

          // 텍스트 추가 후 클래스 재추가
          setTimeout(() => {
            storeName.innerText = storeArr[realIdx];
            storeName.classList.add("show");
          }, 500);
        },
      },
    });

    // section header change
    const header = document.querySelector("header"); // header 요소 선택
    const sections = document.querySelectorAll("section"); // 모든 section 요소 선택
    const headerHeight = header.offsetHeight; // header의 높이 계산

    window.addEventListener("scroll", () => {
      let addBlackClass = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        // 섹션의 상단이 헤더 높이만큼 보였을 때 조건 확인
        if (rect.top <= headerHeight && rect.bottom >= headerHeight) {
          if (
            section.classList.contains("best") ||
            section.classList.contains("store")
          ) {
            addBlackClass = true;
          }
        }
      });

      // header에 black 클래스 추가/제거
      if (addBlackClass) {
        header.classList.add("black");
      } else {
        header.classList.remove("black");
      }
    });
  },
  template: `
    <main class="main-container" id="main">
            <!-- section visual s -->
            <section class="section visual">
                <h2 class="blind">메인 비주얼 영역</h2>
                <div class="video-wrap">
                    <video muted="muted" playsinline="" preload="auto" src="./assets/img/main/video-main.mp4" poster="./assets/img/main/img-main-video-cover.png" class="web"></video>
                    <video muted="muted" playsinline="" preload="auto" autoplay="true"  src="./assets/img/main/video-main-visual-mob.mp4" poster="./assets/img/main/img-main-video-cover.png" class="mob"></video>
                </div>
            </section>
            <!-- section visual e -->
            <!-- section best s -->
            <section class="section best">
                <div class="inner">
                    <h2 class="blind">베스트셀러 영역</h2>
                    <h3 class="section-tit">Bestseller</h3>
                    <div class="swiper best-slide">
                        <ul class="product-list swiper-wrapper"> 
                            <li v-for="product in bestProducts" :key="product.idx" class="swiper-slide">
                                <a :href="product.plink" class="item">
                                <div class="img-box">
                                    <img :src="product.pImage" alt="상품 이미지">
                                </div>
                                <div class="info-box">
                                    <p class="name">{{ product.pTitle }}</p>
                                    <span class="fragrance">{{ product.pNote }}</span>
                                    <strong class="price">{{ product.pPrice }}</strong>
                                </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <!-- section best e -->
            <!-- section new s -->
            <section class="section new">
                <h2 class="blind">신상품 영역</h2>
                <div class="new-slide swiper">
                    <ul class="new-product-list swiper-wrapper">
                        <li v-for="(slide, index) in newProduct" :key="index" class="swiper-slide":class="'item' + (index + 1)">
                            <div class="inner">
                                <h3 class="section-tit">{{ slide.title }}</h3>
                                <div class="intro-box">
                                    <span>{{ slide.intro }}</span>
                                    <p v-html="slide.description"></p>
                                </div>
                                <a :href="slide.link" class="link-btn">Go To Shop <span class="icon star"></span></a>
                            </div>
                        </li>
                    </ul>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </section>
            <!-- section new e -->
            <!-- section store s -->
            <section class="section store">
                <div class="inner">
                    <h2 class="blind">매장소개 영역</h2>
                    <div class="store-wrap">
                        <div class="store-slide-wrap">
                            <div class="store-slide swiper">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <img src="./assets/img/store/img_store_hannam_01.jpg" alt="플래그십 스토어 한남">
                                    </div>
                                    <div class="swiper-slide">
                                        <img src="./assets/img/store/img_store_seongsu_01.jpg" alt="플래그십 스토어 성수">
                                    </div>
                                    <div class="swiper-slide">
                                        <img src="./assets/img/store/img_store_samcheong_01.jpg" alt="플래그십 스토어 삼청">
                                    </div>
                                    <div class="swiper-slide">
                                        <img src="./assets/img/store/img_store_dosan_02.jpg" alt="하우스 도산">
                                    </div>
                                    <div class="swiper-slide">
                                        <img src="./assets/img/store/img_store_sinsa_01.jpg" alt="플래그십 스토어 신사">
                                    </div>
                                </div>
                                <div class="swiper-scrollbar"></div>
                                <div class="swiper-button-prev"></div>
                                <div class="swiper-button-next"></div>
                            </div>
                            <p class="store-name">플래그십 스토어 한남</p>
                        </div>
                        <div class="store-info">
                            <h3 class="section-tit">스토어 로케이터</h3>
                            <p>지금 바로 가까운 매장에서 탬버린즈의 다양한 제품들을 체험해 보세요.</p>
                            <a href="#/store" class="link-btn">Find Store <span class="icon arrow"></span></a>
                        </div>
                    </div>
                </div>
            </section>
            <!-- section store e -->
        </main>
    `,
};
