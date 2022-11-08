const upgradePond = tier => {
  if (player.frogAmount.gte(player.ponds.frog[`tier${tier}`].cost)) {
    playSound();
    player.frogAmount = player.frogAmount.sub(player.ponds.frog[`tier${tier}`].cost);
    player.ponds.frog[`tier${tier}`].lvl = player.ponds.frog[`tier${tier}`].lvl.add('1');
    player.ponds.frog[`tier${tier}`].amountBought = player.ponds.frog[`tier${tier}`].amountBought.add('1');

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

  const mult = Decimal.pow(player.ponds.frog.multiplier.effectiveness, player.ponds.frog.multiplier.lvl).mul(Decimal.pow(player.ponds.frog.river.effectiveness, player.ponds.frog.river.lvl));

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

const updatePondUI = tier => {
  document.getElementById(`pond-t${tier}-generating-text`).textContent = fv(
    player.ponds.frog[`tier${tier}`].lvl
      .mul(player.ponds.frog[`tier${tier}`].mult)
      .mul(Decimal.pow(player.ponds.frog.multiplier.effectiveness, player.ponds.frog.multiplier.lvl))
      .mul(Decimal.pow(player.ponds.frog.river.effectiveness, player.ponds.frog.river.lvl))
  );
  document.getElementById(`pond-t${tier}-lvl-text`).textContent = fvnd(player.ponds.frog[`tier${tier}`].lvl);
  document.getElementById(`pond-t${tier}-cost-text`).textContent = fv(player.ponds.frog[`tier${tier}`].cost);
  document.getElementById(`pond-t${tier}-mult-text`).textContent = fv(
    player.ponds.frog[`tier${tier}`].mult
      .mul(Decimal.pow(player.ponds.frog.multiplier.effectiveness, player.ponds.frog.multiplier.lvl))
      .mul(Decimal.pow(player.ponds.frog.river.effectiveness, player.ponds.frog.river.lvl))
  );
  document.getElementById(`pond-t${tier}-amount-bought-text`).textContent = player.ponds.frog[`tier${tier}`].amountBought;

  if (player.frogAmount.lt(player.ponds.frog[`tier${tier}`].cost)) {
    document.getElementById(`pond-t${tier}-buy-btn`).classList.add('button-disabled');
    document.getElementById(`pond-t${tier}-buy-btn`).classList.remove('default-pond-buy-btn');
  } else {
    document.getElementById(`pond-t${tier}-buy-btn`).classList.add('default-pond-buy-btn');
    document.getElementById(`pond-t${tier}-buy-btn`).classList.remove('button-disabled');
  }
};
