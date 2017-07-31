import React, { Component } from 'react';

export default class TradedPlayer extends Component {
  render() {
    let name = this.props.info.name
    let position = this.props.info.position
    let nflTeam = this.props.info.nflTeam
    let fantasyPoints = this.props.info.fantasyPoints
    let teamId = this.props.info.teamId

    return (
      <tr className="tradedPlayer">
        <td>{name}</td>
        <td>{position}</td>
        <td><img className="teamLogoSmall" src={nflTeam} alt="teamLogoSmall" /></td>
        <td>{fantasyPoints} points</td>
       <td>
         <button
           className="button remove-player"
           onClick={() => this.props.onClick({name: name, teamId: teamId})}>
           Remove
         </button>
       </td>
      </tr>
    )
  }
}
