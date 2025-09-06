import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="bg-white border 
    border-gray-400 h-12 w-12 
    m-1 leading-9 text-lg"
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);

  function claculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] === squares[b] &&
        squares[a] === squares[c] &&
        squares[a] !== null
      ) {
        return `Winner is : ${squares[a]}`;
      }
    }
    return null;
  }

  const [winner, setWinner] = useState(null);

  function handleClick(index) {
    const nextSquares = squares.slice();
    if (nextSquares[index] === null) {
      if (xIsNext) {
        nextSquares[index] = "X";
        setxIsNext(false);
      } else {
        nextSquares[index] = "O";
        setxIsNext(true);
      }
    }
    setWinner(claculateWinner(nextSquares));
    console.log("From handleClick: ", winner);
    setSquares(nextSquares);
  }

  return (
    <>
      {winner !== null ? <h1>{console.log("Render: ", winner)}</h1> : null}
      <div className="flex">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
