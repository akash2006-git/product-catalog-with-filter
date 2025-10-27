
const products = [
  { id: 1, name: "Smartphone", category: "electronics", price: "$499", image: "https://via.placeholder.com/250x180?text=Smartphone" },
  { id: 2, name: "Laptop", category: "electronics", price: "$999", image: "https://via.placeholder.com/250x180?text=Laptop" },
  { id: 3, name: "T-Shirt", category: "fashion", price: "$25", image: "https://via.placeholder.com/250x180?text=T-Shirt" },
  { id: 4, name: "Sofa", category: "home", price: "$350", image: "https://via.placeholder.com/250x180?text=Sofa" },
  { id: 5, name: "Headphones", category: "electronics", price: "$120", image: "https://via.placeholder.com/250x180?text=Headphones" },
  { id: 6, name: "Jacket", category: "fashion", price: "$75", image: "https://via.placeholder.com/250x180?text=Jacket" },
  { id: 7, name: "Table Lamp", category: "home", price: "$40", image: "https://via.placeholder.com/250x180?text=Table+Lamp" },
  { id: 8, name: "Shoes", category: "fashion", price: "$60", image: "https://via.placeholder.com/250x180?text=Shoes" }
];

const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

function displayProducts(filteredProducts) {
  productList.innerHTML = "";
  filteredProducts.forEach(p => {
    productList.innerHTML += `
      <div class="product-card">
        <img src="${p.image}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p class="price">${p.price}</p>
        <p>${p.category}</p>
      </div>
    `;
  });
}

displayProducts(products);

// Filter by category
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    btn.classList.add("active");
    const category = btn.getAttribute("data-category");
    const filtered = category === "all" ? products : products.filter(p => p.category === category);
    displayProducts(filtered);
  });
});

// Search filter
searchInput.addEventListener("input", (e) => {
  const text = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(text));
  displayProducts(filtered);
});
