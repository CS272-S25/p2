//  Array of product objects
// Each product has an id, title, price, and image URL


const products = [
    {
      id: 1,
      title: "Blue Hoodie",
      price: 29.99,
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: 2,
      title: "Red T-Shirt",
      price: 14.99,
      image: "https://via.placeholder.com/300x200"
    },
    {
      id: 3,
      title: "Green Hat",
      price: 19.99,
      image: "https://via.placeholder.com/300x200"


    }
  ];
  
  // Renders all products into the product grid on the homepage
  function renderProducts() {
    const grid = document.getElementById("productGrid"); // Selects the container where cards will go
    products.forEach(product => {
      const col = document.createElement("div");
      col.classList.add("col");
      // Set up the HTML structure for each product card
      col.innerHTML = `
        <div class="card h-100">
          <img src="${product.image}" class="card-img-top" alt="${product.title}">
          <div class="card-body">
            <h5 class="card-title">${product.title.toUpperCase()}</h5>
            <p class="card-text">$${product.price.toFixed(2)}</p>
            <p class="card-text">In stock</p>
            <button class="btn btn-primary buy-btn" data-id="${product.id}">Buy now</button>
          </div>
        </div>
      `;
      // Add the product card to the grid
      grid.appendChild(col);
    });
  }
  // Calls the function as soon as the script runs
  renderProducts();
  // Event listener to handle Buy Now button clicks anywhere on the page
    document.addEventListener("click", (e) => {
        // If the clicked element is a Buy Now button...
        if (e.target.classList.contains("buy-btn")) {
            const productId = Number(e.target.dataset.id);
            const selectedProduct = products.find(p => p.id === productId);
            addToCart(selectedProduct); // Adds the products to the cart
         }
       });


   //  Adds a selected product to the cart (localStorage)
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []; // Load current cart or start a new one
    cart.push(product); // Add the selected product
    localStorage.setItem("cart", JSON.stringify(cart)); // Save updated cart to localStorage
    alert(`${product.title} added to cart!`); // Show confirmation
    updateCartCount(); // Update the cart count in the navbar
  }
  
  //  Updates the cart item count in the navbar (Cart (3))
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || []; // Load cart
    const count = cart.length; // Count items
    const countSpan = document.getElementById("cartCount"); // Find the <span> where the count goes
    if (countSpan) {
      countSpan.textContent = count; // Update it
    }
  }