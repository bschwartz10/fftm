import React, { Component } from 'react';

export default class Player extends Component {
  render() {
    const name = `${this.props.info.first_name} ${this.props.info.last_name}`
    const position = this.props.info.position
    const nflTeam = this.props.info.nfl_team
    const fantasyPoints = this.props.info.stats[0].fantasy_points

    return (
      <tr>
       <td>{name}</td>
       <td>{position}</td>
       <td>{nflTeam}</td>
       <td>{fantasyPoints}</td>
       <td>
       <button onClick={()=> console.log('fired')}>Trade</button>
       </td>
    </tr>
    )
  }
}
