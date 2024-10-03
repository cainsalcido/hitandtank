// Initialize player and monster stats
let player = {
  mana: 100,
  health: 100
};

let monster = {
  health: 100
};

// Define a function to handle spell casting
function castSpell(manaCost, minDamage, maxDamage) {
  if (player.mana >= manaCost) {
    let damage = getRandomInt(minDamage, maxDamage);
    monster.health -= damage;
    player.mana -= manaCost;
    console.log(`You cast a ${getSpellName(manaCost)} on the Gooner for ${damage} damage!`);
    console.log(`Monster health: ${monster.health}`);
    console.log(`Your mana: ${player.mana}`);
    checkWin();
    monsterAttack();
  } else {
    console.log(`You don't have enough mana to cast a ${getSpellName(manaCost)}!`);
    gameMenu();
  }
}

// Define a function to get the spell name based on mana cost
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

// Define a function to handle melee attack
function slash() {
  let damage = getRandomInt(10, 25);
  monster.health -= damage;
  console.log(`You slashed the Gooner for ${damage} damage!`);
  console.log(`Monster health: ${monster.health}`);
  checkWin();
  monsterAttack();
}

// Define a function to handle monster attack
function monsterAttack() {
  let damage = getRandomInt(10, 20);
  player.health -= damage;
  console.log(`The Gooner attacked you for ${damage} damage!`);
  console.log(`Your health: ${player.health}`);
  checkWin();
}

// Define a function to generate a random integer within a range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Define a function to check if the game is won
function checkWin() {
  if (monster.health <= 0) {
    console.log('You won!');
  } else if (player.health <= 0) {
    console.log('You lost!');
  }
}

// Define a function to display the game menu
function gameMenu() {
  console.log('Game menu:');
  console.log('1. Cast a spell');
  console.log('2. Slash');
  console.log('3. Run away');
  // Add more options as needed
// Add an event listener to the "Run Away" button
document.getElementById("run-away-btn").addEventListener("click", clearConsole);

// Function to clear the console
function clearConsole() {
  console.clear();
}

}