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
              @click.prevent="getProductNum(v.idx)"
              >
            <router-link :to="'/' + currentCategory + '/' + currentSubCategory + '/' + v.idx">
              <section class="product-img-wrap">
                <img :src="v.pImage" :alt="v.pTitle" />
                <button class="add-to-cart-btn">
                Add To Cart
                </button>
                </section>
              <div class="product-info">
                <h2 class="product-title">{{ v.pTitle }}</h2>
                <em class="product-note">{{ v.pNote }}</em>
                <section>
                  <strong class="product-price">{{ v.pPrice }}</strong>
                  <span class="product-note-count"></span>
                </section>
              </div>
          </router-link>
          </li>
        </ul>
      </div>
  </div>
  `,

  methods: {
    getProductNum(pm) {
      console.log("선택한 제품 ID:", pm);
      this.$store.commit("setViewData", pm);
    }
    
  },
  computed: {
    currentCategory() {
      return this.$store.state.currentCategory;  // currentCategory 값
    },
    currentSubCategory() {
      return this.$store.state.currentSubCategory;  // currentSubCategory 값
    }
  },
  mounted(){
    $('head').append(`
      <link rel="stylesheet" type="text/css" href="/assets/css/product-list.css" />
    `);
  },
  created(){
    this.$store.commit('setPath', this.$route);
  },
};