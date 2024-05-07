import { getCellBottomLeft, getCellBottomRight, getCellUpperLeft, getCellUpperRight } from "./cell";
import { gridRowsCellCount, gridColsCellCount } from "./cell";
import { getSctx } from "./main";

export default function () {
  var sctx = getSctx();
  sctx.strokeStyle = 'white';
  for (let x = 0; x < gridRowsCellCount; x++) {
    for (let y = 0; y < gridColsCellCount; y++) {
      sctx.beginPath();
      let ul = getCellUpperLeft({ X: x, Y: y });
      let ur = getCellUpperRight({ X: x, Y: y });
      let bl = getCellBottomLeft({ X: x, Y: y });
      let br = getCellBottomRight({ X: x, Y: y });
      sctx.moveTo(ur.X, ur.Y);
      sctx.lineTo(br.X, br.Y);
      sctx.lineTo(bl.X, bl.Y);
      sctx.lineTo(ul.X, ul.Y);
      sctx.lineTo(ur.X, ur.Y);
      sctx.stroke();
      // sctx.lineTo(ul.X, ul.X);
      // sctx.stroke();
    }
  }
}