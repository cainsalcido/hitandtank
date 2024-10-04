// levels.js
function levelUp() {
  // Level up the player
  playerLevel += 1;
  playerExperience = 0;
  updateLog(`You level up to level ${playerLevel}!`, 'success');
  updatePlayerStats();
}

function checkLevelUp() {
  // Check if the player has enough experience to level up
  if (playerExperience >= 100) {
    levelUp();
  }
}

export { levelUp, checkLevelUp };