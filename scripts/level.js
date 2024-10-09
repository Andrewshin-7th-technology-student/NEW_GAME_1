// Level logic
function createLevel(levelData) {
	const level = {
		powerUps: [],
		obstacles: [],
	};

	// Create power-ups
	for (let i = 0; i < levelData.powerUps.length; i++) {
		const powerUp = levelData.powerUps[i];
		level.powerUps.push({
			x: powerUp.x,
			y: powerUp.y,
		});
	}

	// Create obstacles
	for (let i = 0; i < levelData.obstacles.length; i++) {
		const obstacle = levelData.obstacles[i];
		level.obstacles.push({
			x: obstacle.x,
			y: obstacle.y,
		});
	}

	return level;
}

// Export the createLevel function
export { createLevel };
