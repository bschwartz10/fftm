import React, { Component } from 'react';
import './App.css';
import Team from './Team.jsx'
import PlayersToCompare from './PlayersToCompare.jsx'
import {EvaluateButton} from './EvaluateButton.jsx'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teamOnePlayers : [],
      teamTwoPlayers : []
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/teams/teams/1')
    .then(response => {
      this.setState({data1: response.data})
    })
    axios.get('http://localhost:3000/api/v1/teams/teams/2')
    .then(response => {
      this.setState({data2: response.data})
    })
  }

  handleClick(player) {
    if (player.teamId === 1) {
    const filter1 = (this.state.teamOnePlayers.findIndex(i => i.name === player.name))
      if (filter1 === -1) {
      this.setState({teamOnePlayers: this.state.teamOnePlayers.concat(player)})
      }
    } else {
        const filter2 = (this.state.teamTwoPlayers.findIndex(i => i.name === player.name))
        if (filter2 === -1) {
          this.setState({teamTwoPlayers: this.state.teamTwoPlayers.concat(player)})
        }
    }
  }

  render() {
    return (
      <div className="App">
        <div className="teamOne">
          <Team data={this.state.data1} onClick={this.handleClick}/>
        </div>
        <div className="teamTwo">
          <Team data={this.state.data2} onClick={this.handleClick}/>
        </div>
        <div className="proposedPlayersTeamOne">
          <h2>Proposed Players</h2>
          <PlayersToCompare players={this.state.teamOnePlayers} />
        </div>
        <div className="proposedPlayersTeamTwo">
          <h2>Proposed Players</h2>
          <PlayersToCompare players={this.state.teamTwoPlayers} />
        </div>
        <EvaluateButton teamOne={this.state.teamOnePlayers} teamTwo={this.state.teamTwoPlayers} />
      </div>
    );
  }
}


export default App;
