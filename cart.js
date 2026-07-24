let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartItems = document.getElementById("cartItems");
let total = 0;

function loadCart() {

cartItems.innerHTML = "";
total = 0;

if(cart.length==0){

cartItems.innerHTML="<h2>Your Cart is Empty</h2>";

document.getElementById("totalPrice").innerHTML=0;

return;

}

cart.forEach((item,index)=>{

total += item.price;

cartItems.innerHTML += `

<div class="cart-item">

<div>

<h3>${item.name}</h3>

<p>₹${item.price}</p>

</div>

<button onclick="removeItem(${index})">
❌
</button>

</div>

`;

});

document.getElementById("totalPrice").innerHTML = total;

}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

loadCart();

}

loadCart();
