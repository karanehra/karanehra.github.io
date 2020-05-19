let totalSize: u32;

type oneDArray = Array<u32>;

let dataBlock: u32[][];

export function init(size: u32): void {
  totalSize = size;
  dataBlock = new Array<u32[]>(size);
  let a: oneDArray = new Array<u32>(size).fill(0xffffffff);
  let b = new Array<u32>(size).fill(0xff000000);
  for (let i: u32 = 0; i < size; i++) {
    if (i == 150) {
      dataBlock[i] = a;
    } else {
      dataBlock[i] = b;
    }
  }
  drawCircle(30, 30, 10);
}

export function populate(): void {
  for (let i: u32 = 0; i < totalSize; i++) {
    for (let j: u32 = 0; j < totalSize; j++) {
      store<u32>((i + j * totalSize) << 2, unchecked(dataBlock[j][i]));
    }
  }
}

function drawCircle(cx: u32, cy: u32, cr: u32): void {
  let startX = cx - cr - 1;
  let endX = cx + cr - 1;
  for (let i: u32 = startX; i < endX; i++) {
    if (!(i < 0 || i >= totalSize)) {
      let y = <i32>Math.floor(Math.sqrt((cr ^ 2) / ((i - cx) ^ 2) + cy));
      dataBlock[i][cy + y] = 0xff00ff00;
      dataBlock[i][cy - y] = 0xff00ff00;
    }
  }
}
