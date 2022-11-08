const upgradeMultiplier = () => {
  if (player.frogAmount.gte(player.ponds.frog.multiplier.cost)) {
    playSound();
    player.frogAmount = player.frogAmount.sub(player.ponds.frog.multiplier.cost);
    player.ponds.frog.multiplier.cost = player.ponds.frog.multiplier.cost.mul(player.ponds.frog.multiplier.costIncrease);
    player.ponds.frog.multiplier.lvl = player.ponds.frog.multiplier.lvl.add('1');
  }
};

const upgradeMultiplierMax = () => {
  const amount = new Decimal(Decimal.floor(Decimal.log10(Decimal.fromComponents(1, player.frogAmount.layer, player.frogAmount.mag)))); // frog amount
  const cost = new Decimal(Decimal.floor(Decimal.log10(Decimal.fromComponents(1, player.ponds.frog.multiplier.cost.layer, player.ponds.frog.multiplier.cost.mag)))); // cost
  const costIncrease = new Decimal(Decimal.log10(player.ponds.frog.multiplier.costIncrease));

  const buying = Decimal.floor(amount.sub(cost).div(costIncrease));

  if (player.frogAmount.gte(player.ponds.frog.multiplier.cost)) {
    if (buying.gt('0')) {
      playSound();
      const costIncrease = player.ponds.frog.multiplier.costIncrease;

      player.frogAmount = player.frogAmount.sub(
        Decimal.pow(player.ponds.frog.multiplier.costIncrease, buying)
          .add(Decimal.pow(player.ponds.frog.multiplier.costIncrease, buying).mul(Decimal.pow(costIncrease, '2')))
          .add(Decimal.pow(player.ponds.frog.multiplier.costIncrease, buying).mul(costIncrease))
          .add(Decimal.pow(player.ponds.frog.multiplier.costIncrease, buying).div(costIncrease))
          .add(Decimal.pow(player.ponds.frog.multiplier.costIncrease, buying).div(Decimal.pow(costIncrease, '2')))
      );

      player.ponds.frog.multiplier.cost = player.ponds.frog.multiplier.cost.mul(Decimal.pow(player.ponds.frog.multiplier.costIncrease, buying));
      player.ponds.frog.multiplier.lvl = player.ponds.frog.multiplier.lvl.add(buying);

      upgradeMultiplier();
    }
    upgradeMultiplier();
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
