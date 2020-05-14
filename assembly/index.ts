function noise(x: u32, y: u32, s: u32 = 1): f64 {
  NativeMath.seedRandom(
    (<u32>Math.floor(x / s) - 2) * 3888 +
      (<u32>Math.floor(y / s) - 9) * 433 +
      <u32>Math.floor(x / s) * <u32>Math.floor(y / s) * 900 * 11
  );
  return NativeMath.random();
}

function overlappedNoise(x: u32, y: u32): u32 {
  let a1 = noise(x, y, 1);
  let a2 = noise(x, y, 5);
  let a3 = noise(x, y, 10);
  let a4 = noise(x, y, 20);
  let final = <u32>(((a3 * 5 + a1 * 20 + a2 * 10 + a4) / 36) * 0xffffffff);
  return final > 947483647 ? 0xff000000 : 0xffffffff;
}

let width: u32, height: u32;
let offsetX: u32, offsetY: u32;

export function init(w: u32, h: u32): void {
  width = w;
  height = h;
  offsetX = 0;
  offsetY = 0;
  createPerlinGradients();
}

export function translate(x: u32, y: u32): void {
  offsetX += x;
  offsetY += y;
}

// export function populate(): void {
//   for (let i = 0; i < width; i++) {
//     for (let j = 0; j < height; j++) {
//       store<u32>(
//         (i + j * width) << 2,
//         calculatePerlinValue(i + offsetX, j + offsetY)
//       );
//     }
//   }
// }

let gradientsX: f32[];
let gradientsY: f32[];

function createPerlinGradients(): void {
  gradientsX = new Array<f32>((width + 2) * (height + 2));
  gradientsY = new Array<f32>((width + 2) * (height + 2));
  for (let i = 0; i < gradientsX.length; i++) {
    let x = Math.random();
    let y = Math.random();
    let mod = Math.sqrt(x * x + y * y);
    gradientsX[i] = f32(x / mod);
    gradientsY[i] = f32(y / mod);
  }
}

function calculatePerlinValue(x: u32, y: u32): u32 {
  let xs = new Array<f32>(4);
  xs.push(gradientsX[x + y * width]);
  xs.push(gradientsX[x + 1 + y * width]);
  xs.push(gradientsX[x + (y + 1) * width]);
  xs.push(gradientsX[x + 1 + (y + 1) * width]);

  let ys = new Array<f32>(4);
  ys.push(gradientsY[x + y * width]);
  ys.push(gradientsY[x + 1 + y * width]);
  ys.push(gradientsY[x + (y + 1) * width]);
  ys.push(gradientsY[x + 1 + (y + 1) * width]);

  let centerX = x + 0.5;
  let centerY = y + 0.5;

  let diffX = [0.5, -0.5, 0.5, -0.5];
  let diffY = [0, 0.5, -0.5, -0.5];

  let s = xs[0] * diffX[0] + ys[0] * diffY[0];
  let t = xs[1] * diffX[1] + ys[1] * diffY[1];
  let u = xs[2] * diffX[2] + ys[2] * diffY[2];
  let v = xs[3] * diffX[3] + ys[3] * diffY[3];

  return <u32>(((s + t + u + v) / 4) * 1251231);
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
let max = 0xffffffff;

function randomizer(max: u32 = 0xffffffff): u32 {
  return <u32>Math.floor(NativeMath.random() * 255);
  // return <u32>Math.floor(NativeMath.random() * max) > 222142333
  //   ? 0xff000000
  //   : 0xffffffff;
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

  let center = (m1 + m2 + m3 + m4 + randomizer()) / 5;

  data.set(size / 2, size / 2, center);

  data.set(0, size / 2, (m1 + m2 + center + randomizer()) / 4);
  data.set(size / 2, size, (m2 + m4 + center + randomizer()) / 4);
  data.set(size / 2, 0, (m1 + m3 + center + randomizer()) / 4);
  data.set(size, size / 2, (m3 + m4 + center + randomizer()) / 4);

  dsRecursive(0, 0, size / 2);
  dsRecursive(0, size / 2, size / 2);
  dsRecursive(size / 2, 0, size / 2);
  dsRecursive(size / 2, size / 2, size / 2);
}

function dsRecursive(x: u32, y: u32, size: u32): void {
  if (size > 1) {
    let m1 = data.get(x, y);
    let m2 = data.get(x, y + size);
    let m3 = data.get(x + size, y);
    let m4 = data.get(x + size, y + size);
    let center = (m1 + m2 + m3 + m4) / 4;

    data.set(size / 2, size / 2, center);

    data.set(x, y + size / 2, (m1 + m2 + center + randomizer()) / 4);
    data.set(x + size / 2, y, (m2 + m4 + center + randomizer()) / 4);
    data.set(x + size / 2, y + size, (m1 + m3 + center + randomizer()) / 4);
    data.set(x + size, y + size / 2, (m3 + m4 + center + randomizer()) / 4);

    dsRecursive(x, y, size / 2);
    dsRecursive(x + size / 2, y, size / 2);
    dsRecursive(x, y + size / 2, size / 2);
    dsRecursive(x + size / 2, y + size / 2, size / 2);
  }
}

export function populate(): void {
  let width: u32 = 512;
  diamondSquare(width);
  for (let i: u32 = 0; i < width; i++) {
    for (let j: u32 = 0; j < width; j++) {
      store<u32>((i + j * width) << 2, data.get(i, j) | 0xff000000);
    }
  }
}
