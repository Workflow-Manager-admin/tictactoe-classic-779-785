/**
 * Checks if the current board state has a winner
 * 
 * @param {Array<string|null>} squares - Current board state
 * @returns {string|null} - Returns 'X', 'O', or null if no winner
 */
// PUBLIC_INTERFACE
export const calculateWinner = (squares) => {
  // Define all possible winning combinations (rows, columns, diagonals)
  const lines = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal top-left to bottom-right
    [2, 4, 6], // diagonal top-right to bottom-left
  ];

  // Check each winning line
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // If all three positions have the same non-null value, we have a winner
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Return 'X' or 'O'
    }
  }
  
  return null; // No winner yet
};

/**
 * Checks if the game is a draw (all squares filled with no winner)
 * 
 * @param {Array<string|null>} squares - Current board state
 * @returns {boolean} - True if game is a draw, false otherwise
 */
// PUBLIC_INTERFACE
export const isDraw = (squares) => {
  // If all squares are filled (no null values) and there's no winner, it's a draw
  return !squares.includes(null) && !calculateWinner(squares);
};

/**
 * Gets the game status message based on current state
 * 
 * @param {string|null} winner - The winner ('X', 'O', or null)
 * @param {boolean} isDraw - Whether the game is a draw
 * @param {boolean} xIsNext - Whether X is the next player
 * @returns {string} - Status message to display
 */
// PUBLIC_INTERFACE
export const getGameStatus = (winner, isDraw, xIsNext) => {
  if (winner) {
    return `Winner: ${winner}`;
  } else if (isDraw) {
    return 'Game ended in a draw!';
  } else {
    return `Next player: ${xIsNext ? 'X' : 'O'}`;
  }
};
