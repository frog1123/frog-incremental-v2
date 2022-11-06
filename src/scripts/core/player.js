let player = {
  frogAmount: new Decimal('1e10'),
  currentPage: 'page-main',
  ponds: {
    frog: {
      multiplier: {
        lvl: new Decimal('0'),
        effectiveness: new Decimal('1.1'),
        cost: new Decimal('1000'),
        costIncrease: new Decimal('10')
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
      }
    }
  },
  settings: {
    uiUpdateSpeed: 20,
    saveLastPage: false
  },
  devSettings: {
    loopSpeed: 20
  }
};
