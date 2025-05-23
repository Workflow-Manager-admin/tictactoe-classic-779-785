import React from 'react';
import TicTacToe from './TicTacToe';
import './App.css';

/**
 * Main App component that renders the TicTacToe game
 */
// PUBLIC_INTERFACE
function App() {
  return (
    <div className="App">
      <TicTacToe />
    </div>
  );
}

export default App;
