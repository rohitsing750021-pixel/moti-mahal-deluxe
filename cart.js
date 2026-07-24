let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartItems = document.getElementById("cartItems");
let total = 0;

function displayCart(){

cartItems.innerHTML="";

cart.forEach((item,index)=>{

total += item.price;

cartItems.innerHTML += `

<div class="card">

<h3>${item.name}</h3>

<p>₹${item.price}</p>

<button onclick="removeItem(${index})">Remove</button>

</div>

`;

});

document.getElementById("totalPrice").innerText=total;

}

displayCart();

function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

location.reload();

}
