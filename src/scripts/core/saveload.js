const saveData = () => {
  localStorage.setItem('player', btoa(JSON.stringify(player)));
};

const loadData = data => {
  player.frogAmount = new Decimal(data.frogAmount);
  player.currentPage = data.currentPage;

  player.ponds.frog.multiplier.lvl = new Decimal(data.ponds.frog.multiplier.lvl);
  player.ponds.frog.multiplier.effectiveness = new Decimal(data.ponds.frog.multiplier.effectiveness);
  player.ponds.frog.multiplier.cost = new Decimal(data.ponds.frog.multiplier.cost);
  player.ponds.frog.multiplier.costIncrease = new Decimal(data.ponds.frog.multiplier.costIncrease);

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
