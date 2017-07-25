import React, { Component } from 'react';
import Player from './Player.jsx'
import axios from 'axios'

export default class Team extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/teams/teams/1')
    .then(response => {
      this.setState({data: response.data})
    })
  }

  players() {
    if (this.state.data === undefined) return
    return this.state.data.players.map((player, i) => {
      return <Player info={player} key={i}/>
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
