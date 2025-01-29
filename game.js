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

// Play the background music as soon as the game starts
bgm.play();

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

// Function to draw the initial game environment (town square)
function drawGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before each redraw

  // Draw the town square
  drawTownSquare(ctx, canvas.width, canvas.height);

  // Draw the avatar (player's character)
  drawAvatar(ctx, avatar.x, avatar.y, avatar.size, avatar.color);

  // Optionally draw other game elements (like text)
  drawText(ctx, "Welcome to the Town Square! Click to move your avatar.", 50, 50);
}

// Handle user interaction (click to move avatar)
canvas.addEventListener("click", (event) => {
  avatar.x = event.clientX;
  avatar.y = event.clientY;
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
