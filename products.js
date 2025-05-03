async function loadProducts() {
    try {
      const response = await fetch("products.json");
      const products = await response.json();
      renderProducts(products);
    } catch (error) {
      console.error("Failed to load products:", error);
    }
  }
  
  function renderProducts(products) {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = "";
  
    products.forEach(product => {
      const col = document.createElement("div");
      col.classList.add("col");
  
      const card = document.createElement("div");
      card.classList.add("card", "h-100");
  
      const iconWrapper = document.createElement("div");
      iconWrapper.classList.add("text-center", "pt-2");
  
      const iconImg = document.createElement("img");
      iconImg.src = product.icon;
      iconImg.alt = product.altText;
      iconImg.classList.add("card-img-top");
      iconImg.style.width = "50px";
      iconImg.style.margin = "0 auto";
  
      iconWrapper.appendChild(iconImg);
      card.appendChild(iconWrapper);
  
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
  
      const title = document.createElement("h5");
      title.classList.add("card-title");
      title.textContent = product.title.toUpperCase();
  
      const price = document.createElement("p");
      price.classList.add("card-text");
      price.textContent = `$${product.price.toFixed(2)}`;
  
      const stock = document.createElement("p");
      stock.classList.add("card-text");
      stock.textContent = "In stock";
  
      const buttonGroup = document.createElement("div");
      buttonGroup.classList.add("d-flex", "gap-2");
  
      const buyBtn = document.createElement("button");
      buyBtn.classList.add("btn", "btn-primary", "buy-btn", "flex-fill");
      buyBtn.dataset.id = product.id;
      buyBtn.textContent = "Add to Cart";
  
      const viewBtn = document.createElement("a");
      viewBtn.classList.add("btn", "btn-secondary", "flex-fill");
      viewBtn.href = `product${product.id}.html`;
      viewBtn.textContent = "View Details";
  
      buttonGroup.appendChild(buyBtn);
      buttonGroup.appendChild(viewBtn);
  
      cardBody.appendChild(title);
      cardBody.appendChild(price);
      cardBody.appendChild(stock);
      cardBody.appendChild(buttonGroup);
  
      card.appendChild(cardBody);
      col.appendChild(card);
      grid.appendChild(col);
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
  
    document.addEventListener("click", e => {
      if (e.target.classList.contains("buy-btn")) {
        const productId = Number(e.target.dataset.id);
        fetch("products.json")
          .then(res => res.json())
          .then(products => {
            const selected = products.find(p => p.id === productId);
            if (selected) addToCart(selected);
          });
      }
    });
  });
  
  function addToCart(product) {
    const item = { title: product.title, price: product.price };
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.title} added to cart!`);
    updateCartCount();
  }
  
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = cart.length;
    const countSpan = document.getElementById("cartCount");
    if (countSpan) countSpan.textContent = count;
  }
  