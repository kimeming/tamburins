document.addEventListener("DOMContentLoaded", function () {
  // 버튼 클릭 시 localStorage 저장
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  document.querySelectorAll(".add-to-cart-btn").forEach((button, index) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // 링크 이동 방지

      const product = {
        idx: index,
        title: event.target
          .closest(".product-select-box")
          .querySelector(".product-title").innerText,
        price: event.target
          .closest(".product-select-box")
          .querySelector(".product-price").innerText,
        image: event.target.closest(".product-select-box").querySelector("img")
          .src,
        quantity: 1,
      };

      // 같은 상품이 있는지 확인
      const existingProduct = cart.find((item) => item.idx === product.idx);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.push(product);
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartUI(); // 장바구니 UI 업데이트
    });
  });

  updateCartUI();

  // localStorage에서 데이터 불러와 장바구니 UI 업데이트
  function updateCartUI() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartList = document.querySelector(".cart-list");

    if (!cartList) return; // 장바구니가 없는 페이지에서 실행 방지

    cartList.innerHTML = ""; // 기존 내용 초기화

    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.classList.add("item");
      li.innerHTML = `
            <div class="item-info-wrap">
                <div class="item-selector">
                    <div class="checkbox">
                        <input type="checkbox" id="chk${index}" name="chk${index}">
                    </div>
                </div>
                <div class="item-info">
                    <a href="#" class="item-name">${item.title}</a>
                    <p class="price">${item.price}</p>
                </div>
                <div class="item-action">
                    <div class="quantity">
                        <button type="button" class="down-btn" onclick="changeQuantity(${item.idx}, -1)">-</button>
                        <input type="text" name="quantity" value="${item.quantity}" readonly>
                        <button type="button" class="up-btn" onclick="changeQuantity(${item.idx}, 1)">+</button>
                    </div>
                    <button type="button" class="del-btn" onclick="removeFromCart(${item.idx})">X</button>
                </div>
            </div>
            <div class="item-thumbnail">
                <img src="${item.image}" alt="${item.title}">
            </div>
        `;

      cartList.appendChild(li);
    });

    updateTotalPrice();
  }

  // 수량 조절 기능
  function changeQuantity(idx, amount) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product = cart.find((item) => item.idx === idx);

    if (product) {
      product.quantity += amount;
      if (product.quantity <= 0) {
        cart = cart.filter((item) => item.idx !== idx); // 수량 0이면 삭제
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartUI();
    }
  }

  // 개별/전체 삭제 기능
  function removeFromCart(idx) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter((item) => item.idx !== idx);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
  }

  document
    .querySelector(".btn-underline")
    .addEventListener("click", function () {
      localStorage.removeItem("cart");
      updateCartUI();
    });

  // 총 가격 업데이트
  function updateTotalPrice() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalPrice = 0;

    cart.forEach((item) => {
      const price = parseInt(item.price.replace(/[^0-9]/g, ""), 10);
      totalPrice += price * item.quantity;
    });

    document.querySelector(
      ".total"
    ).innerText = `₩ ${totalPrice.toLocaleString()}`;
  }
});
