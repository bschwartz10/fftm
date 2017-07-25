import React, { Component } from 'react';
import './App.css';

class Player extends Component {
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
      </tr>
    )
  }
}

class Team extends Component {
  render() {
    console.log(this.props.data[0].players);
    console.log(this.props.data[0]);
    const players = this.props.data[0].players.map((player, i) => {
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
        <Team data={DATA1}/>
        <Team data={DATA2}/>
      </div>
    );
  }
}

let DATA1 = [
  {
    name: "Golden Tate Warriors",
    players: [
      {
      id: 1,
      first_name: "Aaron",
      last_name: "Rodgers",
      position: "QB",
      nfl_team: "GNB",
      team_id: 1,
      stats: [
      {
      id: 1,
      pass_yards: 4428,
      pass_tds: 40,
      interceptions: 7,
      rush_yards: 369,
      rush_tds: 4,
      rec_yards: 0,
      rec_tds: 0,
      receptions: 0,
      position_rank: 1,
      fantasy_points: 382,
      player_id: 1,
      created_at: "2017-07-25T20:17:09.047Z",
      updated_at: "2017-07-25T20:17:09.047Z"
      }
      ]
      },
      {
      id: 2,
      first_name: "David",
      last_name: "Johnson",
      position: "RB",
      nfl_team: "ARI",
      team_id: 1,
      stats: [
      {
      id: 2,
      pass_yards: 0,
      pass_tds: 0,
      interceptions: 0,
      rush_yards: 1239,
      rush_tds: 16,
      rec_yards: 879,
      rec_tds: 4,
      receptions: 80,
      position_rank: 1,
      fantasy_points: 328,
      player_id: 2,
      created_at: "2017-07-25T20:17:09.068Z",
      updated_at: "2017-07-25T20:17:09.068Z"
      }
      ]
      },
      {
      id: 3,
      first_name: "Ezekiel",
      last_name: "Elliott",
      position: "RB",
      nfl_team: "DAL",
      team_id: 1,
      stats: [
      {
      id: 3,
      pass_yards: 0,
      pass_tds: 0,
      interceptions: 0,
      rush_yards: 1631,
      rush_tds: 15,
      rec_yards: 363,
      rec_tds: 1,
      receptions: 32,
      position_rank: 2,
      fantasy_points: 293,
      player_id: 3,
      created_at: "2017-07-25T20:17:09.074Z",
      updated_at: "2017-07-25T20:17:09.074Z"
      }
      ]
      },
      {
      id: 4,
      first_name: "Mike",
      last_name: "Evans",
      position: "WR",
      nfl_team: "TAM",
      team_id: 1,
      stats: [
      {
      id: 4,
      pass_yards: 0,
      pass_tds: 0,
      interceptions: 0,
      rush_yards: 0,
      rush_tds: 0,
      rec_yards: 1321,
      rec_tds: 12,
      receptions: 96,
      position_rank: 1,
      fantasy_points: 208,
      player_id: 4,
      created_at: "2017-07-25T20:17:09.080Z",
      updated_at: "2017-07-25T20:17:09.080Z"
      }
      ]
      },
      {
      id: 5,
      first_name: "Jordy",
      last_name: "Nelson",
      position: "WR",
      nfl_team: "GNB",
      team_id: 1,
      stats: [
      {
      id: 5,
      pass_yards: 0,
      pass_tds: 0,
      interceptions: 0,
      rush_yards: 0,
      rush_tds: 0,
      rec_yards: 1257,
      rec_tds: 14,
      receptions: 97,
      position_rank: 2,
      fantasy_points: 208,
      player_id: 5,
      created_at: "2017-07-25T20:17:09.085Z",
      updated_at: "2017-07-25T20:17:09.085Z"
      }
      ]
      },
      {
      id: 6,
      first_name: "Antonio",
      last_name: "Brown",
      position: "WR",
      nfl_team: "PIT",
      team_id: 1,
      stats: [
      {
      id: 6,
      pass_yards: 0,
      pass_tds: 0,
      interceptions: 0,
      rush_yards: 9,
      rush_tds: 0,
      rec_yards: 1284,
      rec_tds: 12,
      receptions: 106,
      position_rank: 3,
      fantasy_points: 207,
      player_id: 6,
      created_at: "2017-07-25T20:17:09.090Z",
      updated_at: "2017-07-25T20:17:09.090Z"
      }
      ]
      },
      {
      id: 7,
      first_name: "Travis",
      last_name: "Kelce",
      position: "TE",
      nfl_team: "KAN",
      team_id: 1,
      stats: [
      {
      id: 7,
      pass_yards: 0,
      pass_tds: 0,
      interceptions: 0,
      rush_yards: -5,
      rush_tds: 0,
      rec_yards: 1125,
      rec_tds: 4,
      receptions: 85,
      position_rank: 1,
      fantasy_points: 138,
      player_id: 7,
      created_at: "2017-07-25T20:17:09.096Z",
      updated_at: "2017-07-25T20:17:09.096Z"
      }
      ]
      }
    ]
  }
]

  let DATA2 = [
    {
name: "Little Red Fournette",
players: [
{
id: 8,
first_name: "Matt",
last_name: "Ryan",
position: "QB",
nfl_team: "ATL",
team_id: 2,
stats: [
{
id: 8,
pass_yards: 4944,
pass_tds: 38,
interceptions: 7,
rush_yards: 117,
rush_tds: 0,
rec_yards: 0,
rec_tds: 0,
receptions: 0,
position_rank: 2,
fantasy_points: 355,
player_id: 8,
created_at: "2017-07-25T20:17:09.103Z",
updated_at: "2017-07-25T20:17:09.103Z"
}
]
},
{
id: 9,
first_name: "LeSean",
last_name: "McCoy",
position: "RB",
nfl_team: "BUF",
team_id: 2,
stats: [
{
id: 9,
pass_yards: 0,
pass_tds: 0,
interceptions: 0,
rush_yards: 1267,
rush_tds: 13,
rec_yards: 356,
rec_tds: 1,
receptions: 50,
position_rank: 3,
fantasy_points: 248,
player_id: 9,
created_at: "2017-07-25T20:17:09.109Z",
updated_at: "2017-07-25T20:17:09.109Z"
}
]
},
{
id: 10,
first_name: "DeMarco",
last_name: "Murray",
position: "RB",
nfl_team: "TEN",
team_id: 2,
stats: [
{
id: 10,
pass_yards: 10,
pass_tds: 1,
interceptions: 0,
rush_yards: 1287,
rush_tds: 9,
rec_yards: 377,
rec_tds: 3,
receptions: 53,
position_rank: 4,
fantasy_points: 243,
player_id: 10,
created_at: "2017-07-25T20:17:09.116Z",
updated_at: "2017-07-25T20:17:09.116Z"
}
]
},
{
id: 11,
first_name: "Odell",
last_name: "Beckham",
position: "WR",
nfl_team: "NYG",
team_id: 2,
stats: [
{
id: 11,
pass_yards: 0,
pass_tds: 0,
interceptions: 0,
rush_yards: 9,
rush_tds: 0,
rec_yards: 1367,
rec_tds: 10,
receptions: 101,
position_rank: 4,
fantasy_points: 196,
player_id: 11,
created_at: "2017-07-25T20:17:09.121Z",
updated_at: "2017-07-25T20:17:09.121Z"
}
]
},
{
id: 12,
first_name: "T.Y.",
last_name: "Hilton",
position: "WR",
nfl_team: "IND",
team_id: 2,
stats: [
{
id: 12,
pass_yards: 0,
pass_tds: 0,
interceptions: 0,
rush_yards: 0,
rush_tds: 0,
rec_yards: 1448,
rec_tds: 6,
receptions: 91,
position_rank: 5,
fantasy_points: 185,
player_id: 12,
created_at: "2017-07-25T20:17:09.126Z",
updated_at: "2017-07-25T20:17:09.126Z"
}
]
},
{
id: 13,
first_name: "Julio",
last_name: "Jones",
position: "WR",
nfl_team: "ATL",
team_id: 2,
stats: [
{
id: 13,
pass_yards: 0,
pass_tds: 0,
interceptions: 0,
rush_yards: 0,
rush_tds: 0,
rec_yards: 1409,
rec_tds: 6,
receptions: 83,
position_rank: 6,
fantasy_points: 179,
player_id: 13,
created_at: "2017-07-25T20:17:09.131Z",
updated_at: "2017-07-25T20:17:09.131Z"
}
]
},
{
id: 14,
first_name: "Greg",
last_name: "Olsen",
position: "TE",
nfl_team: "CAR",
team_id: 2,
stats: [
{
id: 14,
pass_yards: 0,
pass_tds: 0,
interceptions: 0,
rush_yards: 0,
rush_tds: 0,
rec_yards: 1073,
rec_tds: 3,
receptions: 80,
position_rank: 2,
fantasy_points: 131,
player_id: 14,
created_at: "2017-07-25T20:17:09.137Z",
updated_at: "2017-07-25T20:17:09.137Z"
}
]
}
]
}
  ]

export default App;
