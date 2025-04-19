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
  
  function renderProducts() {
    const grid = document.getElementById("productGrid");
    products.forEach(product => {
      const col = document.createElement("div");
      col.classList.add("col");
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
      grid.appendChild(col);
    });
  }
  
  renderProducts();
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("buy-btn")) {
            const productId = Number(e.target.dataset.id);
            const selectedProduct = products.find(p => p.id === productId);
            addToCart(selectedProduct);
         }
       });


   function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.title} added to cart!`);
   }
    }
  