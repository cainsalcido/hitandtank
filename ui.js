// ui.js
function renderGame() {
  // Render the game UI, including player stats, monster health, and game log
  const gameContainer = document.getElementById('game-container');
  gameContainer.innerHTML = `
    <div id="player-stats">
      <p id="player-mana">Mana: ${playerMana}</p>
      <p id="player-health">Health: ${playerHealth}</p>
      <p id="player-experience">Experience: ${playerExperience}</p>
      <p id="player-level">Level: ${playerLevel}</p>
    </div>
    <div id="monster-stats">
      <p id="monster-health">Monster Health: ${monsterHealth}</p>
    </div>
    <div id="game-log"></div>
  `;
}

function updateGameLog(message, type) {
  // Update the game log with a new message
  const logElement = document.getElementById('game-log');
  const newMessage = document.createElement('p');
  newMessage.textContent = message;
  newMessage.classList.add(type);
  logElement.appendChild(newMessage);
}

export { renderGame, updateGameLog };