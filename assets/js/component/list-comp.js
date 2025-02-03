// 제품 디테일페이지 컴포넌트 JS - product_view_comp

import { subTop } from "./sub-comp.js";
import store from "../vuex_store_store.js";

export const List = {
  template: `
  <div class="contents">
      <div class="product-list-area">
        <ul class="product-list-wrap">
          <li class="product-select-box" 
              v-for="(v, k) in $store.state.catList" 
              :key="v.idx"
              @click.prevent="getProductNum(v.idx)">
            <a class="product-view-nav" href="#" alt="제품 상세히보기">
              <section class="product-img-wrap">
                <img :src="v.pImage" :alt="v.pTitle" />
              </section>
              <div class="product-info">
                <h2 class="product-title">{{ v.pTitle }}</h2>
                <em class="product-note">{{ v.pNote }}</em>
                <section>
                  <strong class="product-price">{{ v.pPrice }}</strong>
                  <span class="product-note-count"></span>
                </section>
              </div>
            </a>
          </li>
        </ul>
      </div>
  </div>
  `,
  watch: {
    "$route.params.subCategory": {
      immediate: true,
      handler(newSubCategory) {
        console.log("라우트 변경 감지:", newSubCategory);
        this.$store.commit("setListData", newSubCategory); // Vuex에 전달
      }
    }
  },
  methods: {
    getProductNum(pm) {
      console.log("선택한 제품 ID:", pm);
      this.$store.commit("setViewData", pm);
    }
  }
};