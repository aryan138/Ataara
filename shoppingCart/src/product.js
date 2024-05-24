// Get the product ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
let productDetails = document.getElementById("product-details");

// Find the product data
let product = shopItemsData.find(x => x.id === productId);

// Display product details
if (product) {
    productDetails.innerHTML = `
        <div class="product">
            <img src="${product.img}" alt="${product.name}">
            <div class="product-info">
                <h1>${product.name}</h1>
                <p>${product.desc}</p>
                <h2>Rs. ${product.price}</h2>
                <div class="buttons">
                    <i onclick="decrement('${product.id}')" class="bi bi-dash-lg"></i>
                    <div id="quantity-${product.id}" class="quantity">1</div>
                    <i onclick="increment('${product.id}')" class="bi bi-plus-lg"></i>
                </div>
                <button onclick="addToCart('${product.id}')" class="add-to-cart">Add to Cart</button>
            </div>
        </div>
    `;
}

// Display similar products
let similarProducts = shopItemsData.filter(item => item.id !== productId).slice(0, 4);
let similarProductsHTML = similarProducts.map(similarProduct => `
    <div class="product">
        <img src="${similarProduct.img}" alt="${similarProduct.name}">
        <div class="product-info">
            <h1>${similarProduct.name}</h1>
            <p>Rs. ${similarProduct.price}</p>
            <button onclick="viewProduct('${similarProduct.id}')" class="view-product">View Product</button>
        </div>
    </div>
`).join('');

let similarProductsSection = document.getElementById("similar-products");
similarProductsSection.innerHTML = similarProductsHTML;

// Initialize basket
let basket = JSON.parse(localStorage.getItem("data")) || [];

// Function to add the product to the cart
let addToCart = (id) => {
    let quantityElement = document.getElementById(`quantity-${id}`);
    let quantity = parseInt(quantityElement.textContent);
    let search = basket.find(x => x.id === id);

    if (search === undefined) {
        basket.push({ id: id, item: quantity });
    } else {
        search.item += quantity;
    }

    localStorage.setItem("data", JSON.stringify(basket));
    updateCartIcon();
    window.location.href = "cart.html";
};

// Function to increment quantity
let increment = (id) => {
    let quantityElement = document.getElementById(`quantity-${id}`);
    let quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = quantity + 1;
};

// Function to decrement quantity
let decrement = (id) => {
    let quantityElement = document.getElementById(`quantity-${id}`);
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        quantityElement.textContent = quantity - 1;
    }
};

// Function to update the cart icon
let updateCartIcon = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map(x => x.item).reduce((x, y) => x + y, 0);
};

// Update the cart icon on page load
updateCartIcon();

// Function to view a product
let viewProduct = (productId) => {
    window.location.href = `product.html?id=${productId}`;
};