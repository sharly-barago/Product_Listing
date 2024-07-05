const products = [
    {
        id: 1,
        title: "Classic T-Shirt",
        price: 19.99,
        colors: ["#ffffff", "#000000", "#ff0000"],
        sizes: ["S", "M", "L", "XL"],
        images: [
            "images/shirt_white.png",
            "images/shirt_black.webp",
            "images/shirt_red.png"
        ]
    },
    {
        id: 2,
        title: "Slim Fit Jeans",
        price: 49.99,
        colors: ["#0000ff", "#000000"],
        sizes: ["28", "30", "32", "34"],
        images: [
            "images/jeans.webp",
            "images/jeans_black.webp"
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
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
            </div>
            <div class="product-overlay">
                <div class="color-options">
                    ${product.colors.map((color, index) => `
                        <div class="color-option ${index === 0 ? 'active' : ''}" 
                             style="background-color: ${color};" 
                             data-color-index="${index}">
                        </div>
                    `).join('')}
                </div>
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

    const colorOptions = card.querySelectorAll('.color-option');
    const sizeOptions = card.querySelectorAll('.size-option');
    const productImage = card.querySelector('.product-image');

    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            colorOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            const colorIndex = option.getAttribute('data-color-index');
            productImage.src = product.images[colorIndex];
        });
    });

    sizeOptions.forEach(option => {
        option.addEventListener('click', () => {
            sizeOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        });
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

document.addEventListener('DOMContentLoaded', renderProducts);