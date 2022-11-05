const upgradeMultiplier = () => {
  if (player.frogAmount.gte(player.ponds.frog.multiplier.cost)) {
    player.frogAmount = player.frogAmount.sub(player.ponds.frog.multiplier.cost);
    player.ponds.frog.multiplier.cost = player.ponds.frog.multiplier.cost.mul(player.ponds.frog.multiplier.costIncrease);
    player.ponds.frog.multiplier.lvl = player.ponds.frog.multiplier.lvl.add('1');
  }
};

const updateMultiplierUI = () => {
  document.getElementById('frog-pond-multiplier-buy-btn-cost-text').textContent = fv(player.ponds.frog.multiplier.cost);
  document.getElementById('frog-pond-multiplier-effectiveness-text').textContent = fv(player.ponds.frog.multiplier.effectiveness);
  document.getElementById('frog-pond-multiplier-current-multiplier-text').textContent = fv(Decimal.pow(player.ponds.frog.multiplier.effectiveness, player.ponds.frog.multiplier.lvl));

  if (player.frogAmount.lt(player.ponds.frog.multiplier.cost)) {
    document.getElementById('frog-pond-multiplier-buy-btn').classList.remove('default-multiplier-buy-btn');
    document.getElementById('frog-pond-multiplier-buy-btn').classList.add('button-disabled');

    document.getElementById('frog-pond-multiplier-buy-max-btn').classList.remove('default-multiplier-buy-btn');
    document.getElementById('frog-pond-multiplier-buy-max-btn').classList.add('button-disabled');
  } else {
    document.getElementById('frog-pond-multiplier-buy-btn').classList.remove('button-disabled');
    document.getElementById('frog-pond-multiplier-buy-btn').classList.add('default-multiplier-buy-btn');

    document.getElementById('frog-pond-multiplier-buy-max-btn').classList.remove('button-disabled');
    document.getElementById('frog-pond-multiplier-buy-max-btn').classList.add('default-multiplier-buy-btn');
  }
};
