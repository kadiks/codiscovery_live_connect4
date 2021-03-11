// Define HTML els
// Set up player & color
let canvasEl = null;
let ctx = null;
let currentColor = "R";
let isPlaying = true;
const defaultGrid = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, "R", null],
  [null, null, null, null, "R", "Y", null],
  [null, null, null, "R", "R", "Y", null],
  [null, null, "R", "Y", "Y", "Y", null],
];
let grid = JSON.parse(JSON.stringify(defaultGrid));
// Change color every round
const toggleColor = () => {
  currentColor = currentColor === "R" ? "Y" : "R";
};

// Opt: Check draw
// Opt: Add AI

const init = () => {
  attachFromDOM();
  addEventListeners();

  drawBoard();
  displayGrid();
  // checkWin({ grid, color: "Y" });
  // console.table(grid);
  // ctx.translate(50, 50);
};

const attachFromDOM = () => {
  canvasEl = document.querySelector("#canvas");
  ctx = canvasEl.getContext("2d");
};

const addEventListeners = () => {
  // Add event listeners
  // // Get input from keyboard to play
  // <el>.addEventListener(<eventName: String>, Callback:Function(event) );
  console.log("#addEventListeners");
  document.addEventListener("keyup", onKeyUp);
};

window.addEventListener("load", init);
