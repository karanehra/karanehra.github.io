function noise(x: i32, y: i32, s: i32 = 1): f64 {
  NativeMath.seedRandom(
    (<u32>Math.floor(x / s) - 2) * 3888 +
      (<u32>Math.floor(y / s) - 9) * 433 +
      <u32>Math.floor(x / s) * <u32>Math.floor(y / s) * 900 * 11
  );
  return NativeMath.random();
}

function overlappedNoise(x: i32, y: i32): u32 {
  let a1 = noise(x, y, 1);
  let a2 = noise(x, y, 5);
  let a3 = noise(x, y, 10);
  let a4 = noise(x, y, 20);
  let final = <u32>(((a3 * 5 + a1 * 20 + a2 * 10 + a4) / 36) * 0xffffffff);
  return final > 947483647 ? 0xff000000 : 0xffffffff;
}

let width: i32, height: i32;
let offsetX: i32, offsetY: i32;

export function init(w: i32, h: i32): void {
  width = w;
  height = h;
  offsetX = 0;
  offsetY = 0;
  createPerlinGradients();
}

export function translate(x: i32, y: i32): void {
  offsetX += x;
  offsetY += y;
}

export function populate(): void {
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      store<u32>(
        (i + j * width) << 2,
        calculatePerlinValue(i + offsetX, j + offsetY)
      );
    }
  }
}

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

function calculatePerlinValue(x: i32, y: i32): i32 {
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

  return <i32>(((s + t + u + v) / 4) * 1251231);
}

class TwoDArray<T> {
  width: i32;
  height: i32;
  data: T[];
  constructor(width: i32, height: i32) {
    this.width = width;
    this.height = height;
    this.data = new Array<T>(width * height);
  }

  set(x: i32, y: i32, v: T): void {
    this.data[x + y * this.width] = v;
  }

  get(x: i32, y: i32): T {
    return this.data[x + y * this.width];
  }
}

function randomizer() {
  return Math.random() * 255;
}

function diamondSquare(size: u32): void {
  size = size % 2 === 0 ? size + 1 : size;
  let data = new TwoDArray<i32>(size, size);
  data.set(0, 0, <i32>randomizer());
  data.set(0, size - 1, <i32>randomizer());
}
