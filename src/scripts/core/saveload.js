const saveData = () => {
  localStorage.setItem('player', btoa(JSON.stringify(player)));
};

const loadData = data => {
  player.frogAmount = new Decimal(data.frogAmount);
  player.currentPage = data.currentPage;

  player.ponds.frog.highestTier = data.ponds.frog.highestTier;

  player.ponds.frog.multiplier.lvl = new Decimal(data.ponds.frog.multiplier.lvl);
  player.ponds.frog.multiplier.effectiveness = new Decimal(data.ponds.frog.multiplier.effectiveness);
  player.ponds.frog.multiplier.cost = new Decimal(data.ponds.frog.multiplier.cost);
  player.ponds.frog.multiplier.costIncrease = new Decimal(data.ponds.frog.multiplier.costIncrease);

  player.ponds.frog.river.lvl = new Decimal(data.ponds.frog.river.lvl);
  player.ponds.frog.river.cost = new Decimal(data.ponds.frog.river.cost);
  player.ponds.frog.river.costIncrease = new Decimal(data.ponds.frog.river.costIncrease);
  player.ponds.frog.river.effectiveness = new Decimal(data.ponds.frog.river.effectiveness);

  player.ponds.frog.lake.lvl = new Decimal(data.ponds.frog.lake.lvl);
  player.ponds.frog.lake.cost = new Decimal(data.ponds.frog.lake.cost);
  player.ponds.frog.lake.costIncrease = new Decimal(data.ponds.frog.lake.costIncrease);
  player.ponds.frog.lake.multiplierEffectiveness = new Decimal(data.ponds.frog.lake.multiplierEffectiveness);
  player.ponds.frog.lake.riverEffectiveness = new Decimal(data.ponds.frog.lake.riverEffectiveness);

  player.ponds.frog.tier1.lvl = new Decimal(data.ponds.frog.tier1.lvl);
  player.ponds.frog.tier1.cost = new Decimal(data.ponds.frog.tier1.cost);
  player.ponds.frog.tier1.costIncrease = new Decimal(data.ponds.frog.tier1.costIncrease);
  player.ponds.frog.tier1.mult = new Decimal(data.ponds.frog.tier1.mult);
  player.ponds.frog.tier1.amountBought = new Decimal(data.ponds.frog.tier1.amountBought);

  player.ponds.frog.tier2.lvl = new Decimal(data.ponds.frog.tier2.lvl);
  player.ponds.frog.tier2.cost = new Decimal(data.ponds.frog.tier2.cost);
  player.ponds.frog.tier2.costIncrease = new Decimal(data.ponds.frog.tier2.costIncrease);
  player.ponds.frog.tier2.mult = new Decimal(data.ponds.frog.tier2.mult);
  player.ponds.frog.tier2.amountBought = new Decimal(data.ponds.frog.tier2.amountBought);

  player.ponds.frog.tier3.lvl = new Decimal(data.ponds.frog.tier3.lvl);
  player.ponds.frog.tier3.cost = new Decimal(data.ponds.frog.tier3.cost);
  player.ponds.frog.tier3.costIncrease = new Decimal(data.ponds.frog.tier3.costIncrease);
  player.ponds.frog.tier3.mult = new Decimal(data.ponds.frog.tier3.mult);
  player.ponds.frog.tier3.amountBought = new Decimal(data.ponds.frog.tier3.amountBought);

  player.ponds.frog.tier4.lvl = new Decimal(data.ponds.frog.tier4.lvl);
  player.ponds.frog.tier4.cost = new Decimal(data.ponds.frog.tier4.cost);
  player.ponds.frog.tier4.costIncrease = new Decimal(data.ponds.frog.tier4.costIncrease);
  player.ponds.frog.tier4.mult = new Decimal(data.ponds.frog.tier4.mult);
  player.ponds.frog.tier4.amountBought = new Decimal(data.ponds.frog.tier4.amountBought);

  player.ponds.frog.tier5.lvl = new Decimal(data.ponds.frog.tier5.lvl);
  player.ponds.frog.tier5.cost = new Decimal(data.ponds.frog.tier5.cost);
  player.ponds.frog.tier5.costIncrease = new Decimal(data.ponds.frog.tier5.costIncrease);
  player.ponds.frog.tier5.mult = new Decimal(data.ponds.frog.tier5.mult);
  player.ponds.frog.tier5.amountBought = new Decimal(data.ponds.frog.tier5.amountBought);

  player.ponds.frog.tier6.lvl = new Decimal(data.ponds.frog.tier6.lvl);
  player.ponds.frog.tier6.cost = new Decimal(data.ponds.frog.tier6.cost);
  player.ponds.frog.tier6.costIncrease = new Decimal(data.ponds.frog.tier6.costIncrease);
  player.ponds.frog.tier6.mult = new Decimal(data.ponds.frog.tier6.mult);
  player.ponds.frog.tier6.amountBought = new Decimal(data.ponds.frog.tier6.amountBought);

  player.ponds.frog.tier7.lvl = new Decimal(data.ponds.frog.tier7.lvl);
  player.ponds.frog.tier7.cost = new Decimal(data.ponds.frog.tier7.cost);
  player.ponds.frog.tier7.costIncrease = new Decimal(data.ponds.frog.tier7.costIncrease);
  player.ponds.frog.tier7.mult = new Decimal(data.ponds.frog.tier7.mult);
  player.ponds.frog.tier7.amountBought = new Decimal(data.ponds.frog.tier7.amountBought);

  player.ponds.frog.tier8.lvl = new Decimal(data.ponds.frog.tier8.lvl);
  player.ponds.frog.tier8.cost = new Decimal(data.ponds.frog.tier8.cost);
  player.ponds.frog.tier8.costIncrease = new Decimal(data.ponds.frog.tier8.costIncrease);
  player.ponds.frog.tier8.mult = new Decimal(data.ponds.frog.tier8.mult);
  player.ponds.frog.tier8.amountBought = new Decimal(data.ponds.frog.tier8.amountBought);

  player.ponds.frog.tier9.lvl = new Decimal(data.ponds.frog.tier9.lvl);
  player.ponds.frog.tier9.cost = new Decimal(data.ponds.frog.tier9.cost);
  player.ponds.frog.tier9.costIncrease = new Decimal(data.ponds.frog.tier9.costIncrease);
  player.ponds.frog.tier9.mult = new Decimal(data.ponds.frog.tier9.mult);
  player.ponds.frog.tier9.amountBought = new Decimal(data.ponds.frog.tier9.amountBought);

  player.ponds.frog.tier10.lvl = new Decimal(data.ponds.frog.tier10.lvl);
  player.ponds.frog.tier10.cost = new Decimal(data.ponds.frog.tier10.cost);
  player.ponds.frog.tier10.costIncrease = new Decimal(data.ponds.frog.tier10.costIncrease);
  player.ponds.frog.tier10.mult = new Decimal(data.ponds.frog.tier10.mult);
  player.ponds.frog.tier10.amountBought = new Decimal(data.ponds.frog.tier10.amountBought);

  player.settings.uiUpdateSpeed = data.settings.uiUpdateSpeed;
  player.settings.saveLastPage = data.settings.saveLastPage;

  player.devSettings.loopSpeed = data.devSettings.loopSpeed;
};

const exportData = () => {
  let exportData = btoa(JSON.stringify(player));
  navigator.clipboard.writeText(exportData);

  alert('save copied to clipboard');
};

const importData = () => {
  const importedData = JSON.parse(atob(prompt('input your save (this will overwrite your current save)')));
  if (importedData === null) return;

  loadData(importedData);
  saveData();
};
