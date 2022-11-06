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

const switchPage = pageToSwitchTo => {
  // hide all pages
  document.getElementById('page-main').style.display = 'none';
  document.getElementById('page-2').style.display = 'none';

  document.getElementById(pageToSwitchTo).style.display = 'block';
};

// sidebar open
document.getElementById('sidebar-icon-btn').onclick = () => {
  document.getElementById('sidebar-container').style.transform = 'translateX(0)';
  document.getElementById('sidebar-container').style.boxShadow = '0 8px 24px #191919';
};

// sidebar close
document.getElementById('sidebar-close-btn').onclick = () => {
  document.getElementById('sidebar-container').style.transform = 'translateX(-100%)';
  document.getElementById('sidebar-container').style.boxShadow = 'none';
};

document.getElementById('switch-to-page-main').onclick = () => switchPage('page-main');
document.getElementById('switch-to-page-2').onclick = () => switchPage('page-2');

document.getElementById('frog-pond-multiplier-buy-btn').onclick = () => upgradeMultiplier();
document.getElementById('pond-t1-buy-btn').onclick = () => upgradePond(1);
document.getElementById('pond-t2-buy-btn').onclick = () => upgradePond(2);
