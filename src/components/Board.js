import React from 'react';
import Square from './Square';
import './Board.css';

/**
 * Board component renders the 3x3 grid of squares
 * 
 * @param {object} props - Component props
 * @param {Array<string|null>} props.squares - Array of 9 items representing the board state
 * @param {function} props.onClick - Function called when a square is clicked
 */
// PUBLIC_INTERFACE
const Board = ({ squares, onClick }) => {
  const renderSquare = (i) => {
    return (
      <Square 
        value={squares[i]}
        onClick={() => onClick(i)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
