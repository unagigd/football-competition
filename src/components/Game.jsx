import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

class Game extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() { 
    const { host, guest } = this.props;

    return (
      <section>
        <span>
          <Input label={ host.team.name } value={host.scored} />
        </span>
        <span>
          <Input label={ guest.team.name } value={guest.scored} />
        </span>
      </section>
    )
  }
}
 
export default Game;
