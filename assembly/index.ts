export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function noise(a: i32, b: i32): i64 {
  NativeMath.seedRandom(
    i64(
      889.0 * Math.abs(a) +
        800.0 * Math.abs(b) +
        223.0 * a * b +
        11 * a +
        90 * b +
        8
    )
  );
  return i64(NativeMath.random() * 0xffffffff) | 0xff000000;
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

export function populate(): void {
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      store<i32>((i + j * width) << 2, noise(i + offsetX, j + offsetY));
    }
  }
}
