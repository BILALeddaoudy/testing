import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD8yN-yrfE_tRNBDHvfulc61tURgpvGcxY",
  authDomain: "bilal-test-backend.firebaseapp.com",
  projectId: "bilal-test-backend",
  storageBucket: "bilal-test-backend.firebasestorage.app",
  messagingSenderId: "322543578657",
  appId: "1:322543578657:web:2395d8649819c8c2ea7d60"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("publish").onclick = async () => {
  await addDoc(collection(db, "posts"), {
    title: title.value,
    content: content.value,
    type: type.value,
    date: Date.now()
  });

  alert("Published ✅");
};
