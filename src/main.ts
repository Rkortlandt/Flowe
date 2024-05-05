import './style.css'


interface CellCord {
  X: number,
  Y: number,
}

interface GridCord {
  X: number,
  Y: number,
}

interface CanvasCord {
  X: number,
  Y: number,
}

const canvasWrapper = document.querySelector<HTMLDivElement>('#canvas-wrapper');

if (canvasWrapper == null) throw Error("No canvas wrapper element");

const canvasHeight: number = Math.floor(canvasWrapper.clientHeight);
const canvasWidth: number = Math.floor(canvasWrapper.clientWidth);

canvasWrapper.innerHTML = `
  <canvas id="static-canvas" class="absolute top-0 left-0" height=${canvasHeight} width=${canvasWidth}></canvas>
  <canvas id="reactive-canvas" class="absolute top-0 left-0" height=${canvasHeight} width=${canvasWidth}></canvas>
`

const staticCanvas = document.querySelector<HTMLCanvasElement>('#static-canvas');
const reactiveCanvas = document.querySelector<HTMLCanvasElement>('#reactive-canvas');

if (staticCanvas == null || reactiveCanvas == null) throw Error("Failed to create canvas");

const sctx = staticCanvas.getContext("2d");
const rctx = reactiveCanvas.getContext("2d");

if (sctx == null || rctx == null) throw Error("Failed to create canvas context");

const gridCellSize: number = 16;

const gridRowsCellCount: number = Math.floor(canvasWidth / gridCellSize);
const gridColsCellCount: number = Math.floor(canvasHeight / gridCellSize);

function getCellUpperLeft(gridCord: GridCord): CanvasCord {
  return {
    X: (gridCord.X * gridCellSize),
    Y: (gridCord.Y * gridCellSize),
  }
}

function getCellUpperRight(gridCord: GridCord): CanvasCord {
  return {
    X: (gridCord.X * gridCellSize) + gridCellSize,
    Y: (gridCord.Y * gridCellSize),
  }
}

function getCellBottomLeft(gridCord: GridCord): CanvasCord {
  return {
    X: (gridCord.X * gridCellSize),
    Y: (gridCord.Y * gridCellSize) + gridCellSize,
  }
}

function getCellBottomRight(gridCord: GridCord): CanvasCord {
  return {
    X: (gridCord.X * gridCellSize) + gridCellSize,
    Y: (gridCord.Y * gridCellSize) + gridCellSize,
  }
}

sctx.strokeStyle = 'white';
for (let x = 0; x < gridRowsCellCount; x++) {
  for (let y = 0; y < gridColsCellCount; y++) {
    sctx.beginPath();
    let ul = getCellUpperLeft({X: x, Y: y});
    let ur = getCellUpperRight({X: x, Y: y});
    let bl = getCellBottomLeft({X: x, Y: y});
    let br = getCellBottomRight({X: x, Y: y});
    sctx.lineTo(ur.X, ur.Y);
   // sctx.lineTo(br.X, br.Y);
    //sctx.lineTo(bl.X, bl.Y);
    sctx.lineTo(ul.X, ul.X);
    sctx.stroke();
  }
}

sctx.strokeStyle = "grey"

