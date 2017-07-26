import React, { Component } from 'react';
import './App.css';
import Team from './Team.jsx'
import TradedPlayer from './TradedPlayer.jsx'
import axios from 'axios'

class PlayersToCompare extends Component {

  tradePlayers() {
    if (this.props.players === []) return
    return this.props.players.map((player, i) => {

      return <TradedPlayer info={player} key={i}/>
    })
  }

  render() {
    return (
          <table>
            <tbody>
          {this.tradePlayers()}
            </tbody>
          </table>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playersToCompare : []
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
    this.setState({playersToCompare: this.state.playersToCompare.concat(player)})
  }


  render() {
    return (
      <div className="App">
        <Team data={this.state.data1} onClick={this.handleClick}/>
        <Team data={this.state.data2} onClick={this.handleClick}/>
        <PlayersToCompare players={this.state.playersToCompare} />
      </div>
    );
  }
}


export default App;
