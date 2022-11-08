const showUnlocked = () => {
  if (player.ponds.frog.highestTier >= 5) document.getElementById(`pond-t${5}-container`).style.display = 'grid';
  if (player.ponds.frog.highestTier >= 6) document.getElementById(`pond-t${6}-container`).style.display = 'grid';
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
  updateUI();
};
