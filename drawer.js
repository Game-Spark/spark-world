// drawer.js

// Function to draw the town square background
function drawTownSquare(ctx, width, height) {
  // Draw the ground
  ctx.fillStyle = "#D9E2D3"; // Light greenish color for the ground
  ctx.fillRect(0, 0, width, height);
  
  // Draw some paths in the town square
  ctx.fillStyle = "#B88B4A"; // Path color (brownish)
  ctx.fillRect(width * 0.25, height * 0.4, width * 0.5, 100); // Horizontal path
  ctx.fillRect(width * 0.4, height * 0.25, 100, height * 0.5); // Vertical path

  // Draw some buildings (simple squares for now)
  ctx.fillStyle = "#D1B48C"; // Building color
  ctx.fillRect(width * 0.1, height * 0.3, 150, 200); // Left building
  ctx.fillRect(width * 0.7, height * 0.3, 150, 200); // Right building
  
  // Draw some trees (using circles)
  ctx.fillStyle = "#228B22"; // Green for trees
  ctx.beginPath();
  ctx.arc(width * 0.15, height * 0.65, 30, 0, Math.PI * 2, false); // Left tree
  ctx.fill();
  ctx.beginPath();
  ctx.arc(width * 0.85, height * 0.65, 30, 0, Math.PI * 2, false); // Right tree
  ctx.fill();
}

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

export { drawTownSquare, drawAvatar, drawText, drawRectangle };
