import React, { Component } from 'react';

const ScoreboardContext = React.createContext();

export class Provider extends Component {

  state = {
    players: [
      {
        name: "Player 1",
        score: 0,
        id: 1
      },
      {
        name: "Player 2",
        score: 0,
        id: 2
      },
      {
        name: "Player 3",
        score: 0,
        id: 3
      },
      {
        name: "Player 4",
        score: 0,
        id: 4
      }
    ]
  };

 // player id counter
 prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      };
    });
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  getHighScore = () => {
    const scores = this.state.players.map( p => p.score );
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    } 
    return null;
  }

  render() {
    return (
      <ScoreboardContext.Provider value={{
        players: this.state.players,
        actions: {
          changeScore: this.handleScoreChange,
          removePlayer: this.handleRemovePlayer,
          addPlayer: this.handleAddPlayer,
          highScore: this.getHighScore
        }
      }}>
        { this.props.children }
      </ScoreboardContext.Provider>
    );
  }  
}

export const Consumer = ScoreboardContext.Consumer;

