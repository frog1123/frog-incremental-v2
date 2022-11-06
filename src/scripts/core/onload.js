window.onload = () => {
  loadData();
  if (player.settings.saveLastPage) switchPage(player.currentPage);
  updateUI();
};
