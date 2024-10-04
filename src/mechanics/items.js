// items.js
function usePotion() {
  // Use a potion to heal the player
  playerHealth += 20;
  updateLog('You use a potion, healing 20 health!', 'heal');
  updatePlayerStats();
}

function equipSword() {
  // Equip a sword to increase damage dealt to the monster
  // ...
}

export { usePotion, equipSword };