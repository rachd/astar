const buildMaze = size => {
  let grid = [];
  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      row.push(Math.random() < 0.8 ? 0 : 1);
    }
    grid.push(row);
  }
  return grid;
};

const getPoint = (maze, start = { x: -1, y: -1 }) => {
  const size = maze.length;
  let x;
  let y;
  do {
    x = Math.floor(Math.random() * size);
    y = Math.floor(Math.random() * size);
  } while ((x === start.x && y === start.y) || maze[y][x] === 1);
  return {
    x,
    y
  };
};

const astar = (max, start, end) => {};

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("How big should the maze be? (int): ", size => {
  const maze = buildMaze(size);
  const start = getPoint(maze);
  const end = getPoint(maze, start);
  readline.close();
});
