import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCaIkP-lyrBfQVD6yt9px4M8aKvg858U1o",
  authDomain: "moti-mahal-deluxe.firebaseapp.com",
  projectId: "moti-mahal-deluxe",
  storageBucket: "moti-mahal-deluxe.firebasestorage.app",
  messagingSenderId: "617444779823",
  appId: "1:617444779823:web:3d599af36d3faf15a9a3da"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
