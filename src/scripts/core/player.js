let player = {
  frogAmount: new Decimal('1e20'),
  currentPage: 'page-main',
  ponds: {
    frog: {
      buyAmount: 1,
      highestTier: 4,
      multiplier: {
        lvl: new Decimal('0'),
        effectiveness: new Decimal('1.1'),
        cost: new Decimal('1000'),
        costIncrease: new Decimal('10')
      },
      river: {
        lvl: new Decimal('6'),
        cost: new Decimal('20'),
        costIncrease: new Decimal('20'),
        effectiveness: new Decimal('2')
      },
      lake: {
        lvl: new Decimal('0'),
        cost: new Decimal('6'),
        costIncrease: new Decimal('4'),
        multiplierEffectiveness: new Decimal('1.02'),
        riverEffectiveness: new Decimal('2')
      },
      tier1: {
        lvl: new Decimal('0'),
        cost: new Decimal('10'),
        costIncrease: new Decimal('100'),
        mult: new Decimal('1'),
        amountBought: new Decimal('0')
      },
      tier2: {
        lvl: new Decimal('0'),
        cost: new Decimal('100'),
        costIncrease: new Decimal('100'),
        mult: new Decimal('1'),
        amountBought: new Decimal('0')
      },
      tier3: {
        lvl: new Decimal('0'),
        cost: new Decimal('1e5'),
        costIncrease: new Decimal('100'),
        mult: new Decimal('1'),
        amountBought: new Decimal('0')
      },
      tier4: {
        lvl: new Decimal('0'),
        cost: new Decimal('1e8'),
        costIncrease: new Decimal('100'),
        mult: new Decimal('1'),
        amountBought: new Decimal('0')
      },
      tier5: {
        lvl: new Decimal('0'),
        cost: new Decimal('1e12'),
        costIncrease: new Decimal('1000'),
        mult: new Decimal('1'),
        amountBought: new Decimal('0')
      },
      tier6: {
        lvl: new Decimal('0'),
        cost: new Decimal('1e16'),
        costIncrease: new Decimal('1000'),
        mult: new Decimal('1'),
        amountBought: new Decimal('0')
      },
      tier7: {
        lvl: new Decimal('0'),
        cost: new Decimal('1e24'),
        costIncrease: new Decimal('1000'),
        mult: new Decimal('1'),
        amountBought: new Decimal('0')
      },
      tier8: {
        lvl: new Decimal('0'),
        cost: new Decimal('1e30'),
        costIncrease: new Decimal('1000'),
        mult: new Decimal('1'),
        amountBought: new Decimal('0')
      },
      tier9: {
        lvl: new Decimal('0'),
        cost: new Decimal('1e36'),
        costIncrease: new Decimal('1e4'),
        mult: new Decimal('1'),
        amountBought: new Decimal('0')
      },
      tier10: {
        lvl: new Decimal('0'),
        cost: new Decimal('1e50'),
        costIncrease: new Decimal('1e4'),
        mult: new Decimal('1'),
        amountBought: new Decimal('0')
      }
    }
  },
  settings: {
    uiUpdateSpeed: 20,
    saveLastPage: false,
    playSound: true
  },
  devSettings: {
    loopSpeed: 20
  }
};
