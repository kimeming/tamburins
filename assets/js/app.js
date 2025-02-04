import { Header, Footer } from '/assets/js/component/layout-comp.js';
import router from '/assets/js/router.js';
import store from '/assets/js/vuex_store_store.js'

new Vue({
  el: '#app',
  components: {
    'header-comp': Header,
    'footer-comp': Footer,
  },
  router,
  store,
});