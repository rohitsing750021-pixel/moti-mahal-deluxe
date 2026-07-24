document
.getElementById("checkoutForm")
.addEventListener("submit",function(e){

e.preventDefault();

let name=this.elements[0].value;

let phone=this.elements[1].value;

let address=this.elements[2].value;

let cart=JSON.parse(localStorage.getItem("cart"))||[];

let order="🍽️ *New Order*%0A%0A";

cart.forEach(item=>{

order+=`${item.name} - ₹${item.price}%0A`;

});

order+=`%0A👤 Name: ${name}`;

order+=`%0A📞 Phone: ${phone}`;

order+=`%0A🏠 Address: ${address}`;

window.open("https://wa.me/917500216856?text="+order);

});
