// drawer.js

// Function to draw an avatar (sprite) at a specific position on the canvas
function drawAvatar(ctx, x, y, size, color) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2, false); // Draw a circle for the avatar
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}

// Function to draw text on the canvas (e.g., score or message)
function drawText(ctx, text, x, y, fontSize = 20, color = "#FFFFFF") {
  ctx.font = `${fontSize}px Arial`;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
}

// Function to draw a rectangle (e.g., a button or object in the game)
function drawRectangle(ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

// You can add more sprite-drawing functions as needed for your game

export { drawAvatar, drawText, drawRectangle };
