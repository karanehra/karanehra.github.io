const { ctx, width, height } = require("./canvas");
const { wasmMemory } = require("./index");
let wasmExports;

/**
 * Setups all shiz
 * @param {WebAssembly.WebAssemblyInstantiatedSource} res The webassembly load res
 */
function setupData(res) {
  wasmExports = res.instance.exports;
  wasmExports.init(width, height);
  console.log(wasmExports);
}
// ctx.imageSmoothingEnabled = false;

// let imageData = ctx.createImageData(width, height);
// let memoryBufferArray = new Uint32Array(wasmMemory.buffer);
// let imageBufferArray = new Uint32Array(imageData.data.buffer);

// let i = 0;
// let j = 0;

// (function render() {
//   requestAnimationFrame(render);
//   imageBufferArray.set(memoryBufferArray.subarray(0, width * height));
//   // i++;
//   // if (i > width) {
//   //   i = 0;
//   //   j++;
//   // }
//   ctx.putImageData(imageData, 0, 0); // apply image buffer
// })();

module.exports = { setupData };
