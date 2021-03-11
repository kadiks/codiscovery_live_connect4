const onKeyUp = ({ keyCode }) => {
  console.log("onKeyUP");
  if (isPlaying === false && keyCode === 32) {
    console.table(defaultGrid);
    console.table(grid);
    grid = JSON.parse(JSON.stringify(defaultGrid));
    drawBoard();
    document.querySelector("h2").innerText = "Connect 4";
    // displayGrid();
  }
  if (keyCode >= 49 && keyCode <= 55) {
    console.log("Good input");
    const colIndex = keyCode - 49;
    putTokenInGrid({ colIndex, color: currentColor });

    console.log({ currentColor });
    const isWin = checkWin({ grid, color: currentColor });
    if (isWin) {
      isPlaying = false;
      drawWinner();
    } else {
      toggleColor();
    }

    displayGrid();
  }
};
