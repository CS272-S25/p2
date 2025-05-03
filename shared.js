// shared.js

document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCountSpan = document.getElementById("cartCount");
  
    if (cartCountSpan) {
      cartCountSpan.textContent = cart.length;
    }
  });
  