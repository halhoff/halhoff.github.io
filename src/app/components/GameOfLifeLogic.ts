export default class GameOfLifeLogic {
  width: number;
  height: number;
  grid: number[][];

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.grid = this.createGrid();
  }

  createGrid(): number[][] {
    const grid: number[][] = [];
    for (let i = 0; i < this.height; ++i) {
      grid.push([]);
      for (let j = 0; j < this.width; ++j) {
        grid[i].push(Math.random() > 0.8 ? 1 : 0);
      }
    }
    return grid;
  }

  getNeighbors(i: number, j: number): number {
    const neighbors: number[][] = [
      [-1, -1], [0, -1], [1, -1], [-1, 0],
      [1, 0], [-1, 1], [0, 1], [1, 1]
    ];
    let count = 0;
    neighbors.forEach(([di, dj]) => {
      const ci = i + di;
      const cj = j + dj;
      if (ci >= 0 && ci < this.width && cj >= 0 && cj < this.height) {
        count += this.grid[cj][ci];
      }
    });
    return count;
  }

  update(): void {
    const newGrid = this.createGrid();
    for (let i = 0; i < this.height; ++i) {
      for (let j = 0; j < this.width; ++j) {
        const neighbors = this.getNeighbors(j, i);
        if (this.grid[i][j] === 1) {
          newGrid[i][j] = neighbors === 2 || neighbors === 3 ? 1 : 0;
        }
        else {
          newGrid[i][j] = neighbors === 3 ? 1 : 0;
        }
      }
    }
    this.grid = newGrid;
  }

  getGrid(): number[][] {
    return this.grid;
  }
}