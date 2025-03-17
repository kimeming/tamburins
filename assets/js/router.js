// 데이터
import linkSetData from "../data/gnb-data.js";
import store from "../js/vuex_store_store.js";

// 컴포넌트 import
import { Main } from "../js/component/main-comp.js";
import { SubLayout, Community } from "../js/component/sub-comp.js";
import { List } from "../js/component/list-comp.js";
import { View } from "../js/component/view-comp.js";
import { StoreComp } from "../js/component/store-comp.js";
import { LoginComp, JoinComp } from "../js/component/login-comp.js";
import { FaqComp } from "../js/component/faq-comp.js";
import { ServiceComp } from "../js/component/service-comp.js";
import { CartComp } from "../js/component/cart-comp.js";

const itemPath = store.state.productView.idx;

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/login",
    component: LoginComp,
  },
  {
    path: "/join",
    component: JoinComp,
  },
  {
    path: "/cart",
    component: CartComp,
  },
  {
    path: "/community",
    component: Community,
    redirect: "/community/faq",
    children: [
      {
        path: "faq",
        component: FaqComp,
      },
      {
        path: "service",
        component: ServiceComp,
      },
    ],
  },
  {
    path: "/store",
    component: StoreComp,
  },
  {
    path: "/evening-glow",
    component: SubLayout,
    meta: { showSubTop: true },
    redirect: "/evening-glow/evening-glow",
    children: [
      {
        path: "evening-glow",
        component: List,
        props: { category: "evening-glow", subCategory: "이브닝 글로우" }, 
        meta: { showSubTop: true },
      }
    ]
  },
  {
    path: "/perfume",
    component: SubLayout,
    meta: { showSubTop: true },
    redirect: "/perfume/perfume",
    children: [
      {
        path: "perfume",
        component: List,
        props: { category: "PERFUME", subCategory: "퍼퓸" },
        meta: { showSubTop: true },
      },
      {
        path: "perfume-balm",
        component: List,
        props: { category: "PERFUME", subCategory: "퍼퓸 밤" },
        meta: { showSubTop: true },
      },
    ],
  },
  {
    path: "/hand-lip",
    component: SubLayout,
    meta: { showSubTop: true },
    redirect: "/hand-lip/shell-perfume-hand",
    children: [
      {
        path: "shell-perfume-hand",
        component: List,
        props: { category: "HAND&LIP", subCategory: "쉘 퍼퓸 핸드" },
        meta: { showSubTop: true },
      },
      {
        path: "egg-lip-balm",
        component: List,
        props: { category: "HAND&LIP", subCategory: "에그 립밤" },
        meta: { showSubTop: true },
      },
    ],
  },
  {
    path: "/body",
    component: SubLayout,
    meta: { showSubTop: true },
    redirect: "/body/showery-body",
    children: [
      {
        path: "showery-body",
        component: List,
        props: { category: "BODY", subCategory: "샤워리 바디" },
        meta: { showSubTop: true },
      },
      {
        path: "perfumed-hand-body",
        component: List,
        props: { category: "BODY", subCategory: "퍼퓸드 핸드앤바디" },
        meta: { showSubTop: true },
      },
    ],
  },
  {
    path: "/home-fragrance",
    component: SubLayout,
    meta: { showSubTop: true },
    redirect: "/home-fragrance/car-diffuser",
    children: [
      {
        path: "car-diffuser",
        component: List,
        props: { category: "HOME FRAGRANCE", subCategory: "카 디퓨저" },
        meta: { showSubTop: true },
      },
      {
        path: "room-fragrance",
        component: List,
        props: { category: "HOME FRAGRANCE", subCategory: "룸 프래그런스" },
        meta: { showSubTop: true },
      },
      {
        path: "perfume-candle",
        component: List,
        props: { category: "HOME FRAGRANCE", subCategory: "퍼퓸 캔들" },
        meta: { showSubTop: true },
      },
    ],
  },
  {
    path : "/detail/:itemPath",
    component: View,
  }
];

routes.push({
  path: "*",
  redirect: "/",
});

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }; // 항상 최상단으로 이동
  }
});

// 경로 변경 시 Vuex에 path 정보 저장
router.beforeEach((to, from, next) => {
  store.commit("setPath", to);
  const isMainPage = to.path === "/";
  switchStyles(isMainPage ? "./assets/css/main.css" : "./assets/css/sub.css");
  store.commit("setShowSubTop", to.matched.some(record => record.meta.showSubTop));
   // 메인 페이지로 돌아올 때 새로고침
   if (to.path === '/' || to.path === '/#/') {
    // 강제로 새로고침
    if (from.path !== '/') {  // 메인 페이지에서 다른 페이지로 갔다가 돌아올 때만 새로고침
      window.location.reload();
    }
  }
  next();
});

// 스타일 변경 함수
function switchStyles(newHref) {
  let existingLink = document.querySelector(
    "link[href*='main.css'], link[href*='sub.css']"
  );
  if (existingLink) existingLink.remove();
  let newLink = document.createElement("link");
  newLink.rel = "stylesheet";
  newLink.href = newHref;
  document.head.appendChild(newLink);
}

// // 스크립트 변경 함수
// function switchScripts(newSrc) {
//   let existingScript = document.querySelector(
//     "script[src*='main.js'], script[src*='sub.js']"
//   );
//   if (existingScript) existingScript.remove();
//   let newScript = document.createElement("script");
//   newScript.src = newSrc;
//   newScript.type = "module";
//   newScript.defer = true;
//   document.body.appendChild(newScript);
// }

export default router;
