function loadCart() {
 const cart = JSON.parse(localStorage.getItem("cart")) || [];
 const tbody = document.querySelector("#cartTable tbody");

 // Clears previous rows in case of reload 
 tbody.innerHTML = "";
 
 
 // Loops through cart items and renders table rows
 cart.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${item.title}</td>
    <td>$${item.price.toFixed(2)}</td>
      <td><button class="btn btn-danger btn-sm remove-btn" data-index="${index}">Remove</button></td>
    `;
    tbody.appendChild(row);
  });

  
  // Adds remove button functionality
  document.querySelectorAll(".remove-btn").forEach(button => {
    button.addEventListener("click", function () {
      const index = parseInt(this.dataset.index);
      cart.splice(index, 1); // removes 1 item at this index
      localStorage.setItem("cart", JSON.stringify(cart)); // Updates storage
      location.reload(); // reloads the page to update the UI
    });
  });

  
  // calculates total
  let total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById("totalPrice").textContent = `Total: $${total.toFixed(2)}`;


  // Clear cart button functionality
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


// Updates the cart counter whenever an item is added
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = cart.length;
    const countSpan = document.getElementById("cartCount");
    if (countSpan) {
        countSpan.textContent = count;
    }
}

  


  


 

// Updates the cart and reloads it anytime an item is added
window.addEventListener("DOMContentLoaded", () => {
    loadCart();
    updateCartCount();
});