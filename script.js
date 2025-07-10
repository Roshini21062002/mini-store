
  let cartCount = 0;
  let total = 0;
  const cartItems = [];

  const a = document.querySelectorAll(".btn-cart");
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-cart")) {
      const name = e.target.getAttribute("data-name");
      const price = parseFloat(e.target.getAttribute("data-price"));

      cartItems.push({ name, price });
      cartCount++;
      total += price;

      
      document.getElementById("cart-count").textContent = cartCount;

      
alert("Item added to cart! 🛒");
    }
  });

  
let cart = [];

document.querySelectorAll('.btn-cart').forEach(button => {
  button.addEventListener('click', function () {
    const name = this.getAttribute('data-name');
    const price = parseInt(this.getAttribute('data-price'));

    cart.push({ name, price }); 
    updateCart();
  });
});

function updateCart() {
  const cart_I = document.getElementById('cart-items');
  const cart_c = document.getElementById('cart-count');
  const total_P = document.getElementById('total-price');

  cart_I.innerHTML = '';
  let total = 0;

  cart.forEach(function(item) {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between ';
    li.innerHTML =  item.name + " - Rs." + item.price;
    cart_I.appendChild(li);
    total += item.price;
  });

  cart_c.textContent = cart.length;
  total_P.textContent = "Total : Rs."+ total;
}

