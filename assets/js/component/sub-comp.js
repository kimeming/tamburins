// sub page layout component
import store from "../vuex_store_store.js";
export const subTop = {
    template: `
        <div class="sub-top">
         <div class="inner" >
         <ul class="category-tab"  v-for="(val,key) in $store.state.linkSetData">
         <h3 class="sub-title">{{key}}</h3>
            <li class="tab" :class="{on: $store.state.catName === k }" @click="getCatName(k)"
            v-for="(v,k) in val.menu">
                <a href="#">{{k}}</a>
            </li>
            </ul>

        </div>
    </div>
    `,
    data() {
        return {};
      },
      methods: {
        getCatName(pm) {
            // console.log("가져온카테고리", pm);
            // 파라미터 스토어로 보내기
            store.commit("setData", pm);
          },
      },
}

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