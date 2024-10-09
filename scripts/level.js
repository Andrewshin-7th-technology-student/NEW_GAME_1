// Level logic
function createLevel(levelData) {
  const level = {
    treasures: [],
    obstacles: [],
  };

  // Create treasures
  for (let i = 0; i < levelData.treasures.length; i++) {
    const treasure = levelData.treasures[i];
    level.treasures.push({
      x: treasure.x,
      y: treasure.y,
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
