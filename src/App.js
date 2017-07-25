import React, { Component } from 'react';
import './App.css';
import Team from './Team.jsx'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
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

  render() {
    return (
      <div className="App">
        <Team data={this.state.data1} />
        <Team data={this.state.data2} />
      </div>
    );
  }
}


export default App;
