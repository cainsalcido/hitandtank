// Game logic
let playerMana = 100;
let playerHealth = 100;
let monsterHealth = 100;
let playerExperience = 0;
let playerLevel = 1;

// Update game log
function updateLog(message, type = 'normal') {
    const logElement = document.getElementById('log');
    const newMessage = document.createElement('p');
    newMessage.textContent = message;
    newMessage.classList.add(type);
    logElement.appendChild(newMessage);
}

// Update player stats
function updatePlayerStats() {
    document.getElementById('player-mana').textContent = `Mana: ${playerMana}`;
    document.getElementById('player-health').textContent = `Health: ${playerHealth}`;
    document.getElementById('player-experience').textContent = `Experience: ${playerExperience}`;
    document.getElementById('player-level').textContent = `Level: ${playerLevel}`;
}

// Update monster health
function updateMonsterHealth() {
    document.getElementById('monster-health').textContent = `Monster Health: ${Math.max(monsterHealth, 0)}`;
}

// Cast a spell
function castSpell() {
    if (playerMana >= 20) {
        playerMana -= 20;
        monsterHealth -= 30;
        updateLog('You cast a spell, dealing damage to the monster!', 'action');
        updateLog(`-30 Monster Health`, 'damage');
        updateLog(`-20 Player Mana`, 'mana');
        updatePlayerStats();
        updateMonsterHealth();
        checkMonsterHealth();
    } else {
        updateLog('You don\'t have enough mana to cast a spell!', 'error');
    }
}

// Slash the monster
function slash() {
    monsterHealth -= 15;
    updateLog('You slash the monster, dealing damage!', 'action');
    updateLog(`-15 Monster Health`, 'damage');
    updateMonsterHealth();
    checkMonsterHealth();
}

// Run away
function runAway() {
    const chanceToEscape = Math.random();
    if (chanceToEscape < 0.5) {
        updateLog('You successfully run away!', 'success');
        // Reset game state
        playerMana = 100;
        playerHealth = 100;
        monsterHealth = 100;
        playerExperience = 0;
        playerLevel = 1;
        updatePlayerStats();
        updateMonsterHealth();
    } else {
        updateLog('You fail to run away!', 'error');
    }
}

// Check monster health
function checkMonsterHealth() {
    if (monsterHealth <= 0) {
        updateLog('You defeated the monster!', 'success');
        // Reset game state
        playerMana = 100;
        playerHealth = 100;
        monsterHealth = 100;
        playerExperience += 100;
        playerLevel += 1;
        updatePlayerStats();
        updateMonsterHealth();
    }
}

// Toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Add event listeners
document.getElementById('cast-spell').addEventListener('click', castSpell);
document.getElementById('slash').addEventListener('click', slash);
document.getElementById('run-away').addEventListener('click', runAway);
document.getElementById('mode-toggle').addEventListener('click', toggleDarkMode);