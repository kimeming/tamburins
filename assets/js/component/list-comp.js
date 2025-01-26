// 제품 디테일페이지 컴포넌트 JS - list-comp.js
export const ProductList = {
  template: `
    <!-- contents s -->
    <div class="contents">
      <div class="product-list-area">
        <ul class="product-list-wrap">
          <li class="product-select-box" v-for="(v,k) in $store.state.catList" :key="k.idxN">
            <a class="product-view-nav" href="./product-view-hm.html" alt="제품 상세히보기">
            <section class="product-img-wrap">
              <img :src="v.pImage" :alt="v.pTitle" />
            </section>
            <div class="product-info" >
              <h2 class="product-title">{{v.pTitle}}</h2>
              <em class="product-note">{{v.pNote}}</em>
              <section>
                <strong class="product-price">{{v.pPrice}}</strong>
                <span class="product-note-count"></span>
              </section>
            </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- contents e -->
    `,
  data() {
    return {};
  },
};
