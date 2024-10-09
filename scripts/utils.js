// Utility function to generate a random integer
function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Export the randomInt function
export { randomInt };
