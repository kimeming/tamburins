import linkSetData from '/assets/data/gnb-data.js';
import productList from '/assets/data/product-list.js';
import { Main } from '/assets/js/component/main-comp.js';
import { SubLayout } from '/assets/js/component/sub-comp.js';
import { List } from "/assets/js/component/list-comp.js";
import { View } from "/assets/js/component/view-comp.js";
import { Community } from "/assets/js/component/sub-comp.js";
import store from "/assets/js/vuex_store_store.js"

const routes = [
  {
    path: "/",
    component: Main, // 메인 컴포넌트 로드
  },
  {
    path: "/error",
    redirect: "/error.html",
  },
  {
    path: "/:category/:subCategory", // category와 subCategory를 파라미터로 사용
    component: SubLayout,
    props: (route) => ({
      showSubTop: route.path !== "/community", // 경로가 community가 아니면 showSubTop을 true로 설정
    }),
    children: [
      {
        path: "", // 기본적으로 List 컴포넌트 표시
        component: List,
        props: (route) => ({
          category: route.params.category,  // category 값을 props로 전달
          subCategory: route.params.subCategory, // subCategory 값을 props로 전달
        }),
      },
      {
        path: ":itemPath", // 특정 아이템 상세 페이지
        component: View,
        props: (route) => ({
          itemPath: route.params.itemPath,
        }),
      },
    ],
  },
];

// linkSetData 기반으로 동적 라우트 생성
Object.keys(linkSetData).forEach((key) => {
  const data = linkSetData[key];

  if (data.link && data.link.path) {
    const path = data.link.path;

    let childRoute;
    
    if (path === "/community") {
      childRoute = {
        path: ":subCategory?",
        component: Community,
      };
    } else {
      childRoute = {
        path: ":subCategory",
        component: SubLayout, // subCategory의 기본 레이아웃
        props: (route) => {
          // category를 data.menu에서 가져와서 Vuex에 저장하기
          store.commit('setCategory', data.menu);
          return {
            showSubTop: route.path !== "/community",
          };
        },
        children: [
          {
            path: "", // 기본적으로 List 컴포넌트 표시
            component: List,
            props: (route) => ({
              category: data.menu,
              subCategory: route.params.subCategory,
            }),
          },
          {
            path: ":itemPath", // 특정 아이템 상세 페이지
            component: View,
            props: (route) => ({
              itemPath: route.params.itemPath,
            }),
          },
        ],
      };
    }

    routes.push({
      path: path,
      component: SubLayout,
      props: (route) => ({
        showSubTop: route.path !== "/community",
      }),
      children: [childRoute],
    });
  }
});

// 모든 잘못된 경로는 메인으로 리디렉트 (라우트 충돌 방지)
routes.push({
  path: "*",
  redirect: "/",
});

const router = new VueRouter({
  mode: "history",
  routes,
});

// 네비게이션 가드를 사용하여 경로 변경 시 Vuex에 저장
router.beforeEach((to, from, next) => {
  // Vuex에 path 정보를 저장
  store.commit('setPath', to);  // to는 현재 라우트 정보
  
  next();  // 네비게이션 진행
});

export default router;
