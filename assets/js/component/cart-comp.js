// 장바구니 컴포넌트
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
                                            <input type="checkbox" id="selectAll" name="selectAll">
                                            <label for="selectAll">전체 선택</label>
                                        </div>
                                        <button type="button" class="btn-underline">선택 삭제</button>
                                    </div>
                                    <!-- cart-list s -->
                                    <ul class="cart-list">
                                        <li class="item">
                                            <div class="item-info-wrap">
                                                <div class="item-selector">
                                                    <div class="checkbox">
                                                        <input type="checkbox" id="chk1" name="chk1">
                                                    </div>
                                                </div>
                                                <div class="item-info">
                                                    <a href="#" class="item-name">립 부스팅 스파츌라</a>
                                                    <p class="price">₩ 31,000</p>
                                                </div>
                                                <div class="item-action">
                                                    <div class="quantity">
                                                        <button type="button" class="down-btn"><span class="blind">수량감소</span></button>
                                                        <input type="text" name="quantity" id="quantity" value="1">
                                                        <button type="button" class="up-btn"><span class="blind">수량증가</span></button>
                                                    </div>
                                                    <button type="button" class="del-btn"><span class="blind">수량전체삭제</span></button>
                                                </div>
                                            </div>
                                            <div class="item-thumbnail">
                                                <a href="#">
                                                    <img src="./assets/img/img-test01.jpg" alt="test">
                                                </a>
                                            </div>
                                        </li>
                                        <li class="item">
                                            <div class="item-info-wrap">
                                                <div class="item-selector">
                                                    <div class="checkbox">
                                                        <input type="checkbox" id="chk1" name="chk1">
                                                    </div>
                                                </div>
                                                <div class="item-info">
                                                    <a href="#" class="item-name">립 부스팅 스파츌라</a>
                                                    <p class="price">₩ 31,000</p>
                                                </div>
                                                <div class="item-action">
                                                    <div class="quantity">
                                                        <button type="button" class="down-btn"><span class="blind">수량감소</span></button>
                                                        <input type="text" name="quantity" id="quantity" value="1">
                                                        <button type="button" class="up-btn"><span class="blind">수량증가</span></button>
                                                    </div>
                                                    <button type="button" class="del-btn"><span class="blind">수량전체삭제</span></button>
                                                </div>
                                            </div>
                                            <div class="item-thumbnail">
                                                <a href="#">
                                                    <img src="./assets/img/img-test01.jpg" alt="test">
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                    <!-- cart-list e -->
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
                                        <span class="price">₩ 31,000</span>
                                    </li>
                                    <li>
                                        <p>배송비</p>
                                        <span class="shipping">₩ 3,000</span>
                                    </li>
                                    <li>
                                        <p>총 할인 금액</p>
                                        <span class="discount">₩ 0</span>
                                    </li>
                                </ul>
                                <div class="total-price">
                                    <p>결제 예상 금액</p>
                                    <span class="total">₩ 34,000</span>
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
  mounted() {
    
  },
};
