let wasmExports;

/**
 * Setups all shiz
 * @param {WebAssembly.WebAssemblyInstantiatedSource} res The webassembly load res
 */
function setupData(res) {
  wasmExports = res.instance.exports;
  console.log(wasmExports);
}

let cvs = document.getElementById("cvs");
let ctx = cvs.getContext("2d");

let { width, height } = cvs.getBoundingClientRect();

ctx.imageSmoothingEnabled = false;

let size = width * height;
let imageData = ctx.createImageData(width, height);
let mem = new Uint32Array(imageData.data.buffer);
let i = 0,
  j = 0;
(function render() {
  requestAnimationFrame(render);
  mem.set([0xff00ffff], i + j * width);
  i++;
  if (i > width) {
    i = 0;
    j++;
  }
  ctx.putImageData(imageData, 0, 0); // apply image buffer
})();

module.exports = { setupData };
