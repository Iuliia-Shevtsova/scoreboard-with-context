import React, { useState } from 'react';

export const ScoreboardContext = React.createContext()
let id = 0;

export const Provider = (props) => {
  const [players, setPlayers] = useState([]);

  const handleScoreChange = (index, delta) => {
    setPlayers(prevState => {
      const updatedPlayers = [ ...prevState ];
      const updatedPlayer = { ...updatedPlayers[index] };

      updatedPlayer.score += delta;
      updatedPlayers[index] = updatedPlayer;

      return updatedPlayers;
    });
  };

  const handleAddPlayer = (name) =>  {
    setPlayers(prevState => {
      return [
        ...prevState, 
        {
          name,
          score: 0,
          id: id += 1
        }
      ]
    });    
  };

  const handleRemovePlayer = (id) => { 
    setPlayers( prevState => prevState.filter(p => p.id !== id) );
  };

  return (
    <ScoreboardContext.Provider value={{ 
      players,
      actions: {
        changeScore: handleScoreChange,
        addPlayer: handleAddPlayer,
        removePlayer: handleRemovePlayer
      }
    }}>
      { props.children }
    </ScoreboardContext.Provider>
  );
};