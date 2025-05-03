function loadCart() {
 const cart = JSON.parse(localStorage.getItem("cart")) || [];
 const tbody = document.querySelector("#cartTable tbody");

 tbody.innerHTML = "";
 
 
 cart.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${item.title}</td>
    <td>$${item.price.toFixed(2)}</td>
      <td><button class="btn btn-danger btn-sm remove-btn" data-index="${index}">Remove</button></td>
    `;
    tbody.appendChild(row);
  });

  
  document.querySelectorAll(".remove-btn").forEach(button => {
    button.addEventListener("click", function () {
      const index = parseInt(this.dataset.index);
      cart.splice(index, 1); 
      localStorage.setItem("cart", JSON.stringify(cart)); 
      location.reload(); 
    });
  });

  
  let total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById("totalPrice").textContent = `Total: $${total.toFixed(2)}`;


  const clearBtn = document.getElementById("clearCartBtn");
  clearBtn.addEventListener("click", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Cart is already empty!");
        return;
    }


    if (confirm("Are you sure you want to clear your cart?")) {
        localStorage.removeItem("cart");
        location.reload();
    
    }
  });

  
}

const buyBtn = document.getElementById("buyBtn");
buyBtn.addEventListener("click", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  if (confirm("Are you sure you want to complete your purchase?")) {
    localStorage.removeItem("cart");
    document.getElementById("cartCount").textContent = "0";
    document.getElementById("totalPrice").textContent = "Total: $0.00";
    document.querySelector("#cartTable tbody").innerHTML = "";
    document.getElementById("purchaseMsg").style.display = "block";
  }
});



function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = cart.length;
    const countSpan = document.getElementById("cartCount");
    if (countSpan) {
        countSpan.textContent = count;
    }
}

  


  


 

window.addEventListener("DOMContentLoaded", () => {
    loadCart();
    updateCartCount();
});