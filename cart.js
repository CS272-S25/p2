function loadCart() {
 const cart = JSON.parse(localStorage.getItem("cart")) || [];
 const tbody = document.querySelector("#cartTable tbody");


 cart.forEach(item => {
   const row = document.createElement("tr")
   row.innerHTML = `
     <td>${item.title}</td>
     <td>$${item.price.toFixed(2)}</td>
     <td><button class="btn btn-danger btn-sm">Remove</button></td>
    `;
    tbody.appendChild(row);
  });
}

window.addEventListener("DOMContentLoaded", loadCart);