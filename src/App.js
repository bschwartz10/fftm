import React, { Component } from 'react';
import './App.css';
import Team from './Team.jsx'
import PlayersToCompare from './PlayersToCompare.jsx'
import EvaluateButton from './EvaluateButton.jsx'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teamOnePlayers : [],
      teamTwoPlayers : [],
    }
    this.handleClickAdd = this.handleClickAdd.bind(this)
    this.handleClickRemove = this.handleClickRemove.bind(this)
    this.handleClickReset = this.handleClickReset.bind(this)
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

  handleClickAdd(player) {
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

  handleClickRemove(player) {
    if (player.teamId === 1) {
      let playerIndex = (this.state.teamOnePlayers.findIndex(i => i.name === player.name))
        this.state.teamOnePlayers.splice(playerIndex, 1)
        this.setState({teamOnePlayers: this.state.teamOnePlayers})
    }
    else if (player.teamId === 2) {
      let playerIndex = (this.state.teamTwoPlayers.findIndex(i => i.name === player.name))
        this.state.teamTwoPlayers.splice(playerIndex, 1)
        this.setState({teamTwoPlayers: this.state.teamTwoPlayers})
    }
  }

  handleClickReset() {
    this.setState({teamOnePlayers: []})
    this.setState({teamTwoPlayers: []})
  }

  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h1 className="title">Working Title</h1>
        </div>
        <div className="teamOne">
          <Team data={this.state.data1} onClick={this.handleClickAdd}/>
        </div>
        <div className="evalulatePlayers">
          <EvaluateButton onClick={this.handleClickReset} teamOne={this.state.teamOnePlayers} teamTwo={this.state.teamTwoPlayers} />
        </div>
        <div className="teamTwo">
          <Team data={this.state.data2} onClick={this.handleClickAdd}/>
        </div>
        <div className="proposedPlayersTeamOne">
          <h2>Proposed Players</h2>
          <PlayersToCompare onClick={this.handleClickRemove} players={this.state.teamOnePlayers} />
        </div>
        <div className="proposedPlayersTeamTwo">
          <h2>Proposed Players</h2>
          <PlayersToCompare onClick={this.handleClickRemove} players={this.state.teamTwoPlayers} />
        </div>
      </div>
    );
  }
}


export default App;
