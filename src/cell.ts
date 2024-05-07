import { GridCord, CanvasCord } from "./cord"
import { canvasHeight, canvasWidth } from "./main";

export const gridCellSize: number = 16;
export const gridRowsCellCount: number = Math.floor(canvasWidth / gridCellSize);
export const gridColsCellCount: number = Math.floor(canvasHeight / gridCellSize);

export function getCellUpperLeft(gridCord: GridCord): CanvasCord {
  return {
    X: (gridCord.X * gridCellSize) + 2,
    Y: (gridCord.Y * gridCellSize) + 2,
  }
}

export function getCellUpperRight(gridCord: GridCord): CanvasCord {
  return {
    X: (gridCord.X * gridCellSize) - 2 + gridCellSize,
    Y: (gridCord.Y * gridCellSize) + 2,
  }
}

export function getCellBottomLeft(gridCord: GridCord): CanvasCord {
  return {
    X: (gridCord.X * gridCellSize) + 2,
    Y: (gridCord.Y * gridCellSize) - 2 + gridCellSize,
  }
}

export function getCellBottomRight(gridCord: GridCord): CanvasCord {
  return {
    X: (gridCord.X * gridCellSize) - 2 + gridCellSize,
    Y: (gridCord.Y * gridCellSize) - 2 + gridCellSize,
  }
}