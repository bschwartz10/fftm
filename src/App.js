import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Player extends Component {
  render() {
    const name = this.props.info.name
    const position = this.props.info.position
    const nflTeam = this.props.info.nflTeam
    const fantasyPoints = this.props.info.fantasyPoints

    return (
      <tr>
       <td>{name}</td>
       <td>{position}</td>
       <td>{nflTeam}</td>
       <td>{fantasyPoints}</td>
      </tr>
    )
  }
}

class Team extends Component {
  render() {

    const players = this.props.data.map((player, i) => {
      return <Player info={player} key={i}/>
    })

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
        <tbody>{players}</tbody>
    </table>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Team data={DATA}/>
      </div>
    );
  }
}

let DATA = [
  {name: 'David Johnson', position: 'RB', nflTeam: 'ARI', fantasyPoints: '500'},
  {name: 'David Johnson', position: 'RB', nflTeam: 'ARI', fantasyPoints: '500'},
  {name: 'David Johnson', position: 'RB', nflTeam: 'ARI', fantasyPoints: '500'},
  {name: 'David Johnson', position: 'RB', nflTeam: 'ARI', fantasyPoints: '500'},
  {name: 'David Johnson', position: 'RB', nflTeam: 'ARI', fantasyPoints: '500'},
  {name: 'David Johnson', position: 'RB', nflTeam: 'ARI', fantasyPoints: '500'}
];

export default App;
