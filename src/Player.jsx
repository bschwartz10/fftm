import React, { Component } from 'react';

export default class Player extends Component {
  render() {
    const name = `${this.props.info.first_name} ${this.props.info.last_name}`
    const position = this.props.info.position
    const nflTeam = this.props.info.nfl_team
    const fantasyPoints = this.props.info.stats[0].fantasy_points
    const teamId = this.props.info.team_id
    const image = this.props.info.img_src

    return (
      <tr>
       <td><img className="playerImage" src={image} /></td>
       <td>{name}</td>
       <td>{position}</td>
       <td>{nflTeam}</td>
       <td>{fantasyPoints}</td>
       <td>
       <button
         className="button"
         onClick={() => this.props.onClick({name: name, position: position, nflTeam: nflTeam, fantasyPoints: fantasyPoints, teamId: teamId})}>
         Trade
       </button>
       </td>
    </tr>
    )
  }
}
