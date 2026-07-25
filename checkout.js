import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

document.getElementById("checkoutForm").addEventListener("submit", async function(e) {

  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let total = 0;

  let message = "🍽️ Moti Mahal Deluxe Order\n\n";

  cart.forEach(item => {
    message += `${item.name} - ₹${item.price}\n`;
    total += item.price;
  });

  message += "\nTotal : ₹" + total;
  message += "\n\nName : " + name;
  message += "\nPhone : " + phone;
  message += "\nAddress : " + address;

  try {

    await addDoc(collection(db, "orders"), {

      customer: name,
      phone: phone,
      address: address,
      items: cart,
      total: total,
      status: "Pending",
      createdAt: serverTimestamp()

    });

    alert("✅ Order Saved Successfully!");

    window.open(
      "https://wa.me/917500216856?text=" +
      encodeURIComponent(message),
      "_blank"
    );

    localStorage.removeItem("cart");

  } catch (error) {

    console.log(error);

    alert("❌ Order Save Failed");

  }

});


// Smooth Scroll

document.querySelectorAll("a").forEach(link => {

  link.addEventListener("click", function(e) {

    if (this.hash !== "") {

      e.preventDefault();

      document.querySelector(this.hash).scrollIntoView({

        behavior: "smooth"

      });

    }

  });

});


// Cart Counter

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let count = document.getElementById("cartCount");

if (count) {

  count.innerHTML = cart.length;

}
