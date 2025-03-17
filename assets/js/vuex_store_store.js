// 뷰엑스스토어 JS - 전역뷰데이터 저장소 vuex_store_store

// 데이터 불러오기
import linkSetData from "../data/gnb-data.js";
import productList from "../data/product-list.js";
import productDetail from "../data/product-detail.js";

// [뷰엑스 스토어 인스턴스 생성]
export default new Vuex.Store({
  // (1) 데이터 셋팅 구역 : state
  state: {
    // GNB 데이터
    linkSetData,
    // 제품 리스트 데이터
    productList,
    // 제품 디테일
    productDetail,
    // 카테고리 데이터
    catName: "",
    catList: {},
    // 상품 상세 데이터
    productView: {},
    // 현재 path 데이터
    currentCategory: "",
    currentSubCategory: "",
    // sub-top 노출 여부
    showSubTop: false,
  },

  // (2) 데이터 변경 구역 : mutations
  mutations: {
    setListData(s, subKey) {
      s.catName = subKey;
      s.catList = s.productList.filter(v => v.subCat === subKey);
      console.log("필터링된 카테고리 리스트:", s.catList);   
    },
    setViewData(s, pm) {
      s.productView = s.productList.find(v => v.idx == pm);
      console.log("선택된 제품:", s.productView);
    },
    setPath(s, route) {
      s.currentCategory = route.params.category || ""; // 카테고리 저장
      s.currentSubCategory = route.params.subCategory || ""; // 서브 카테고리 저장
    },

    setCategory(s, category) {
      s.currentCategory = category;  // 카테고리 저장
    },
    setPath(s, route) {
      const paths = route.path.split("/").filter(Boolean); // 빈 값 제거
      s.currentCategory = paths[0] || ""; // 첫 번째가 카테고리
      s.currentSubCategory = paths[1] || ""; // 두 번째가 서브 카테고리
    },
    setShowSubTop(state, value) {
      state.showSubTop = value;
    },
  },

  // (3) 비동기처리 메서드구역 : actions
  actions: {},
});
