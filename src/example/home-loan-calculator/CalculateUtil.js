/**
 * Calculate home loan
 * 
 * @param loanMoney 贷款金额
 * @param payTime 还款方式: everyMonth, everyTwoWeeks, everyWeek
 * @param loanYears  贷款年数 e.g. 30
 * @param {*} loanType 贷款方式 0: 利息加本金; 1: 只付利息;
 * @param {*} rateVal 贷款利率 e.g. 5.0
 */
function calc(loanMoney, payTime, loanYears, loanType, rateVal) {
    let n, s;
    switch (payTime) {
      case 'everyMonth':
        n = 12 * loanYears,
        s = rateVal / 100 / 12;
        break;
      case 'everyTwoWeeks':
        n = 26 * loanYears,
        s = rateVal / 100 / 26;
        break;
      case 'everyWeek':
        n = 52 * loanYears,
        s = rateVal / 100 / 52;
        break;
    }
    let r = 1 + s;
    if (0 == loanType) {
        var o = Math.pow(r, n);
        return (loanMoney * s * o / (o - 1)).toFixed(2)
    }
    return (s * loanMoney).toFixed(2)
  }

  export { calc }