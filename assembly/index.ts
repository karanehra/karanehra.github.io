let width: u32;

const BLACK = 0xff000000;
const WHITE = 0xffffffff;

export function init(w: u32, h: u32): void {
  width = w;
  height = h;
}

class TwoDArray<T> {
  width: u32;
  height: u32;
  data: T[];
  constructor(width: u32, height: u32) {
    this.width = width;
    this.height = height;
    this.data = new Array<T>(width * height);
  }

  set(x: u32, y: u32, v: T): void {
    this.data[x + y * this.width] = v;
  }

  get(x: u32, y: u32): T {
    return this.data[x + y * this.width];
  }
}

let data: TwoDArray<u32>;
NativeMath.seedRandom(10);
let maxima = 0xffffffff;
function randomizer(max: u32 = maxima): u32 {
  return <u32>Math.floor(Math.random() * max);
}

function diamondSquare(size: u32): void {
  size = size % 2 === 0 ? size : size + 1;
  data = new TwoDArray<u32>(size + 1, size + 1);
  let m1 = randomizer();
  let m2 = randomizer();
  let m3 = randomizer();
  let m4 = randomizer();

  data.set(0, 0, m1);
  data.set(0, size, m2);
  data.set(size, 0, m3);
  data.set(size, size, m4);

  let center = (m1 + m2 + m3 + m4) / 4 + randomizer();

  data.set(size / 2, size / 2, center);

  data.set(0, size / 2, (m1 + m2 + center) / 3 + randomizer());
  data.set(size / 2, size, (m2 + m4 + center) / 3 + randomizer());
  data.set(size / 2, 0, (m1 + m3 + center) / 3 + randomizer());
  data.set(size, size / 2, (m3 + m4 + center) / 3 + randomizer());

  dsRecursive(0, 0, size / 2);
  dsRecursive(0, size / 2, size / 2);
  dsRecursive(size / 2, 0, size / 2);
  dsRecursive(size / 2, size / 2, size / 2);
}

function dsRecursive(x: u32, y: u32, size: u32): void {
  if (size > 1) {
    maxima = <u32>(maxima / 20);
    let m1 = data.get(x, y);
    let m2 = data.get(x, y + size);
    let m3 = data.get(x + size, y);
    let m4 = data.get(x + size, y + size);
    let center = (m1 + m2 + m3 + m4) / 4 + randomizer();

    data.set(size / 2, size / 2, center);

    data.set(x, y + size / 2, (m1 + m2 + center) / 3 + randomizer());
    data.set(x + size / 2, y, (m2 + m4 + center) / 3 + randomizer());
    data.set(x + size / 2, y + size, (m1 + m3 + center) / 3 + randomizer());
    data.set(x + size, y + size / 2, (m3 + m4 + center) / 3 + randomizer());

    dsRecursive(x, y, size / 2);
    dsRecursive(x + size / 2, y, size / 2);
    dsRecursive(x, y + size / 2, size / 2);
    dsRecursive(x + size / 2, y + size / 2, size / 2);
  }
}

export function populate(): void {
  diamondSquare(width);
  for (let i: u32 = 0; i < width; i++) {
    for (let j: u32 = 0; j < width; j++) {
      store<u32>(
        (i + j * width) << 2,
        (data.get(i, j) | 0xff000000) > 0xff0ff2f0 ? BLACK : WHITE
      );
    }
  }
}
