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

// Set up Google Auth Provider with new Client ID
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  client_id: "327260610681-5oeqs5q1q6087653mvn26macj8hi3t3u.apps.googleusercontent.com",
});

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
document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('signup-confirm-password').value;

  // Validate password confirmation
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert(`Signup successful! Welcome, ${userCredential.user.email}`);
      document.getElementById('switch-to-login').click(); // Switch to login after signup
    })
    .catch((error) => {
      alert(`Signup failed: ${error.message}`);
    });
});

// Handle Login
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert(`Login successful! Welcome back, ${userCredential.user.email}`);
      window.location.href = "dashboard.html"; // Redirect to dashboard
    })
    .catch((error) => {
      alert(`Login failed: ${error.message}`);
    });
});

// Handle Google Login
document.getElementById('google-login').addEventListener('click', () => {
  auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      alert(`Google login successful! Welcome, ${user.displayName}`);
      window.location.href = "dashboard.html"; // Redirect to dashboard
    })
    .catch((error) => {
      alert(`Google login failed: ${error.message}`);
    });
});
