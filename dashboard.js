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
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Handle Logout
document.getElementById('logout-button').addEventListener('click', () => {
  auth.signOut().then(() => {
    alert("Logged out successfully!");
    window.location.href = "index.html"; // Redirect to login page
  }).catch((error) => {
    alert(`Logout failed: ${error.message}`);
  });
});

// Check for User Authentication and Display Data
auth.onAuthStateChanged((user) => {
  if (user) {
    document.getElementById('welcome-message').textContent = `Welcome back, ${user.displayName || user.email}`;
    // Here you can fetch additional user data (e.g., stats, etc.)
  } else {
    // Redirect to login if not authenticated
    window.location.href = "index.html";
  }
});
