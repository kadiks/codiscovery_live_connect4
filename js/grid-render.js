// Display grid

const rToken = 35;
const paddingToken = 5;
const redColor = "#C70000";
const yellowColor = "gold";

const drawBoard = () => {
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  ctx.fillStyle = "#000b8c";
  ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);
  //   ctx.fill();

  for (let x = 0; x < grid[0].length; x++) {
    for (let y = 0; y < grid.length; y++) {
      putTokenByCoords({
        colIndex: x,
        rowIndex: y,
      });
    }
  }
};

const displayGrid = () => {
  console.table(grid);
  //   let isRed = true;
  for (let x = 0; x < grid[0].length; x++) {
    for (let y = 0; y < grid.length; y++) {
      if (grid[y][x] !== null) {
        putTokenByCoords({
          colIndex: x,
          rowIndex: y,
          color: grid[y][x],
        });
      }
    }
  }
};

const drawWinner = (color) => {
  //   ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);
  //   ctx.fillStyle = color;
  document.querySelector(
    "h2"
  ).innerText = `${currentColor} has won. Type the space bar to restart`;
};

const putTokenByCoords = ({ colIndex, rowIndex, color = null }) => {
  const colOffset = 58;
  const rowOffset = 50;
  ctx.beginPath();
  ctx.arc(
    colIndex * rToken * 2 + colIndex * paddingToken * 2 + colOffset,
    rowIndex * rToken * 2 + rowIndex * paddingToken * 2 + rowOffset,
    rToken,
    0,
    2 * Math.PI
  );

  console.log("color", color);
  if (color) {
    ctx.fillStyle = color === "R" ? redColor : yellowColor;
    ctx.fill();
  }

  ctx.stroke();
};
