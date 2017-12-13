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
          <Input label={ host.name } defaultValue={host.goals} type="number" />
        </span>
        <span>
          <Input label={ guest.name } defaultValue={guest.goals} />
        </span>
      </section>
    )
  }
}
 
export default Game;
