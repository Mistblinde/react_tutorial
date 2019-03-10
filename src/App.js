import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26},
    ]

  }

switchNameHandler = () => {
  console.log('Was clicked')
}

  render() {
    return (
      <div className="App">
      <h1>Hi, I'm React App</h1>
      <p>This is really working</p>
      <button onClick={this.switchNameHandler}></button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      </div>
    );
  }
}

export default App;
