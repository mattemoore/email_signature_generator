import React, { useState } from 'react';
import './App.css';

function App(): JSX.Element {
  const [squares, setSquares] = useState<Array<string | null>>(
    Array<string | null>(9).fill(null)
  );

  function onSquareClick(index: number): void {
    const currentSquares: Array<string | null> = squares.slice();
    currentSquares[index] = 'X';
    setSquares(currentSquares);
  }

  return (
    <>
      <div className="flex flex-row">
        <Square label={squares[0]} index={0} onSquareClick={onSquareClick} />
        <Square label={squares[1]} index={1} onSquareClick={onSquareClick} />
        <Square label={squares[2]} index={2} onSquareClick={onSquareClick} />
      </div>
      <div className="flex flex-row">
        <Square label={squares[3]} index={3} onSquareClick={onSquareClick} />
        <Square label={squares[4]} index={4} onSquareClick={onSquareClick} />
        <Square label={squares[5]} index={5} onSquareClick={onSquareClick} />
      </div>
      <div className="flex flex-row">
        <Square label={squares[6]} index={6} onSquareClick={onSquareClick} />
        <Square label={squares[7]} index={7} onSquareClick={onSquareClick} />
        <Square label={squares[8]} index={8} onSquareClick={onSquareClick} />
      </div>
    </>
  );
}

function Square({ index, label, onSquareClick }: SquareProps): JSX.Element {
  function onClick(): void {
    onSquareClick(index);
  }
  return (
    <button
      className="text-2xl bg-slate-100/80 w-20 h-20 border"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

interface SquareProps {
  label: string | null;
  index: number;
  onSquareClick: (index: number) => void;
}

export default App;
