// monster.js
function monsterAttack() {
  // Monster attacks the player
  playerHealth -= 20;
  updateLog('The monster attacks you, dealing 20 damage!', 'damage');
  updatePlayerStats();
}

function monsterDefend() {
  // Monster defends itself
  monsterHealth += 10;
  updateLog('The monster defends itself, gaining 10 health!', 'heal');
  updateMonsterHealth();
}

export { monsterAttack, monsterDefend };