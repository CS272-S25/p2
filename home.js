function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cartCount").textContent = cart.length;
  }
  
  document.addEventListener("DOMContentLoaded", updateCartCount);
  