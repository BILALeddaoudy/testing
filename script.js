import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

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

const lessons = document.getElementById("lessons");
const exercises = document.getElementById("exercises");
const news = document.getElementById("news");

const querySnapshot = await getDocs(collection(db, "posts"));

querySnapshot.forEach((doc) => {
  const data = doc.data();
  const div = document.createElement("div");
  div.className = "post";
  div.innerHTML = `<h4>${data.title}</h4><p>${data.content}</p>`;

  if (data.type === "lesson") lessons.appendChild(div);
  if (data.type === "exercise") exercises.appendChild(div);
  if (data.type === "news") news.appendChild(div);
});
