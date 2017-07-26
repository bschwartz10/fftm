import React, { Component } from 'react';
import './App.css';
import Team from './Team.jsx'
import PlayersToCompare from './PlayersToCompare.jsx'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teamOnePlayers : [],
      teamTwoPlayers : []
    }
    this.handleClick = this.handleClick.bind(this)
    // this.handleClickTeamTwo = this.handleClickTeamTwo.bind(this)
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
      this.setState({teamOnePlayers: this.state.teamOnePlayers.concat(player)})
    }else {
    this.setState({teamTwoPlayers: this.state.teamTwoPlayers.concat(player)})
    }
  }

  render() {
    return (
      <div className="App">
        <Team data={this.state.data1} onClick={this.handleClick}/>
        <Team data={this.state.data2} onClick={this.handleClick}/>
        <PlayersToCompare players={this.state.teamOnePlayers} />
        <PlayersToCompare players={this.state.teamTwoPlayers} />
      </div>
    );
  }
}


export default App;
