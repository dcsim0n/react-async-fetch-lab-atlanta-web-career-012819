// create your App component here

import React, { Component } from 'react'

export default class App extends Component {
    state = {
        message: "",
        number: null,
        people: []
    }
    componentDidMount() {
      fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(data=>this.setState(data))
    }
    
    
  render() {
    return (
    <div>
        <p>Number: {this.state.number}</p>
        <ul>
            {this.state.people.map((p)=> <li>Craft: {p.craft} Name: {p.name}</li>)}
        </ul>
    </div>
    )
  }
}
