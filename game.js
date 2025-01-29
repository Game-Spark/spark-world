// game.js

import { drawTownSquare, drawAvatar, drawText } from './drawer.js';

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

// Audio setup: Load the background music (BGM) for town
const bgm = new Audio('town.mp3'); // Assuming town.mp3 is in the main directory
bgm.loop = true;  // Loop the BGM
bgm.volume = 0.5; // Set volume to 50%

// Canvas setup
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();  // Set initial size based on window dimensions

// Listen for window resizing to adjust the canvas size dynamically
window.addEventListener('resize', resizeCanvas);

// Player data and location
let avatar = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 50,
  color: "#FF5733",
};

let currentPlace = "Town Square"; // Starting place

// Function to draw the map of locations (simple grid)
function drawMap() {
  const mapWidth = 300;
  const mapHeight = 300;
  const mapX = 20;
  const mapY = 20;

  // Draw background of the map
  ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
  ctx.fillRect(mapX, mapY, mapWidth, mapHeight);

  // Draw locations on the map (representing different places as simple squares)
  ctx.fillStyle = "#00FF00";
  ctx.fillRect(mapX + 50, mapY + 50, 50, 50); // Example location (next to town square)
  ctx.fillStyle = "#FFD700";
  ctx.fillRect(mapX + 150, mapY + 150, 50, 50); // Example location (a different place)
}

// Function to show the current place text
function drawCurrentPlaceText() {
  drawText(ctx, `You are in: ${currentPlace}`, canvas.width / 2, 30);
}

// Function to draw the initial game environment (town square)
function drawGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before each redraw

  // Draw the town square background (this is just a simple rectangle right now)
  drawTownSquare(ctx, canvas.width, canvas.height);

  // Draw the current place text
  drawCurrentPlaceText();

  // Draw the avatar (player's character)
  drawAvatar(ctx, avatar.x, avatar.y, avatar.size, avatar.color);

  // Draw the map
  drawMap();

  // Optionally draw other game elements (like text)
  drawText(ctx, "Click to move your avatar. Move between different places.", canvas.width / 2, canvas.height - 50);
}

// Handle user interaction (click to move avatar)
canvas.addEventListener("click", (event) => {
  // Play the background music on first click
  if (bgm.paused) {
    bgm.play().catch((error) => {
      console.error("Failed to play audio: ", error);
    });
  }

  // Move avatar to clicked position
  avatar.x = event.clientX;
  avatar.y = event.clientY;

  // Update the current place based on position (basic place switching logic for demonstration)
  if (event.clientX < canvas.width / 2 && event.clientY < canvas.height / 2) {
    currentPlace = "Town Square"; // Top-left
  } else if (event.clientX > canvas.width / 2 && event.clientY > canvas.height / 2) {
    currentPlace = "Marketplace"; // Bottom-right
  } else {
    currentPlace = "Park"; // Other locations can be added similarly
  }

  drawGame(); // Redraw the game state with the avatar at the new position
});

// Function to mute/unmute the BGM (Optional)
function toggleBGM() {
  if (bgm.muted) {
    bgm.muted = false; // Unmute the music
  } else {
    bgm.muted = true; // Mute the music
  }
}

// Add a mute button to the game
const muteButton = document.createElement("button");
muteButton.textContent = "Mute/Unmute BGM";
muteButton.style.position = "absolute";
muteButton.style.top = "20px";
muteButton.style.left = "20px";
muteButton.style.padding = "10px";
muteButton.style.fontSize = "16px";
muteButton.addEventListener("click", toggleBGM);
document.body.appendChild(muteButton);

// Initial game render
drawGame();
