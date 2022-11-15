const showUnlocked = () => {
  if (player.ponds.frog.highestTier >= 5) document.getElementById(`pond-t5-container`).style.display = 'grid';
  if (player.ponds.frog.highestTier >= 6) document.getElementById(`pond-t6-container`).style.display = 'grid';
  if (player.ponds.frog.highestTier >= 7) document.getElementById(`pond-t7-container`).style.display = 'grid';
  if (player.ponds.frog.highestTier >= 8) document.getElementById(`pond-t8-container`).style.display = 'grid';
  if (player.ponds.frog.highestTier >= 9) document.getElementById(`pond-t9-container`).style.display = 'grid';
  if (player.ponds.frog.highestTier >= 10) document.getElementById(`pond-t10-container`).style.display = 'grid';
};

window.onload = () => {
  const loadDataSafe = () => {
    const predata = localStorage.getItem('player');
    if (predata === null) return;
    data = JSON.parse(atob(predata));
    loadData(data);
  };

  loadDataSafe();
  showUnlocked();
  if (player.settings.saveLastPage) switchPage(player.currentPage);
  if (!player.settings.saveLastPage) switchPage('page-main');
  updateUI();
};
