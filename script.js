// script.js

let player = {
    mana: 100,
    health: 100
};

let monster = {
    health: 100
};

let gameLog = document.getElementById('log');
let playerManaElement = document.getElementById('player-mana');
let playerHealthElement = document.getElementById('player-health');
let monsterHealthElement = document.getElementById('monster-health');

function castSpell(manaCost, minDamage, maxDamage) {
    if (player.mana >= manaCost) {
        let damage = getRandomInt(minDamage, maxDamage);
        monster.health -= damage;
        player.mana -= manaCost;
        logMessage(`You cast a ${getSpellName(manaCost)} on the Gooner for ${damage} damage!`);
        logMessage(`Monster health: ${monster.health}`);
        logMessage(`Your mana: ${player.mana}`);
        checkWin();
        monsterAttack();
    } else {
        logMessage(`You don't have enough mana to cast a ${getSpellName(manaCost)}!`);
        gameMenu();
    }
}

function getSpellName(manaCost) {
    switch (manaCost) {
        case 20:
            return 'spell';
        case 30:
            return 'fireball';
        case 40:
            return 'lightning bolt';
        default:
            return '';
    }
}

function slash() {
    let damage = getRandomInt(10, 25);
    monster.health -= damage;
    logMessage(`You slashed the Gooner for ${damage} damage!`);
    logMessage(`Monster health: ${monster.health}`);
    checkWin();
    monsterAttack();
}

function monsterAttack() {
    let damage = getRandomInt(10, 20);
    player.health -= damage;
    logMessage(`The Gooner attacked you for ${damage} damage!`);
    logMessage(`Your health: ${player.health}`);
    checkWin();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkWin() {
    if (monster.health <= 0) {
        logMessage('You won!');
    } else if (player.health <= 0) {
        logMessage('You lost!');
    }
}

function gameMenu() {
    logMessage('Game menu:');
    logMessage('1. Cast a spell');
    logMessage('2. Slash');
    logMessage('3. Run away');
}

function logMessage(message) {
    gameLog.innerHTML += `<p>${message}</p>`;
}

function updatePlayerStats() {
    playerManaElement.textContent = `Mana: ${player.mana}`;
    playerHealthElement.textContent = `Health: ${player.health}`;
}

function updateMonsterStats() {
    monsterHealthElement.textContent = `Health: ${monster.health}`;
}

document.getElementById('cast-spell').addEventListener('click', function() {
    castSpell(20, 10, 20);
});

document.getElementById('slash').addEventListener('click', function() {
    slash();
});

document.getElementById('run-away').addEventListener('click', function() {
    logMessage('You ran away!');
    gameMenu();
});

document.getElementById('mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

updatePlayerStats();
updateMonsterStats();