let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;

  let cartItems = document.getElementById("cartItems");
  let li = document.createElement("li");
  li.innerText = product + " - ₹" + price;
  cartItems.appendChild(li);

  document.getElementById("total").innerText = total;
}

function payNow() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  // Payment Gateway Simulation
  alert("Payment Successful!\nOrder Placed.");

  // Reset cart
  cart = [];
  total = 0;
  document.getElementById("cartItems").innerHTML = "";
  document.getElementById("total").innerText = total;
}
