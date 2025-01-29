// Firebase configuration (same as before, ensure you're logged in before accessing game)
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

// Canvas setup
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let avatar = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 50,
  color: "#FF5733",
};

// Function to draw the avatar (simple circle)
function drawAvatar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before each redraw
  ctx.beginPath();
  ctx.arc(avatar.x, avatar.y, avatar.size, 0, Math.PI * 2, false); // Draw a circle for the avatar
  ctx.fillStyle = avatar.color;
  ctx.fill();
  ctx.closePath();
}

// Function to update the avatar position based on click event
canvas.addEventListener("click", (event) => {
  avatar.x = event.clientX;
  avatar.y = event.clientY;
  drawAvatar(); // Redraw the avatar at the new position
});

// Initially draw the avatar
drawAvatar();
