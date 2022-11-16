const updateUI = () => {
  document.getElementById('frog-amount-text').textContent = fv(player.frogAmount);
  document.getElementById('frog-gaining-text').textContent = fv(
    player.ponds.frog.tier1.lvl.mul(player.ponds.frog.tier1.mult).mul(Decimal.pow(player.ponds.frog.multiplier.effectiveness, player.ponds.frog.multiplier.lvl))
  );

  if (player.currentPage === 'page-main') {
    updateMultiplierUI();
    updateRiverUI();
    updateLakeUI();
    updatePondUI(1);
    updatePondUI(2);
    updatePondUI(3);
    updatePondUI(4);
    updatePondUI(5);
    updatePondUI(6);
    updatePondUI(7);
    updatePondUI(8);
    updatePondUI(9);
    updatePondUI(10);
  }

  setTimeout(updateUI, 50);
};

document.getElementById('river-prestige-btn').onclick = () => upgradeRiver();
document.getElementById('lake-prestige-btn').onclick = () => upgradeLake();
document.getElementById('frog-pond-multiplier-buy-btn').onclick = () => upgradeMultiplier();
document.getElementById('frog-pond-multiplier-buy-max-btn').onclick = () => upgradeMultiplierMax();
document.getElementById('pond-t1-buy-btn').onclick = () => upgradePond(1);
document.getElementById('pond-t2-buy-btn').onclick = () => upgradePond(2);
document.getElementById('pond-t3-buy-btn').onclick = () => upgradePond(3);
document.getElementById('pond-t4-buy-btn').onclick = () => upgradePond(4);
document.getElementById('pond-t5-buy-btn').onclick = () => upgradePond(5);
document.getElementById('pond-t6-buy-btn').onclick = () => upgradePond(6);
document.getElementById('pond-t7-buy-btn').onclick = () => upgradePond(7);
document.getElementById('pond-t8-buy-btn').onclick = () => upgradePond(8);
document.getElementById('pond-t9-buy-btn').onclick = () => upgradePond(9);
document.getElementById('pond-t10-buy-btn').onclick = () => upgradePond(10);

const switchPage = pageToSwitchTo => {
  // hide all pages
  document.getElementById('page-main').style.display = 'none';
  document.getElementById('page-settings').style.display = 'none';
  document.getElementById('page-tutorial').style.display = 'none';

  player.currentPage = pageToSwitchTo;
  document.getElementById(pageToSwitchTo).style.display = 'block';
};

// sidebar open
document.getElementById('sidebar-icon-btn').onclick = () => {
  document.getElementById('sidebar-container').style.transform = 'translateX(0)';
  document.getElementById('sidebar-container').style.boxShadow = '0 8px 24px #191919';
  document.getElementById('sidebar-shown-overlay').style.display = 'block';
};

// sidebar close

const closeSidebar = () => {
  document.getElementById('sidebar-container').style.transform = 'translateX(-100%)';
  document.getElementById('sidebar-container').style.boxShadow = 'none';
  document.getElementById('sidebar-shown-overlay').style.display = 'none';
};

document.getElementById('sidebar-close-btn').onclick = () => closeSidebar();
document.getElementById('sidebar-shown-overlay').onclick = () => closeSidebar();

document.getElementById('switch-to-page-main').onclick = () => switchPage('page-main');
document.getElementById('switch-to-page-settings').onclick = () => switchPage('page-settings');
document.getElementById('switch-to-page-tutorial').onclick = () => switchPage('page-tutorial');

document.getElementById('save-btn').onclick = () => saveData();
document.getElementById('load-btn').onclick = () => {
  const predata = localStorage.getItem('player');
  if (predata === null) return;
  data = JSON.parse(atob(predata));
  loadData(data);
};
document.getElementById('export-btn').onclick = () => exportData();
document.getElementById('import-btn').onclick = () => importData();
document.getElementById('toggle-sound-btn').onclick = () => {
  if (player.settings.playSound === false) {
    player.settings.playSound = true;
    return;
  } else {
    player.settings.playSound = false;
    return;
  }
};
