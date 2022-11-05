const updateUI = () => {
  document.getElementById('frog-amount-text').textContent = fv(player.frogAmount);
  document.getElementById('frog-gaining-text').textContent = fv(
    player.ponds.frog.tier1.lvl.mul(player.ponds.frog.tier1.mult).mul(Decimal.pow(player.ponds.frog.multiplier.effectiveness, player.ponds.frog.multiplier.lvl))
  );

  updateMultiplierUI();
  updatePondUI(1);
  updatePondUI(2);
  updatePondUI(3);

  setTimeout(updateUI, 50);
};

document.getElementById('frog-pond-multiplier-buy-btn').onclick = () => upgradeMultiplier();
document.getElementById('pond-t1-buy-btn').onclick = () => upgradePond(1);
document.getElementById('pond-t2-buy-btn').onclick = () => upgradePond(2);
