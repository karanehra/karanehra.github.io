let gradientsX: f32[];
let gradientsY: f32[];
let width: i32, height: i32;
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
