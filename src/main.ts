import debug from './debug';
import './style.css'

const canvasWrapper = document.querySelector<HTMLDivElement>('#canvas-wrapper');

if (canvasWrapper == null) throw Error("No canvas wrapper element");

export const canvasHeight: number = Math.floor(canvasWrapper.clientHeight);
export const canvasWidth: number = Math.floor(canvasWrapper.clientWidth);

canvasWrapper.innerHTML = `
  <canvas id="static-canvas" class="absolute top-0 left-0" height=${canvasHeight} width=${canvasWidth}></canvas>
  <canvas id="reactive-canvas" class="absolute top-0 left-0" height=${canvasHeight} width=${canvasWidth}></canvas>
`

const staticCanvas = document.querySelector<HTMLCanvasElement>('#static-canvas');
const reactiveCanvas = document.querySelector<HTMLCanvasElement>('#reactive-canvas');

export function getSctx(): CanvasRenderingContext2D {
  if (staticCanvas == null || reactiveCanvas == null) throw Error("Failed to create canvas");
  const sctx = staticCanvas.getContext("2d");
  if (sctx == null) throw Error("Failed to create canvas"); else return sctx;
}

export function getRctx(): CanvasRenderingContext2D {
  if (reactiveCanvas == null) throw Error("Failed to create canvas");
  const rctx = reactiveCanvas.getContext("2d");
  if (rctx == null) throw Error("Failed to create canvas"); else return rctx;
}

debug();