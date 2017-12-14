import React, { Component } from 'react';
import './App.css';
import GamesList from './GamesList';
import Summary from './Summary';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: {
        byId: {
          '1': {
            name: 'Lechia Gdańsk',
          },
          '2': {
            name: 'Wisła Kraków',
          },
          '3': {
            name: 'FC Barcelona',
          },
          '4': {
            name: 'Real Madryt',
          },
        },
        // allIds: ['1'],
      },
      competitions: {
        byId: {
          '1': {
            name: 'Liga Mistrzów',
          },
        },
        // allIds: [],
      },
      games: {
        byId: {
          '1': {
            competition: '1',
            host: {
              team: '1',
              scored: 1,
            },
            guest: {
              team: '4',
              scored: 0,
            },
          },
          '2': {
            competition: '1',
            host: {
              team: '2',
              scored: 2,
            },
            guest: {
              team: '3',
              scored: 3,
            },
          },
        },
        allIds: ['1', '2'],
      },
    };
  }

  render() {
    const games = this.state.games.allIds
      .map(gameId => {
        const game = this.state.games.byId[gameId];
        game.host.team = this.state.teams.byId[game.host.team];
        game.guest.team = this.state.teams.byId[game.guest.team];

        return game;
      })
      .filter(game => game.competition === '1');

    return (
      <div className="App">
        <GamesList games={games} />
        <Summary />
      </div>
    );
  }
}

export default App;
