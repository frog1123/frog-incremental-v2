const playSound = () => {
  const sound = new Audio('assets/click.mp3');
  sound.volume = 0.2;
  sound.play();
};
