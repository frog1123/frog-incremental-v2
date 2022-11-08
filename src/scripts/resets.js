const localReset = () => {
  player.frogAmount = new Decimal('10');

  player.ponds.frog.multiplier.lvl = new Decimal('0');
  player.ponds.frog.multiplier.cost = new Decimal('1000');

  player.ponds.frog.tier1.lvl = new Decimal('0');
  player.ponds.frog.tier2.lvl = new Decimal('0');
  player.ponds.frog.tier3.lvl = new Decimal('0');
  player.ponds.frog.tier4.lvl = new Decimal('0');
  player.ponds.frog.tier5.lvl = new Decimal('0');
  player.ponds.frog.tier6.lvl = new Decimal('0');

  player.ponds.frog.tier1.cost = new Decimal('10');
  player.ponds.frog.tier2.cost = new Decimal('100');
  player.ponds.frog.tier3.cost = new Decimal('1e5');
  player.ponds.frog.tier4.cost = new Decimal('1e8');
  player.ponds.frog.tier5.cost = new Decimal('1e12');
  player.ponds.frog.tier6.cost = new Decimal('1e16');

  player.ponds.frog.tier1.mult = new Decimal('1');
  player.ponds.frog.tier2.mult = new Decimal('1');
  player.ponds.frog.tier3.mult = new Decimal('1');
  player.ponds.frog.tier4.mult = new Decimal('1');
  player.ponds.frog.tier5.mult = new Decimal('1');
  player.ponds.frog.tier6.mult = new Decimal('1');

  player.ponds.frog.tier1.amountBought = new Decimal('0');
  player.ponds.frog.tier2.amountBought = new Decimal('0');
  player.ponds.frog.tier3.amountBought = new Decimal('0');
  player.ponds.frog.tier4.amountBought = new Decimal('0');
  player.ponds.frog.tier5.amountBought = new Decimal('0');
  player.ponds.frog.tier6.amountBought = new Decimal('0');
};
