import React, { Component } from 'react';

export default class TradedPlayer extends Component {
  render() {
    let name = this.props.info.name
    let position = this.props.info.position
    let nflTeam = this.props.info.nflTeam
    let fantasyPoints = this.props.info.fantasyPoints
    return (
      <tr className="tradedPlayer">
       <td>{name}</td>
       <td>{position}</td>
       <td>{nflTeam}</td>
       <td>{fantasyPoints} points</td>
      </tr>
    )
  }
}
