
let cart = document.getElementById("cart");
let count = document.getElementById('count');
let countes = 1;

function addtocart(e) {
  cart.innerHTML += `
  <div class="card">
  ${e.parentNode.innerHTML}
  </div>
  `
  
  count.innerHTML = countes++;
  
  console.log(countes)
}
