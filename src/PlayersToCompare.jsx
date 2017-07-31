import React, { Component } from 'react';
import TradedPlayer from './TradedPlayer.jsx'

export default class PlayersToCompare extends Component {

  tradePlayers() {
    if (this.props.players === []) return
    return this.props.players.map((player, i) => {
      return <TradedPlayer info={player} key={i} onClick={this.props.onClick}/>
    })
  }

  render() {
    return (
          <table className="proposedPlayersTable">
            <tbody>
          {this.tradePlayers()}
            </tbody>
          </table>
    )
  }
}
