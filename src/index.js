// Import dependencies
import { initGameState, updatePlayerStats, updateMonsterHealth, updateLog } from './gameLogic';
import { renderGame, updateGameLog } from './ui';
import { monsterAttack, monsterDefend } from './monster';
import { usePotion, equipSword } from './items';
import { levelUp, checkLevelUp } from './levels';

// Initialize the game
function startGame() {
  initGameState();
  updateLog('Welcome to the game! You are a brave adventurer seeking fortune and glory.');
  updateLog('A fearsome monster stands before you, its eyes fixed on you with a hungry gaze.');
  renderGame(); // Render the initial game state
}

// Establish the game loop
function gameLoop() {
  // Update game state
  updatePlayerStats();
  updateMonsterHealth();

  // Render the updated game state
  renderGame();

  // Handle user input (e.g., keyboard or mouse events)
  document.addEventListener('keydown', (event) => {
    if (event.key === ' ') {
      // Player attacks the monster
      monsterHealth -= 20;
      updateLog('You attack the monster, dealing 20 damage!', 'damage');
      updateMonsterHealth();
    } else if (event.key === 'p') {
      // Player uses a potion
      usePotion();
    } else if (event.key === 'e') {
      // Player equips a sword
      equipSword();
    }
  });

  // Monster AI
  if (monsterHealth > 0) {
    if (Math.random() < 0.5) {
      monsterAttack();
    } else {
      monsterDefend();
    }
  }

  // Check for level up
  checkLevelUp();

  // Repeat the game loop
  requestAnimationFrame(gameLoop);
}

// Start the game and initialize the game loop
startGame();
gameLoop();