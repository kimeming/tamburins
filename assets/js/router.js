// router.js
import linkSetData from '../data/gnb-data.js'
import { Main } from './component/main-comp.js';
import { SubLayout } from './component/sub-comp.js';
import { ProductList } from "./component/list-comp.js";

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
    routes.push({
      path: data.link.path, // 동적 경로 설정
      component: SubLayout, // SubLayout을 기본 레이아웃으로 설정
      props: {
        showSubTop: data.link.path !== "/community", // 커뮤니티 경로일 때만 false
      },
      children: [
        {
          path: "", // 기본 경로로 설정 (이게 기본 페이지가 됨)
          component: ProductList, // 자식 컴포넌트인 ProductList 연결
          props: {
            category: data.menu, // 메뉴 데이터 props로 전달
          },
        },
      ],
    });
  }
});

export const router = new VueRouter({
  mode: "history",
  routes,
});