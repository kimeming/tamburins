import { Header, Footer } from './component/layout-comp.js';
import router from '../js/router.js';
import store from '../js/vuex_store_store.js'

new Vue({
  el: '#app',
  components: {
    'header-comp': Header,
    'footer-comp': Footer,
  },
  router,
  store,
});