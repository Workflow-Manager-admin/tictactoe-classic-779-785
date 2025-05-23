import React from 'react';
import './Square.css';

/**
 * Square component represents a single cell in the TicTacToe grid
 * 
 * @param {object} props - Component props
 * @param {string|null} props.value - The value to display (X, O, or null)
 * @param {function} props.onClick - Function called when square is clicked
 */
// PUBLIC_INTERFACE
const Square = ({ value, onClick }) => {
  return (
    <button 
      className="square" 
      onClick={onClick}
      aria-label={value ? `Square with ${value}` : "Empty square"}
    >
      {value}
    </button>
  );
};

export default Square;
