const products = [
  {
    id: 1,
    title: "Blue Hoodie",
    price: 29.99,
    image: "https://via.placeholder.com/300x200",
    icon: "bluehoodie.jpg",
    altText: "Blue Hoodie"
  },
  {
    id: 2,
    title: "Red T-Shirt",
    price: 14.99,
    image: "https://via.placeholder.com/300x200",
    icon: "redshirt.jpg",
    altText: "Red T-Shirt"
  },
  {
    id: 3,
    title: "Green Hat",
    price: 19.99,
    image: "https://via.placeholder.com/300x200",
    icon: "greenhat.jpg",
    altText: "Green Hat"
  },
  {
    id: 4,
    title: "Red Jacket",
    price: 44.99,
    image: "https://via.placeholder.com/300x200",
    icon: "redjacket.webp",
    altText: "Red Jacket"
  },
  {
    id: 5,
    title: "Black Shirt",
    price: 14.99,
    image: "https://via.placeholder.com/300x200",
    icon: "blackshirt.webp",
    altText: "Black Shirt"
  },
  {
    id: 6,
    title: "Black Shoes",
    price: 34.99,
    image: "https://via.placeholder.com/300x200",
    icon: "blackshoe.jpg",
    altText: "Black Shoe"
  },
  {
    id: 7,
    title: "Black Pants",
    price: 24.99,
    image: "https://via.placeholder.com/300x200",
    icon: "blackpants.webp",
    altText: "Black Pants"
  },
  {
    id: 8,
    title: "Phalanx 20mm CIWS",
    price: 24500999.99,
    image: "https://via.placeholder.com/300x200",
    icon: "CIWS3.jpg",
    altText: "Phalanx 20mm CIWS"
  }
];

function renderProducts() {
  const grid = document.getElementById("productGrid");

  products.forEach(product => {
    const col = document.createElement("div");
    col.classList.add("col");

    const card = document.createElement("div");
    card.classList.add("card", "h-100");

    // Small icon image for each product
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

renderProducts();

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("buy-btn")) {
    const productId = Number(e.target.dataset.id);
    const selectedProduct = products.find(p => p.id === productId);
    addToCart(selectedProduct);
  }
});

function addToCart(product) {
  // Only store the essential details in localStorage
  const productForCart = {
    title: product.title,
    price: product.price
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(productForCart);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.title} added to cart!`);
  updateCartCount();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.length;
  const countSpan = document.getElementById("cartCount");
  if (countSpan) {
    countSpan.textContent = count;
  }
}
