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

// Check if the game is in offline mode
const gameMode = sessionStorage.getItem('gameMode'); // Look for 'gameMode' sessionStorage

if (gameMode === "offline") {
  // If offline, display appropriate message and skip Firebase setup
  console.log("Offline mode activated.");
  // You could display a special message for offline users
  document.getElementById('server-select').style.display = 'none'; // Hide server selection
  document.getElementById('server-message').textContent = "You are in offline mode.";
} else {
  // Initialize Firebase if online (multiplayer mode)
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

  // Handle Server Selection
  document.querySelectorAll('.server-button').forEach(button => {
    button.addEventListener('click', (event) => {
      const selectedServer = event.target.dataset.server;
      document.getElementById('server-message').textContent = `You selected the ${selectedServer} server.`;

      // You can now redirect to the game on the selected server, or store the server choice
      setTimeout(() => {
        window.location.href = `game.html?server=${selectedServer}`;  // Redirect to game with server info
      }, 2000); // Show message for 2 seconds before redirecting (or do additional logic)
    });
  });
}

// Handle Offline Mode Button (for switching mode to offline)
document.getElementById('offline-button').addEventListener('click', () => {
  sessionStorage.setItem('gameMode', 'offline');  // Set offline mode in sessionStorage
  window.location.href = "game.html"; // Redirect to offline game page
});
