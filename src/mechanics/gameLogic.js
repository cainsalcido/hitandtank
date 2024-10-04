// gameLogic.js
let playerMana = 100;
let playerHealth = 100;
let monsterHealth = 100;
let playerExperience = 0;
let playerLevel = 1;

function initGameState() {
  // Initialize the game state, including player and monster stats
  playerMana = 100;
  playerHealth = 100;
  monsterHealth = 100;
  playerExperience = 0;
  playerLevel = 1;
}

function updatePlayerStats() {
  // Update player stats, including mana, health, experience, and level
  document.getElementById('player-mana').textContent = `Mana: ${playerMana}`;
  document.getElementById('player-health').textContent = `Health: ${playerHealth}`;
  document.getElementById('player-experience').textContent = `Experience: ${playerExperience}`;
  document.getElementById('player-level').textContent = `Level: ${playerLevel}`;
}

function updateMonsterHealth() {
  // Update monster health
  document.getElementById('monster-health').textContent = `Monster Health: ${Math.max(monsterHealth, 0)}`;
}

export { initGameState, updatePlayerStats, updateMonsterHealth };