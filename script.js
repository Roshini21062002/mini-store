let cart = [];

function updateCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartCountDisplay = document.getElementById('cart-count');
  const totalPriceDisplay = document.getElementById('total-price');

  cartItemsContainer.innerHTML = '';
  let total = 0;

  cart.forEach(function(item) {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between';
    li.textContent = item.name + " - Rs." + item.price;
    cartItemsContainer.appendChild(li);
    total += item.price;
  });

  cartCountDisplay.textContent = cart.length;
  totalPriceDisplay.textContent = "Total : Rs." + total;
}


document.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-cart')) {
    const name = e.target.getAttribute('data-name');
    const price = parseFloat(e.target.getAttribute('data-price'));

    cart.push({ name, price });
    updateCart();
    alert("Item added to cart! 🛒");

    
    const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    cartModal.show();
  }
});


document.getElementById('clear-cart').addEventListener('click', function () {
  cart = [];
  updateCart();
  alert("Cart cleared!");
});
