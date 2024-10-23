// Cart functionality
let cart = [];
const cartContainer = document.createElement('div');
cartContainer.classList.add('cart');
cartContainer.innerHTML = `
    <h3>Your Cart</h3>
    <div class="cart-items"></div>
    <p class="cart-total">Total: $0.00</p>
    <button class="btn checkout">Checkout</button>
`;
document.body.appendChild(cartContainer);

const spices = [
    { name: 'Turmeric', price: 2.5 },
    { name: 'Cinnamon', price: 3.0 },
    { name: 'Chili Powder', price: 1.8 },
    { name: 'Cumin', price: 2.0 },
    { name: 'Black Pepper', price: 4.0 },
    { name: 'Cardamom', price: 5.0 }
];

const spiceItems = document.querySelectorAll('.spice-item img');
const cartItemsContainer = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');

// Add item to cart on image click
spiceItems.forEach((img, index) => {
    img.addEventListener('click', () => {
        addToCart(spices[index]);
    });
});

function addToCart(spice) {
    cart.push(spice);
    updateCart();
}

function updateCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.name}</p>
            <p>$${item.price.toFixed(2)}</p>
            <button class="btn remove" data-index="${index}">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price;
    });
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;

    // Attach event listener to remove buttons
    const removeButtons = document.querySelectorAll('.remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const indexToRemove = parseInt(e.target.getAttribute('data-index'));
            removeFromCart(indexToRemove);
        });
    });
}

function removeFromCart(index) {
    cart.splice(index, 1); // Remove the item from the cart array
    updateCart(); // Update the cart display
}
