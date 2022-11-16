const updateRiverUI = () => {
  const pondnum = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'];

  document.getElementById('river-amount-text').textContent = fvnd(player.ponds.frog.river.lvl);
  document.getElementById('river-requires-text').textContent = `${player.ponds.frog.river.cost} ${pondnum[player.ponds.frog.highestTier - 1]}`;
  if (player.ponds.frog.highestTier < 10) {
    document.getElementById('river-btn-text').textContent = `Local reset to unlock ${pondnum[player.ponds.frog.highestTier]} Pond and give all ponds a ×${player.ponds.frog.river.effectiveness.mul(
      Decimal.pow(player.ponds.frog.lake.riverEffectiveness, player.ponds.frog.lake.lvl)
    )} multiplier`;
  } else
    document.getElementById('river-btn-text').textContent = `Local reset to unlock give all ponds a ×${player.ponds.frog.river.effectiveness.mul(
      Decimal.pow(player.ponds.frog.lake.riverEffectiveness, player.ponds.frog.lake.lvl)
    )} multiplier`;

  if (player.ponds.frog[`tier${player.ponds.frog.highestTier}`].lvl.gte(player.ponds.frog.river.cost)) {
    document.getElementById('river-prestige-btn').classList.remove('button-disabled');
    document.getElementById('river-prestige-btn').classList.add('green-prestige-btn');
  } else {
    document.getElementById('river-prestige-btn').classList.remove('green-prestige-btn');
    document.getElementById('river-prestige-btn').classList.add('button-disabled');
  }
};

const upgradeRiver = () => {
  if (player.ponds.frog[`tier${player.ponds.frog.highestTier}`].lvl.gte(player.ponds.frog.river.cost)) {
    localReset();

    player.ponds.frog.river.lvl = player.ponds.frog.river.lvl.add('1');

    // remember to change
    if (player.ponds.frog.highestTier < 10) {
      player.ponds.frog.highestTier++;
      player.ponds.frog[`tier${player.ponds.frog.highestTier}`].unlocked = true;

      document.getElementById(`pond-t${player.ponds.frog.highestTier}-container`).style.display = 'grid';
    } else {
      player.ponds.frog.river.cost = player.ponds.frog.river.cost.add(player.ponds.frog.river.costIncrease);
    }
  }
};
