let totalSize: u32;

let dataBlock: u32[];

export function init(size: u32): void {
  totalSize = size;
  dataBlock = new Array<u32>(size * size);
  for (let i: u32 = 0; i < size * size; i++) {
    if (i % size == 150) {
      dataBlock[i] = 0xff00ff00;
    } else {
      dataBlock[i] = 0xff000000;
    }
  }
  drawCircle(30, 30, 1);
}

function getDataFromBlock(i: u32, j: u32): u32 {
  return dataBlock[i + j * totalSize];
}

function setDataInBlock(i: u32, j: u32, v: u32): void {
  dataBlock[i + j * totalSize] = v;
}

export function populate(): void {
  for (let i: u32 = 0; i < totalSize; i++) {
    for (let j: u32 = 0; j < totalSize; j++) {
      store<u32>((i + j * totalSize) << 2, getDataFromBlock(i, j));
    }
  }
}

// failing for some reason
function drawCircle(cx: u32, cy: u32, cr: u32): void {
  setDataInBlock(cx + cr, cy, 0xff00ff00);
  setDataInBlock(cx, cy + cr, 0xff00ff00);
  setDataInBlock(cx, cy - cr, 0xff00ff00);
}
