// ============================Giỏ hàng====================================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const emptyCart = document.querySelector(".empty-cart");
const cartContent = document.getElementById("cart-content");
const cartList = document.getElementById("cart-list");
const totalPriceEl = document.getElementById("total-price");

// Render giỏ hàng
function renderCart() {
  if (cart.length === 0) {
    emptyCart.style.display = "flex";
    cartContent.style.display = "none";
    return;
  }

  emptyCart.style.display = "none";
  cartContent.style.display = "block";

  cartList.innerHTML = "";

  cart.forEach((item) => {
    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <div class="cart-info">
        <h4>${item.name}</h4>
        <p>${item.price.toLocaleString()}đ</p>
      </div>

      <div class="cart-controls">
        <button onclick="changeQuantity('${item.id}', -1)">-</button>
        <span>${item.quantity}</span>
        <button onclick="changeQuantity('${item.id}', 1)">+</button>
      </div>

      <div class="cart-total">
        ${(item.price * item.quantity).toLocaleString()}đ
      </div>

      <button class="remove-btn" onclick="removeItem('${item.id}')"><i class="fa-solid fa-trash-can"></i></button>
    `;

    cartList.appendChild(div);
  });

  updateTotal();
}

// Tăng giảm số lượng
function changeQuantity(id, amount) {
  cart = cart.map((item) => {
    if (item.id === id) {
      item.quantity += amount;
      if (item.quantity < 1) item.quantity = 1;
    }
    return item;
  });

  saveCart();
  renderCart();
}

// Xóa sản phẩm
function removeItem(id) {
  if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?")) {
    cart = cart.filter((item) => item.id !== id);
    saveCart();
    renderCart();
  }
}

// Tổng tiền
function updateTotal() {
  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  totalPriceEl.innerText = total.toLocaleString();
}

// Lưu
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
renderCart();

// ======================================================================
// Modal form
const openBtns = document.querySelectorAll("#checkout-btn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");

openBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    overlay.classList.add("active");
    modal.classList.add("active");
    // Chặn scroll khi mở modal form
    document.body.style.overflow = "hidden";
  });
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
  modal.classList.remove("active");
  // Mở scroll khi tắt modal form
  document.body.style.overflow = "auto";
});

// Click vào overlay để đóng
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  modal.classList.remove("active");
  // Mở scroll khi tắt modal form
  document.body.style.overflow = "auto";
});

const modalForm = document.getElementById("modal-form");
modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Mua khóa học thành công! Cảm ơn bạn đã mua khóa học tại SkillHub!");
  window.location.href = "./index.html";
});
