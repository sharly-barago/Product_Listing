const products = [
    {
        id: 1,
        title: "White T-Shirt - Cat",
        price: 630,
        // colors: ["#ffffff", "#000000", "#ff0000"],
        sizes: ["S", "M", "L", "XL"],
        images: [
            "images/Shirt_1.png"
        ]
    },
    {
        id: 2,
        title: "White T-Shirt - Illust",
        price: 630,
        // colors: ["#0000ff", "#000000"],
        sizes: ["28", "30", "32", "34"],
        images: [
            "images/Shirt_2.png"
        ]
    },
    {
        id: 3,
        title: "Lion Of Cebu T-Shirt",
        price: 700,
        // colors: ["#0000ff", "#000000"],
        sizes: ["S", "M", "L", "XL"],
        images: [
           "images/Shirt_3.png"
        ]
    },
    {
        id: 4,
        title: "Planet Over Profit T-Shirt",
        price: 700,
        // colors: ["#0000ff", "#000000"],
        sizes: ["28", "30", "32", "34"],
        images: [
            "images/Shirt_4.png"
        ]
    },
];

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'col-6 col-sm-6 col-md-4 col-lg-3';
    card.innerHTML = `
        <div class="product-card">
            <div class="product-image-container">
                <img src="${product.images[0]}" alt="${product.title}" class="product-image">
                <div class="product-actions">
                    <button class="btn btn-sm btn-secondary quick-view">Quick View</button>
                    <button class="btn btn-sm btn-outline-secondary wishlist"><i class="fas fa-heart"></i></button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">₱${product.price.toFixed(2)}</p>
            </div>
            <div class="product-overlay">
                <h3 class="product-title">${product.title}</h3>
                <button type="button" class="btn btn-outline-dark my-4 add-to-cart">Add to Cart</button>
                <div class="size-options">
                    ${product.sizes.map((size, index) => `
                        <div class="size-option ${index === 0 ? 'active' : ''}" 
                            data-size="${size}">
                            ${size}
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    const productCard = card.querySelector('.product-card');
    const sizeOptions = card.querySelectorAll('.size-option');
    const addToCartButton = card.querySelector('.add-to-cart');

    // Add click event for the entire product card
    productCard.addEventListener('click', (e) => {
        if (!e.target.closest('.size-options') && !e.target.closest('.add-to-cart')) {
            window.location.href = `product.html?id=${product.id}`;
        }
    });

    sizeOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event bubbling
            sizeOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        });
    });

    addToCartButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event bubbling
        // Add to cart functionality here
        console.log('Add to cart clicked for product:', product.id);
    });

    return card;
}

function renderProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productCard = createProductCard(product);
        productList.appendChild(productCard);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    renderProducts();

    // Sidebar toggle functionality
    const sidebar = document.getElementById('sidebar');
    const closeSidebarButton = document.getElementById('closeSidebar');

    if (closeSidebarButton) {
        closeSidebarButton.addEventListener('click', function() {
            sidebar.classList.remove('show');
        });
    }
});