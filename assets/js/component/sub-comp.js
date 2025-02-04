// sub page layout component
import store from "/assets/js/vuex_store_store.js";
export const subTop = {
//   template: `
//       <div class="sub-top">
//         <div class="inner">
//           <ul class="category-tab" v-for="(val,key) in $store.state.linkSetData">
//             <h3 class="sub-title">{{key}}</h3>
//             <li class="tab" 
//                 v-for="(v,k) in val.menu" 
//                 :key="k"
//                 :class="{on: $store.state.catName === k}" 
//                 @click="getCatName(k)">
//               <a href="#">{{k}}</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     `,
  created() {
    // 현재 라우트의 subCategory 가져오기
    const subCategory = this.$route.params.subCategory || "";
    // console.log("현재 subCategory:", subCategory);

    // Vuex에 저장
    // store.commit("setListData", subCategory);
  },
//   watch: {
//     // 라우트 변경 시 자동 업데이트
//     "$route.params.subCategory"(newSubCategory) {
//       console.log("라우트 변경 감지:", newSubCategory);
//       store.commit("setListData", newSubCategory);
//     },
//   },
  methods: {
    // getCatName(pm) {
    //   console.log("선택한 카테고리:", pm);
    //   store.commit("setListData", pm);
    // },
  },
};

export const SubLayout = {
  props: ["showSubTop"],
  template: `
        <div class="sub-container" id="main">
            <sub-top-comp v-if="showSubTop"></sub-top-comp>
            <router-view></router-view>
        </div>
        
    `,
  components: {
    "sub-top-comp": subTop, // 상단 컴포넌트
  },
};

export const Community = {
  template: `
    <div class="content type2">
      <router-view></router-view>
    </div>
  `,
}
