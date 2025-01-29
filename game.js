// game.js

import { drawAvatar, drawText, drawRectangle } from './drawer.js';

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

// Draw the initial state of the game
function drawGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before each redraw

  // Draw the avatar
  drawAvatar(ctx, avatar.x, avatar.y, avatar.size, avatar.color);

  // Optionally draw any other game elements (like text, buttons, objects)
  drawText(ctx, "Click to move the avatar!", 50, 50);
}

// Handle user interaction (click to move avatar)
canvas.addEventListener("click", (event) => {
  avatar.x = event.clientX;
  avatar.y = event.clientY;
  drawGame(); // Redraw the game state with the avatar at the new position
});

// Initial game render
drawGame();
