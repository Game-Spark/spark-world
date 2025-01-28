// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwRCCQ8F89i_G21aU10Iaba6FX-vZtA9o",
  authDomain: "game-spark-e3f11.firebaseapp.com",
  projectId: "game-spark-e3f11",
  storageBucket: "game-spark-e3f11.firebasestorage.app",
  messagingSenderId: "327260610681",
  appId: "1:327260610681:web:f24b8c768b0d414b9f34a8",
  measurementId: "G-21MC1TC1M4",
};

// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Toggle between Login and Signup forms
document.getElementById('switch-to-signup').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('login-form').classList.remove('active-form');
  document.getElementById('signup-form').classList.add('active-form');
});

document.getElementById('switch-to-login').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('signup-form').classList.remove('active-form');
  document.getElementById('login-form').classList.add('active-form');
});

// Handle Signup
document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('signup-confirm-password').value;

  // Validate password confirmation
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert(`Signup successful! Welcome, ${userCredential.user.email}`);
    document.getElementById('switch-to-login').click(); // Switch to login after signup
  } catch (error) {
    alert(`Signup failed: ${error.message}`);
  }
});

// Handle Login
document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    alert(`Login successful! Welcome back, ${userCredential.user.email}`);
    // Redirect to your game dashboard or home page
    window.location.href = "dashboard.html";
  } catch (error) {
    alert(`Login failed: ${error.message}`);
  }
});
