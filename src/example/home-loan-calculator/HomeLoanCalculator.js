import { calc } from './CalculateUtil'
import React, { Component } from 'react'
import styles from './style.css'

let loanYearsOptions = [
  {value: '30', displayValue: '30年'},
  {value: '25', displayValue: '25年'},
  {value: '20', displayValue: '20年'},
  {value: '15', displayValue: '15年'},
  {value: '10', displayValue: '10年'},
  {value: '5', displayValue: '5年'}
]

let payTimeOptions = [
  {value: 'everyMonth', displayValue: '每月'},
  {value: 'everyTwoWeeks', displayValue: '每两周'},
  {value: 'everyWeek', displayValue: '每周'}
]

let loanTypeOptions = [
  {value: '0', displayValue: '本金加利息'},
  {value: '1', displayValue: '仅利息'}
]

class HomeLoanCalculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      totalAmount: '',
      firstPayPercent: '',
      rateVal: '',
      loanType: '0',
      loanYears: 30,
      payTime: 'everyMonth',
      result: ''
    }

    this.onFormChange = this.onFormChange.bind(this)
    this.calculate = this.calculate.bind(this)
    this.reset = this.reset.bind(this)
  }

  onFormChange(e) {
    const target = e.target
    const value = target.value === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [target.name]: value
    })

    console.log(`form changed: name is ${name} value is ${value}`, name, value)
  }

  reset() {
    console.log(`Reset form`)
    this.setState({
      'totalAmount': '',
      'firstPayPercent': '',
      'rateVal': '',
      'loanType': '0',
      'loanYears': 30,
      'payTime': 'everyMonth',
      'result': ''
    })
  }

  calculate = () => {
    console.log(`Calculate money to pay`)
    if (this.state.totalAmount == 0 || this.state.firstPayPercent == 0 || this.state.rateVal == 0) {
      alert(`总金额, 首付比例和贷款利率不能为空`)
      return
    } else {
      let loanMoney = this.state.totalAmount - this.state.firstPayPercent * this.state.totalAmount / 100
      let result = calc(loanMoney, this.state.payTime, this.state.loanYears, this.state.loanType, this.state.rateVal)
      this.setState({
        result
      })
    }
  }

  render() {
    return (
      <div className={styles.calculator}>
        <p className={styles.title}>房贷计算器</p>

        <div className={`${styles.condition} ${styles.clear}`}>
          <div className={styles.conditionitem}>
            <label className={styles.label}>总金额：</label>
            <div className={styles.inputwrap}>
              <span className={styles.iconMoney}>$</span>
              <input className= {styles.input150} type='text' value={this.state.totalAmount} name='totalAmount' onChange={this.onFormChange}></input>  
            </div>
          </div>

          <div className={styles.conditionitem}>
            <label className={styles.label}>首付金额：</label>
            <div className={styles.inputwrap}>
              <input className= {styles.input150} type='text' name='firstPayPercent' value={this.state.firstPayPercent} onChange={this.onFormChange}></input>
              <span className={styles.iconPercentage}>%</span>
            </div>
          </div>

          <div className={styles.conditionitem}>
            <label className={styles.label}>利率：</label>
            <div className={styles.inputwrap}>
              <input className= {styles.input150} type='text' name='rateVal' value={this.state.rateVal} onChange={this.onFormChange}></input>
              <span className={styles.iconPercentage}>%</span>
            </div>
          </div>

          <div className={styles.conditionitem}>
            <label className={styles.label}>贷款年限：</label>
            <div className={styles.inputwrap}>
              <select name='loanYears' value={this.state.loanYears} onChange={this.onFormChange}>
                {
                  loanYearsOptions.map(item => {
                    return <option value={item.value}>{item.displayValue}</option>
                  })
                }
              </select>
            </div>
          </div>

          <div className={styles.conditionitem}>
            <label className={styles.label}>支付频率：</label>
            <div className={styles.inputwrap}>
              <select name='payTime' value={this.state.payTime} onChange={this.onFormChange}>
                {
                  payTimeOptions.map(item => {
                    return <option value={item.value}>{item.displayValue}</option>
                  })
                }
              </select>
            </div>
          </div>

          <div className={styles.conditionitem}>
            <label className={styles.label}>贷款形式：</label>
            <div className={styles.inputwrap}>
              <select name='loanType' value={this.state.loanType} onChange={this.onFormChange}>
                {
                  loanTypeOptions.map(item => {
                    return <option value={item.value}>{item.displayValue}</option>
                  })
                }
              </select>
            </div>
          </div>
        </div>

        <div className={styles.paybox}>
          <p>${this.state.result} 每月还款</p>
        </div>

        <div className={`${styles.toolbtn} ${styles.clear}`}>
          <a className={styles.btnConfirm} onClick={this.calculate}>计算</a>
          <a className={styles.btnPrimary} onClick={this.reset}>重置</a>
        </div>
      </div>
    )
  }
}

export default HomeLoanCalculator