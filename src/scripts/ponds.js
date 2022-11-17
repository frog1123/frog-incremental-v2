const upgradePond = (tier, amount = player.ponds.frog.buyAmount) => {
  if (player.frogAmount.gte(player.ponds.frog[`tier${tier}`].cost.mul(amount === 1 ? 1 : Decimal.pow(player.ponds.frog[`tier${tier}`].costIncrease, amount / 10)))) {
    playSound();
    player.frogAmount = player.frogAmount.sub(player.ponds.frog[`tier${tier}`].cost.mul(amount === 1 ? 1 : Decimal.pow(player.ponds.frog[`tier${tier}`].costIncrease, amount / 10)));
    player.ponds.frog[`tier${tier}`].lvl = player.ponds.frog[`tier${tier}`].lvl.add(new Decimal('1').mul(amount));
    if (amount === 1) player.ponds.frog[`tier${tier}`].amountBought = player.ponds.frog[`tier${tier}`].amountBought.add('1');

    if (amount > 1) {
      player.ponds.frog[`tier${tier}`].cost = player.ponds.frog[`tier${tier}`].cost.mul(Decimal.pow(player.ponds.frog[`tier${tier}`].costIncrease, Decimal.log10(amount)));
      player.ponds.frog[`tier${tier}`].mult = player.ponds.frog[`tier${tier}`].mult.mul(Decimal.pow('2', amount / 10));
    }

    if (player.ponds.frog[`tier${tier}`].amountBought.eq('10')) {
      player.ponds.frog[`tier${tier}`].cost = player.ponds.frog[`tier${tier}`].cost.mul(player.ponds.frog[`tier${tier}`].costIncrease);
      player.ponds.frog[`tier${tier}`].amountBought = new Decimal('0');
      player.ponds.frog[`tier${tier}`].mult = player.ponds.frog[`tier${tier}`].mult.mul('2');
    }
  }
};

const generatePonds = () => {
  const speed = 1000 / player.devSettings.loopSpeed;
  let ponds = player.ponds.frog;

  const mult = Decimal.pow(
    player.ponds.frog.multiplier.effectiveness.mul(Decimal.pow(player.ponds.frog.lake.multiplierEffectiveness, player.ponds.frog.lake.lvl)),
    player.ponds.frog.multiplier.lvl
  ).mul(Decimal.pow(player.ponds.frog.river.effectiveness.mul(Decimal.pow(player.ponds.frog.lake.riverEffectiveness, player.ponds.frog.lake.lvl)), player.ponds.frog.river.lvl));

  player.frogAmount = player.frogAmount.add(ponds.tier1.lvl.div(speed).mul(ponds.tier1.mult).mul(mult));
  ponds.tier1.lvl = ponds.tier1.lvl.add(ponds.tier2.lvl.div(speed).mul(ponds.tier2.mult).mul(mult));
  ponds.tier2.lvl = ponds.tier2.lvl.add(ponds.tier3.lvl.div(speed).mul(ponds.tier3.mult).mul(mult));
  ponds.tier3.lvl = ponds.tier3.lvl.add(ponds.tier4.lvl.div(speed).mul(ponds.tier4.mult).mul(mult));
  ponds.tier4.lvl = ponds.tier4.lvl.add(ponds.tier5.lvl.div(speed).mul(ponds.tier5.mult).mul(mult));
  ponds.tier5.lvl = ponds.tier5.lvl.add(ponds.tier6.lvl.div(speed).mul(ponds.tier6.mult).mul(mult));
  ponds.tier6.lvl = ponds.tier6.lvl.add(ponds.tier7.lvl.div(speed).mul(ponds.tier7.mult).mul(mult));
  ponds.tier7.lvl = ponds.tier7.lvl.add(ponds.tier8.lvl.div(speed).mul(ponds.tier8.mult).mul(mult));
  ponds.tier8.lvl = ponds.tier8.lvl.add(ponds.tier9.lvl.div(speed).mul(ponds.tier9.mult).mul(mult));
  ponds.tier9.lvl = ponds.tier9.lvl.add(ponds.tier10.lvl.div(speed).mul(ponds.tier10.mult).mul(mult));
};

const updatePondUI = (tier, amount = player.ponds.frog.buyAmount) => {
  document.getElementById(`pond-t${tier}-generating-text`).textContent = fv(
    player.ponds.frog[`tier${tier}`].lvl
      .mul(player.ponds.frog[`tier${tier}`].mult)
      .mul(Decimal.pow(player.ponds.frog.multiplier.effectiveness, player.ponds.frog.multiplier.lvl))
      .mul(Decimal.pow(player.ponds.frog.river.effectiveness, player.ponds.frog.river.lvl))
  );
  document.getElementById(`pond-t${tier}-lvl-text`).textContent = fvnd(player.ponds.frog[`tier${tier}`].lvl);
  document.getElementById(`pond-t${tier}-cost-text`).textContent = fv(
    player.ponds.frog[`tier${tier}`].cost.mul(amount === 1 ? 1 : Decimal.pow(player.ponds.frog[`tier${tier}`].costIncrease, amount / 10))
  );
  document.getElementById(`pond-t${tier}-mult-text`).textContent = fv(
    player.ponds.frog[`tier${tier}`].mult
      .mul(Decimal.pow(player.ponds.frog.multiplier.effectiveness.mul(Decimal.pow(player.ponds.frog.lake.multiplierEffectiveness, player.ponds.frog.lake.lvl)), player.ponds.frog.multiplier.lvl))
      .mul(Decimal.pow(player.ponds.frog.river.effectiveness.mul(Decimal.pow(player.ponds.frog.lake.riverEffectiveness, player.ponds.frog.lake.lvl)), player.ponds.frog.river.lvl))
  );
  document.getElementById(`pond-t${tier}-amount-bought-text`).textContent = player.ponds.frog[`tier${tier}`].amountBought;

  if (player.frogAmount.lt(player.ponds.frog[`tier${tier}`].cost.mul(amount === 1 ? 1 : Decimal.pow(player.ponds.frog[`tier${tier}`].costIncrease, amount / 10)))) {
    document.getElementById(`pond-t${tier}-buy-btn`).classList.add('button-disabled');
    document.getElementById(`pond-t${tier}-buy-btn`).classList.remove('default-pond-buy-btn');
  } else {
    document.getElementById(`pond-t${tier}-buy-btn`).classList.add('default-pond-buy-btn');
    document.getElementById(`pond-t${tier}-buy-btn`).classList.remove('button-disabled');
  }
};

const updatePondBuyTypeUI = () => {
  document.getElementById('frog-pond-buy-type-text').textContent = player.ponds.frog.buyAmount;
};

const togglePondBuyType = () => {
  if (player.ponds.frog.buyAmount === 1) {
    player.ponds.frog.buyAmount = 10;
    return;
  }
  if (player.ponds.frog.buyAmount === 10) {
    player.ponds.frog.buyAmount = 100;
    return;
  }
  if (player.ponds.frog.buyAmount === 100) {
    player.ponds.frog.buyAmount = 1000;
    return;
  }
  if (player.ponds.frog.buyAmount === 1000) {
    player.ponds.frog.buyAmount = 1;
    return;
  }
  // if (player.ponds.frog.buyAmount === 1000) {
  //   player.ponds.frog.buyAmount = 'max';
  //   return;
  // }
  // if (player.ponds.frog.buyAmount === 'max') {
  //   player.ponds.frog.buyAmount = 1;
  //   return;
  // }
};
