// sub page layout component
import store from "/assets/js/vuex_store_store.js";
export const subTop = {
  template: `
      <div class="sub-top">
        <div class="inner">
          <ul class="category-tab" v-for="(val,key) in $store.state.linkSetData">
            <h3 class="sub-title">{{key}}</h3>
            <li class="tab" 
                v-for="(v,k) in val.menu" 
                :key="k"
                @click="getCatName(k)"
                :class="{on: $store.state.catName === k}" 
                >
              <a href="#">{{k}}</a>
            </li>
          </ul>
        </div>
      </div>
    `,

  methods: {
    getCatName(pm) {
      console.log("선택한 카테고리:", pm);
      store.commit("setListData", pm);
    },
  },
  created() {},
  mounted() {
  },
};

export const SubLayout = {
  props: ["showSubTop"],
  template: `
        <div class="sub-container" id="main">
            <sub-top-comp v-if="$store.state.showSubTop"></sub-top-comp>
            <router-view></router-view>
        </div>
        
    `,
  components: {
    "sub-top-comp": subTop,
  },
};

export const Community = {
  template: `
    <div class="content type2">
      <router-view></router-view>
    </div>
  `,
};
