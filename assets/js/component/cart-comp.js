export const CartComp = {
  template: `
      <!-- contents s -->
      <div class="contents type2">
          <!-- inner-cont s -->
          <div class="inner-cont wide">
              <h3 class="sub-title">CART</h3>
              <!-- cart-wrap s -->
              <div class="cart-wrap">
                  <div class="cart-box left">
                      <form action="cart.php">
                          <fieldset>
                              <legend class="blind">장바구니 수량 폼</legend>
                              <div class="product-head">
                                  <div class="checkbox">
                                      <input type="checkbox" id="selectAll" v-model="selectAll" @change="toggleSelectAll">
                                      <label for="selectAll">전체 선택</label>
                                  </div>
                                  <button type="button" class="btn-underline">선택 삭제</button>
                              </div>
                              <!-- cart-list s -->
                             <ul class="cart-list" v-if="cartItems.length > 0">
                                <li class="item" v-for="(item, index) in cartItems" :key="item.id">
                                    <div class="item-info-wrap">
                                        <div class="item-selector">
                                            <div class="checkbox">
                                                <input type="checkbox" id="chk1" name="chk1">
                                            </div>
                                        </div>
                                        <div class="item-info">
                                            <p class="item-name">{{ item.name }}</p>
                                            <p class="price">{{ item.price.toLocaleString() }}</p>
                                        </div>
                                        <div class="item-action">
                                            <div class="quantity">
                                                <button type="button" class="down-btn" @click="decreaseQuantity(index)">
                                                    <span class="blind">수량감소</span>
                                                </button>
                                                <input type="text" v-model.number="item.quantity">
                                                <button type="button" class="up-btn" @click="increaseQuantity(index)">
                                                    <span class="blind">수량증가</span>
                                                </button>
                                            </div>
                                            <button type="button" class="del-btn" @click="removeItem(index)">
                                                <span class="blind">수량전체삭제</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="item-thumbnail">
                                        <a href="#">
                                            <img :src="item.image" :alt="item.name">
                                        </a>
                                    </div>
                                </li>
                                </ul>
                                <!-- 장바구니에 담긴 아이템이 없을 때 출력 -->
                                <p v-else class="empty-cart">장바구니가 비어 있습니다.</p>
                          </fieldset>
                      </form>
                  </div>
                  <div class="cart-box right">
                      <div class="inner">
                          <div class="noti-box">
                              <p class="noti">30,000원 이상 구매 시 무료 배송</p>
                              <a href="#" title="뒤로가기" class="link-btn btn-round">계속 쇼핑하기</a>
                          </div>
                          <ul class="price-detail">
                              <li>
                                  <p>총 상품 금액</p>
                                  <span class="price">₩ {{ totalPrice.toLocaleString() }}</span>
                              </li>
                              <li>
                                  <p>배송비</p>
                                  <span class="shipping">₩ {{ shippingCost.toLocaleString() }}</span>
                              </li>
                              <li>
                                  <p>총 할인 금액</p>
                                  <span class="discount">₩ 0</span>
                              </li>
                          </ul>
                          <div class="total-price">
                              <p>결제 예상 금액</p>
                              <span class="total">₩ {{ finalPrice.toLocaleString() }}</span>
                          </div>
                          <div class="btn-wrap">
                              <button class="btn-square bg-gray">선택 주문</button>
                              <button class="btn-square">전체 주문</button>
                          </div>
                      </div>
                  </div>
              </div>
              <!-- cart-wrap e -->
          </div>
          <!-- inner-cont e -->
      </div>
      <!-- contents e -->
    `,
  data() {
    return {
      cartItems: [],
      selectAll: false, // 전체 선택 상태
    };
  },
  mounted() {
    this.loadCart();
  },
  methods: {
    loadCart() {
      // localStorage에서 장바구니 데이터 불러오기
      this.cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  
      // 가격에서 '₩' 기호를 제거하고 숫자로 변환
      this.cartItems.forEach((item) => {
        item.price = parseFloat(item.price.replace(/[^\d.-]/g, "")); // ₩을 제거하고 숫자만 남김
      });
    },
    saveCart() {
      // 장바구니를 로컬스토리지에 저장할 때, price 값에 ₩을 붙여서 저장
      this.cartItems.forEach((item) => {
        item.price = `₩ ${item.price.toLocaleString()}`; // 숫자를 ₩ 기호가 포함된 문자열로 변환
      });
      localStorage.setItem("cart", JSON.stringify(this.cartItems));
    },
    toggleSelectAll() {
      this.cartItems.forEach((item) => (item.selected = this.selectAll));
      this.saveCart(); // 선택 상태를 저장
    },
    removeItem(index) {
      // 아이템 삭제
      this.cartItems.splice(index, 1);
      this.saveCart(); // 로컬스토리지 업데이트
    },
    increaseQuantity(index) {
      this.cartItems[index].quantity++;
      this.saveCart(); // 수량 변경 후 로컬스토리지 업데이트
    },
    decreaseQuantity(index) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--;
        this.saveCart(); // 수량 변경 후 로컬스토리지 업데이트
      }
    },
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    shippingCost() {
      return this.totalPrice >= 30000 ? 0 : 3000;
    },
    finalPrice() {
      return this.totalPrice + this.shippingCost;
    },
  },
};
