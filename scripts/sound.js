// Sound effects
const jumpSound = new Audio('sounds/jump.wav');
const coinCollectSound = new Audio('sounds/coin-collect.wav');

// Play sound effects
function playJumpSound() {
	jumpSound.play();
}

function playCoinCollectSound() {
	coinCollectSound.play();
}

// Export the sound functions
export { playJumpSound, playCoinCollectSound };
