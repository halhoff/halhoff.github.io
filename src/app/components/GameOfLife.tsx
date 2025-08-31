'use client'

import React, { useState, useEffect } from 'react';
import GameOfLifeLogic from './GameOfLifeLogic';
import Cell from './Cell';

export default function GameOfLife() {
  const [game, setGame] = useState<GameOfLifeLogic | null>(null);
  const [grid, setGrid] = useState<number[][]>([]);

  useEffect(() => {
    const w = Math.floor(window.innerWidth / 16) - 1;
    const h = Math.floor(document.documentElement.scrollHeight / 16);
    const game = new GameOfLifeLogic(w, h);
    setGame(game);
    setGrid(game.getGrid());
  }, []);

  useEffect(() => {
    if (!game) return;

    const updateGrid = () => {
      game.update();
      setGrid([...game.getGrid()]);
    }

    updateGrid();

    const intervalId = setInterval(updateGrid, 2000);
    return () => clearInterval(intervalId);
  }, [game]);

  const gridTemplateColumns = game ? `repeat(${game.width}, 16px)` : "none";
  const gridTemplateRows = game ? `repeat(${game.height}, 16px)` : "none";

  return (
    <div className="absolute top-0 left-0 w-full h-full grid" style={{ gridTemplateColumns, gridTemplateRows }}>
      {grid.map((row, rowIndex) => 
        row.map((cell, colIndex) => (
          <Cell key={`${rowIndex}-${colIndex}`} alive={cell === 1}/>
        )))}
    </div>
  );
}