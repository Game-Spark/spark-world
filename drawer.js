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

// Function to draw the Town Square (enhanced with more details)
export function drawTownSquare(ctx, canvasWidth, canvasHeight) {
  ctx.fillStyle = "#D3D3D3"; // Town square background (light gray)
  ctx.fillRect(0, 0, canvasWidth, canvasHeight); // Fill entire canvas
  
  // Buildings in the town square
  ctx.fillStyle = "#808080"; // Building color
  ctx.fillRect(150, 100, 100, 200); // Example building 1 (large building)
  ctx.fillRect(400, 150, 70, 150); // Example building 2 (smaller shop)
  
  // Roads (add gray roads with lines)
  ctx.fillStyle = "#A9A9A9"; 
  ctx.fillRect(100, 300, canvasWidth - 200, 50); // Road
  
  // Draw trees and plants
  ctx.fillStyle = "#228B22"; // Tree foliage color
  ctx.beginPath();
  ctx.arc(100, 350, 20, 0, Math.PI * 2, true); // Tree 1
  ctx.arc(500, 350, 20, 0, Math.PI * 2, true); // Tree 2
  ctx.arc(700, 350, 20, 0, Math.PI * 2, true); // Tree 3
  ctx.fill();
  
  // People (simple circles to represent characters walking)
  ctx.fillStyle = "#FFD700"; // People color
  ctx.beginPath();
  ctx.arc(230, 400, 15, 0, Math.PI * 2, true); // Person 1
  ctx.arc(320, 450, 15, 0, Math.PI * 2, true); // Person 2
  ctx.arc(570, 460, 15, 0, Math.PI * 2, true); // Person 3
  ctx.fill();
  
  // Optionally add signs or other details
  ctx.fillStyle = "#8B4513"; // Sign color
  ctx.fillRect(130, 120, 40, 20); // Small sign
  ctx.fillRect(380, 150, 30, 15); // Sign near the shop
}

// Function to draw the Park (as an enhanced location map)
export function drawPark(ctx, canvasWidth, canvasHeight) {
  // Park background (grassy green color)
  ctx.fillStyle = "#A3D977"; 
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Trees (lush, full trees in various sizes)
  ctx.fillStyle = "#228B22"; // Dark green for trees
  ctx.beginPath();
  ctx.arc(200, 250, 40, 0, Math.PI * 2, true); // Tree 1
  ctx.arc(600, 350, 40, 0, Math.PI * 2, true); // Tree 2
  ctx.arc(1000, 150, 40, 0, Math.PI * 2, true); // Tree 3
  ctx.fill();
  
  // Lake (add shimmering blue to represent water)
  ctx.fillStyle = "#1E90FF"; // Lake color
  ctx.beginPath();
  ctx.ellipse(800, 500, 200, 100, 0, 0, Math.PI * 2); // Lake body
  ctx.fill();

  // Add benches
  ctx.fillStyle = "#8B4513"; // Wood for benches
  ctx.fillRect(300, 500, 120, 20); // Bench 1
  ctx.fillRect(700, 500, 120, 20); // Bench 2
  
  // Add walking paths (curved)
  ctx.strokeStyle = "#D3D3D3"; 
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(200, 400); // Starting point of path
  ctx.quadraticCurveTo(400, 350, 600, 450); // Curve of the path
  ctx.lineTo(600, 450); // End point of path
  ctx.stroke();

  // Optional: Draw flowers
  ctx.fillStyle = "#FF1493"; // Flower color
  ctx.beginPath();
  ctx.arc(500, 450, 10, 0, Math.PI * 2, true); // Flower 1
  ctx.arc(300, 400, 10, 0, Math.PI * 2, true); // Flower 2
  ctx.fill();
  
  // Add more details (such as park benches, paths, etc.)
  ctx.fillStyle = "#D2691E"; // Path color
  ctx.fillRect(0, 590, canvasWidth, 20); // Path below the park
}
