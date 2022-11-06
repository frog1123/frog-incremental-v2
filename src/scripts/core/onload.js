window.onload = () => {
  const loadDataSafe = () => {
    const predata = localStorage.getItem('player');
    if (predata === null) return;
    data = JSON.parse(atob(predata));
    console.log(data);
    loadData(data);
  };

  loadDataSafe();
  if (player.settings.saveLastPage) switchPage(player.currentPage);
  updateUI();
};
