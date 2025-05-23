import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner, isDraw, getGameStatus } from './utils/gameLogic';
import './TicTacToe.css';

/**
 * TicTacToe is the main container component for the classic game.
 * It manages the game state, player turns, and win conditions.
 */
// PUBLIC_INTERFACE
const TicTacToe = () => {
  // Initialize state for the board (array of 9 null values)
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  // Track which player's turn is next (X or O)
  const [xIsNext, setXIsNext] = useState(true);
  
  // Handle square click
  const handleClick = (i) => {
    // Create a copy of the squares array
    const squaresCopy = [...squares];
    
    // Return early if there's already a winner or square is already filled
    if (calculateWinner(squares) || squaresCopy[i]) {
      return;
    }
    
    // Set the square value based on current player
    squaresCopy[i] = xIsNext ? 'X' : 'O';
    
    // Update state with new squares and switch player turn
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
  };
  
  // Reset the game to initial state
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };
  
  // Determine if there's a winner
  const winner = calculateWinner(squares);
  
  // Determine if the game is a draw
  const gameIsDraw = isDraw(squares);
  
  // Get the current game status message
  const status = getGameStatus(winner, gameIsDraw, xIsNext);
  
  return (
    <div className="tictactoe-container">
      <h1>Tic Tac Toe</h1>
      
      <div className="game">
        <div className="game-board">
          <Board 
            squares={squares}
            onClick={handleClick}
          />
        </div>
        
        <div className="game-info">
          <div className="status">{status}</div>
          <button 
            className="reset-button" 
            onClick={resetGame}
            aria-label="Reset game"
          >
            Reset Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
