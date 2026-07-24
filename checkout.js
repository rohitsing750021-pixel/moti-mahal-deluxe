document.getElementById("checkoutForm")
.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;

let phone=document.getElementById("phone").value;

let address=document.getElementById("address").value;

let cart=JSON.parse(localStorage.getItem("cart"))||[];

let message="🍽️ Moti Mahal Deluxe Order\n\n";

cart.forEach(item=>{

message+=`${item.name} - ₹${item.price}\n`;

});

let total=0;

cart.forEach(item=>{

total+=item.price;

});

message+="\nTotal : ₹"+total;

message+="\n\nName : "+name;

message+="\nPhone : "+phone;

message+="\nAddress : "+address;

window.open("https://wa.me/917500216856?text="+encodeURIComponent(message));

});
