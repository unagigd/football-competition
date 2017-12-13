import React, { Component } from 'react';
import './App.css';
import GamesList from './GamesList';
import Summary from './Summary';

class App extends Component {
  constructor(props) {
    super(props);

    this.games = [
      {
        host: {
          name: 'Lechia Gdańsk',
          goals: 1,
        },
        guest: {
          name: 'Real Madryt',
        },
      },
      {
        host: {
          name: 'Wisła Kraków',
        },
        guest: {
          name: 'FC Barcelona',
        },
      },
    ];
  }

  render() {
    return (
      <div className="App">
        <GamesList games={this.games} />
        <Summary />
      </div>
    );
  }
}

export default App;
