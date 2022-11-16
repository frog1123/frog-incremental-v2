const updateLakeUI = () => {
  document.getElementById('lake-amount-text').textContent = fvnd(player.ponds.frog.lake.lvl);
  document.getElementById('lake-requires-text').textContent = fvnd(player.ponds.frog.lake.cost);

  document.getElementById(
    'lake-btn-text'
  ).textContent = `Global reset to make Rivers ×${player.ponds.frog.lake.riverEffectiveness} more effective and multipliers ×${player.ponds.frog.lake.multiplierEffectiveness} more effective`;

  if (player.ponds.frog.river.lvl.gte(player.ponds.frog.lake.cost)) {
    document.getElementById('lake-prestige-btn').classList.remove('button-disabled');
    document.getElementById('lake-prestige-btn').classList.add('green-prestige-btn');
  } else {
    document.getElementById('lake-prestige-btn').classList.remove('green-prestige-btn');
    document.getElementById('lake-prestige-btn').classList.add('button-disabled');
  }
};

const upgradeLake = () => {
  if (player.ponds.frog.river.lvl.gte(player.ponds.frog.lake.cost)) {
    globalReset();

    player.ponds.frog.lake.lvl = player.ponds.frog.lake.lvl.add('1');
    player.ponds.frog.lake.cost = player.ponds.frog.lake.cost.add(player.ponds.frog.lake.costIncrease);
  }
};
