import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';
import Counter from './Counter';
import Icon from './Icon'; 

class Player extends PureComponent {

  static propTypes = {
    index: PropTypes.number.isRequired
  };

  render() { 
    const { index } = this.props;

    return (
      <div className="player">
        <Consumer>
          { ({ actions, players }) => (
            <span className="player-name">
              <button className="remove-player" onClick={() => actions.removePlayer(players[index].id)}>✖</button>
              <Icon isHighScore={actions.highScore(players[index].id) === players[index].score}/>
              { players[index].name }
            </span> 
          ) }
        </Consumer>
  
        <Counter index={index} />
      </div>
    );
  }
}

export default Player;