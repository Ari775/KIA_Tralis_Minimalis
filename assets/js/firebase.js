import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔥 GANTI dengan config kamu
const firebaseConfig = {
  apiKey: "AIzaSyBRZ2M-Pg-bZKowTKs-PcTCQvL_g-1NKlA",
  authDomain: "proweld-8daff.firebaseapp.com",
  projectId: "proweld-8daff",
  storageBucket: "proweld-8daff.firebasestorage.app",
  messagingSenderId: "144653309391",
  appId: "1:144653309391:web:a7fb97562d0943e1406eba",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🚀 fungsi kirim form
window.kirimForm = async (e) => {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;

  try {
    await addDoc(collection(db, "contacts"), {
      nama,
      email,
      pesan,
      created_at: new Date(),
    });

    alert("Berhasil dikirim!");
  } catch (err) {
    alert("Gagal!");
    console.error(err);
  }
};
