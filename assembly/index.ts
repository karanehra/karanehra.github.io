export function add(a: i32, b: i32): i32 {
  return a + b;
}

function mult(a: number[], b: string[]): f64 {
  let x1 = parseFloat(b[0]);
  let y1 = parseFloat(b[1]);
  return a[0] * (x1 - a[0]) + a[1] * (y1 - a[1]);
}

export function noisePerlin(a: i32, b: i32): i64 {
  let pt0 = gradients[width * b + a].split("-");
  let pt1 = gradients[width * b + a + 1].split("-");
  let pt2 = gradients[width * (b + 1) + a].split("-");
  let pt3 = gradients[width * (b + 1) + (a + 1)].split("-");
  let center = [
    parseFloat(pt0[0] + pt3[0]) / 2,
    parseFloat(pt0[1] + pt3[1]) / 2,
  ];
  let a1 = mult(center, pt0);
  let a2 = mult(center, pt1);
  let a3 = mult(center, pt2);
  let a4 = mult(center, pt3);

  // return i64(NativeMath.random() * 0xffffffff) | 0xff000000;
  return i64(((a1 + a2 + a3 + a4) / 4) * 0xffffffff) | 0xff000000;
}

function noise(x: i32, y: i32, s: i32 = 1): u32 {
  NativeMath.seedRandom(
    (<u32>Math.floor(x / s) - 2) * 3888 +
      (<u32>Math.floor(y / s) - 9) * 433 +
      <u32>Math.floor(x / s) * <u32>Math.floor(y / s) * 900 * 11
  );
  return (<u32>(NativeMath.random() * 0xffffffff)) | 0xff000000;
}

function overlappedNoise(x: i32, y: i32): u32 {
  let a1 = noise(x, y, 1);
  let a2 = noise(x, y, 4);
  let a3 = noise(x, y, 10);
  let a4 = noise(x, y, 5);
  return <u32>((2 * a1 + a2 + a3 + a4) / 5) > 0x7fffffff
    ? 0xffffffff
    : 0xff000000;
}

let width: i32, height: i32;
let offsetX: i32, offsetY: i32;

export function init(w: i32, h: i32): void {
  width = w;
  height = h;
  offsetX = 0;
  offsetY = 0;
}

export function translate(x: i32, y: i32): void {
  offsetX += x;
  offsetY += y;
}

let gradients = new Array<string>();

function createPerlinGradients(): void {
  gradients = new Array<string>(width * height);
  for (let i = 0; i < gradients.length; i++) {
    let x = Math.random();
    let y = Math.random();
    gradients[i] = `${x}-${y}`;
  }
}

export function populate(): void {
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      store<u32>(
        (i + j * width) << 2,
        overlappedNoise(i + offsetX, j + offsetY)
      );
    }
  }
}
