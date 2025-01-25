import React, { useState, useEffect } from 'react';
import GameOfLifeLogic from './GameOfLifeLogic.ts';
import Cell from './Cell.tsx';

export default function GameOfLife() {
  const width = Math.floor(window.innerWidth / 16) - 1;
  const [height, setHeight] = useState(0);
  const game = new GameOfLifeLogic(width, height);
  const [grid, setGrid] = useState<number[][]>(game.getGrid());

  const updateGrid = () => {
    game.update();
    setGrid([...game.getGrid()]);
  }

  useEffect(() => {
    setHeight(Math.floor(document.documentElement.scrollHeight / 16));
  }, []);

  useEffect(() => {
    if (height > 0) {
      game.update();
      setGrid([...game.getGrid()]);
      const intervalId = setInterval(updateGrid, 2000);
      return () => clearInterval(intervalId);
    }
  }, [height]);

  const gridTemplateColumns = `repeat(${game.width}, 16px)`;
  const gridTemplateRows = `repeat(${game.height}, 16px)`;

  return (
    <div className="absolute top-0 left-0 w-full h-full grid" style={{ gridTemplateColumns, gridTemplateRows }}>
      {grid.map((row, rowIndex) => 
        row.map((cell, colIndex) => (
          <Cell key={`${rowIndex}-${colIndex}`} alive={cell === 1}/>
        )))}
    </div>
  );
}