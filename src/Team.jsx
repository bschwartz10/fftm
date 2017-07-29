import React, { Component } from 'react';
import Player from './Player.jsx'

export default class Team extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  players() {
    if (this.props.data === undefined) return
    return this.props.data.players.map((player, i) => {
      return <Player onClick={this.props.onClick} info={player} key={i}/>
    })
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>NFL Team</th>
            <th>Fantasy Points</th>
          </tr>
        </thead>
        <tbody>{this.players()}</tbody>
    </table>
    )
  }
}
