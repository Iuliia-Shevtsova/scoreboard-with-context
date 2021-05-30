import React, { useContext } from 'react';
import Player from './Player';
import { ScoreboardContext } from './Context';

const PlayerList = () => {

  const { players } = useContext(ScoreboardContext);

  return (
    <>
      {players.map( (player, index) => 
        <Player 
          key={player.id} 
          index={index}
        />
      )}
    </>
  );
}

export default PlayerList;