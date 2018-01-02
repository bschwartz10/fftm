import React, { Component } from 'react';
import {TradeResult} from './TradeResult.jsx'

export default class EvaluateButton extends Component {
  constructor(props) {
    super(props)
      this.state = {
        showTrade: false
    }
    this.handleShowTrade = this.handleShowTrade.bind(this)
    this.exitTrade = this.exitTrade.bind(this)
  }

  handleShowTrade(input) {
    this.setState({showTrade: input})
  }

  teamOnePoints() {
    return this.props.teamOne.reduce((total, player) => {
      return total + player.fantasyPoints
    }, 0)
  }

  teamTwoPoints() {
    return this.props.teamTwo.reduce((total, player) => {
      return total + player.fantasyPoints
    }, 0)
  }

  tradeResult() {
    this.handleShowTrade(true)
  }

  exitTrade() {
    this.handleShowTrade(false)
  }

  render() {
    if (this.props.teamOne.length >= 1 && this.props.teamTwo.length >= 1) {
      return (
        <div>
          <button className="button buttonLarge" onClick={() => this.tradeResult()}>Evaluate Trade</button>
          <button className="button reset-trade" onClick={() => this.props.onClick()}>
            Reset Trade
          </button>
          { this.state.showTrade ? <TradeResult teamOnePoints={this.teamOnePoints()} teamTwoPoints={this.teamTwoPoints()} onClick={this.exitTrade} /> : null }
        </div>
      )
    }
    else {
      return (
        <div>
          <button className="button disabled">Evaluate Trade</button>
          <button className="button disabled reset-trade">Reset Trade</button>
        </div>
      )
    }
  }
}
