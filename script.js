// Smooth Scroll
document.querySelectorAll("a").forEach(link=>{

link.addEventListener("click",function(e){

if(this.hash!==""){

e.preventDefault();

const id=this.hash;

document.querySelector(id).scrollIntoView({

behavior:"smooth"

});

}

});

});

// Reservation Form
const form=document.querySelector(".reservation-form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("✅ Thank You! Table Reserved Successfully.");

form.reset();

});

}

// Cart Counter
let cart=JSON.parse(localStorage.getItem("cart"))||[];

let count=document.getElementById("cartCount");

if(count){

count.innerHTML=cart.length;

}
