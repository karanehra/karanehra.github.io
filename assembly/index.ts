export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function noise(a: i32, b: i32): i32 {
  return i32(i32(Math.random() * 4294967295) | 0xff);
}

let width: i32, height: i32;

export function init(w: i32, h: i32): void {
  width = w;
  height = h;
}

export function populate(): void {}
