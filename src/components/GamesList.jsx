import React, { Component } from 'react';
import Game from './Game';

class GamesList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { games } = this.props;

    return (
      <section>
        {games.map(game => (<Game host={game.host} guest={game.guest} />))}
      </section>
    )
  }
}

export default GamesList;
