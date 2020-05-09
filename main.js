let wasmExports;

/**
 * Setups all shiz
 * @param {WebAssembly.WebAssemblyInstantiatedSource} res The webassembly load res
 */
function setupData(res) {
  wasmExports = res.instance.exports;
  console.log(wasmExports);
}

function add(a, b) {
  console.log(wasmExports.add(a, b));
}

function getRandomInt() {
  console.log(wasmExports.getRandomInt());
}

let cvs = document.getElementById("cvs");
let ctx = cvs.getContext("2d");
let { width, height } = cvs.getBoundingClientRect();
console.log(width, height);

let size = width * height;
ctx.imageSmoothingEnabled = false;
let imageData = ctx.createImageData(width, height);
let mem = new Uint32Array(imageData.data.buffer);
console.log(mem);
let i = 0,
  j = 0;
(function render() {
  requestAnimationFrame(render);
  mem.set([0xff00ffff], i + j * width);
  console.log(i, width);
  i++;
  if (i > width / 3) {
    i = 0;
    j++;
  }
  ctx.putImageData(imageData, 0, 0); // apply image buffer
})();
