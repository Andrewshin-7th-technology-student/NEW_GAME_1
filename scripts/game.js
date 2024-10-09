// Get the canvas element
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions
canvas.width = 800;
canvas.height = 600;

// Game variables
let currentLevel = 1;
let playerX = 50;
let playerY = 50;
let score = 0;

// Load the level data
const levels = [];
for (let i = 1; i <= 70; i++) {
	const levelData = JSON.parse(localStorage.getItem(`level-${i}`));
	levels.push(levelData);
}

// Game loop
function update() {
	// Clear the canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Draw the background
	ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

	// Draw the player
	ctx.fillStyle = '#ff0000';
	ctx.fillRect(playerX, playerY, 20, 20);

	// Draw the treasures
	for (let i = 0; i < levels[currentLevel - 1].treasures.length; i++) {
		const treasure = levels[currentLevel - 1].treasures[i];
		ctx.drawImage(treasureImage, treasure.x, treasure.y, 20, 20);
	}

	// Update the score
	ctx.font = '24px Arial';
	ctx.fillStyle = '#000';
	ctx.textAlign = 'left';
	ctx.textBaseline = 'top';
	ctx.fillText(`Score: ${score}`, 10, 10);

	// Update the game state
	playerX += 1;
	if (playerX > canvas.width) {
		playerX = 0;
	}

	// Check for collisions
	for (let i = 0; i < levels[currentLevel - 1].obstacles.length; i++) {
		const obstacle = levels[currentLevel - 1].obstacles[i];
		if (checkCollision(playerX, playerY, obstacle.x, obstacle.y)) {
			alert('Game Over!');
			location.reload();
		}
	}

	// Check for treasure collection
	for (let i = 0; i < levels[currentLevel - 1].treasures.length; i++) {
		const treasure = levels[currentLevel - 1].treasures[i];
		if (checkCollision(playerX, playerY, treasure.x, treasure.y)) {
			score++;
			levels[currentLevel - 1].treasures.splice(i, 1);
		}
	}
}

// Utility function to check for collisions
function checkCollision(x1, y1, x2, y2) {
	if (x1 + 20 > x2 && x1 < x2 + 20 && y1 + 20 > y2 && y1 < y2 + 20) {
		return true;
	}
	return false;
}

// Initialize the game
update();
setInterval(update, 16); // 60 FPS
