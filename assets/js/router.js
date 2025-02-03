// router.js
import linkSetData from '/assets/data/gnb-data.js'
import { Main } from '/assets/js/component/main-comp.js';
import { SubLayout } from '/assets/js/component/sub-comp.js';
import { List } from "/assets/js/component/list-comp.js";

const routes = [
  {
    path: "/",
    component: Main, // 메인 컴포넌트 로드
  },
  {
    path: "/error",
    beforeEnter() {
      window.location.href = "/error.html"; // 에러 페이지로 리다이렉트
    },
  },
  {
    path: "*",
    redirect: "/", // 잘못된 경로는 메인 페이지로 리다이렉트
  },
];

// linkSetData 기반으로 동적 라우트 생성
Object.keys(linkSetData).forEach((key) => {
  const data = linkSetData[key];

  if (data.link && data.link.path) {
    const path = data.link.path;

    routes.push({
      path: path, // 동적 경로 설정
      component: SubLayout, // SubLayout을 기본 레이아웃으로 설정
      props: { 
        showSubTop: path !== "/community", // 커뮤니티 경로일 때만 false
      },
      children: [
        {
          path: ":subCategory?", // 동적으로 서브카테고리도 받기
          component: List,
          props: (route) => ({
            category: data.menu, // 메뉴 데이터 props로 전달
            subCategory: route.params.subCategory, // 서브카테고리 파라미터 추가
          }),
        },
      ],
    });
  }
});

export const router = new VueRouter({
  mode: "history",
  routes,
});