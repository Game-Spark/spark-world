// drawer.js

// Function to draw text in the game (used for displaying place and notifications)
export function drawText(ctx, text, x, y) {
  ctx.fillStyle = "white";
  ctx.font = "30px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, x, y);
}

// Function to draw the avatar (player character)
export function drawAvatar(ctx, x, y, size, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2, true);
  ctx.fill();
}

// Function to draw the map grid and areas (including Park, Town Square, etc.)
export function drawMap(ctx, canvasWidth, canvasHeight) {
  const mapWidth = 300;
  const mapHeight = 300;
  const mapX = 20;
  const mapY = 20;

  // Draw background of the map
  ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
  ctx.fillRect(mapX, mapY, mapWidth, mapHeight);

  // Draw Town Square area on the map
  ctx.fillStyle = "#00FF00"; // Green for Town Square
  ctx.fillRect(mapX + 50, mapY + 50, 50, 50);

  // Draw Park area on the map
  ctx.fillStyle = "#FFD700"; // Yellow for Park
  ctx.fillRect(mapX + 150, mapY + 150, 50, 50);
}

// Function to draw the Town Square (for now simple background)
export function drawTownSquare(ctx, canvasWidth, canvasHeight) {
  ctx.fillStyle = "#A9A9A9"; // Town square background (grayish)
  ctx.fillRect(0, 0, canvasWidth, canvasHeight); // Fill entire canvas
  
  // Optionally: Draw simple landmarks or buildings
  ctx.fillStyle = "#808080"; // Example building
  ctx.fillRect(150, 100, 100, 200); // Simple building

  // Draw other potential elements like benches, people, etc.
}

// Function to draw the Park (as a new location map)
export function drawPark(ctx, canvasWidth, canvasHeight) {
  // Park background (greenish)
  ctx.fillStyle = "#A3D977"; // Light green for park
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Trees (simple circles to represent trees)
  ctx.fillStyle = "#2E8B57"; // Tree color
  ctx.beginPath();
  ctx.arc(200, 300, 30, 0, Math.PI * 2, true); // Tree 1
  ctx.arc(600, 400, 30, 0, Math.PI * 2, true); // Tree 2
  ctx.arc(1000, 200, 30, 0, Math.PI * 2, true); // Tree 3
  ctx.fill();

  // Draw a lake (a simple blue area)
  ctx.fillStyle = "#00BFFF"; // Lake color
  ctx.beginPath();
  ctx.ellipse(800, 600, 200, 100, 0, 0, Math.PI * 2);
  ctx.fill();

  // Optional: Draw benches, bushes, etc.
  ctx.fillStyle = "#8B4513"; // Wood color for benches
  ctx.fillRect(300, 500, 80, 20); // Bench 1
  ctx.fillRect(700, 500, 80, 20); // Bench 2

  // Optionally add more park features like paths or flowers
}

