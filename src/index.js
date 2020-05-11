const main = require("./main");
const { ctx, width, height } = require("./canvas");

let totalPixels = width * height;
let currentPaintMemory = totalPixels << 2;
let totalPixelMemory = currentPaintMemory << 1;

//>>>16 converts bytes to number of mempages of 64k each
let wasmMemory = new WebAssembly.Memory({ initial: totalPixelMemory >>> 16 });

const importObject = {
  env: {
    abort(_msg, _file, line, column) {
      console.error("abort called at index.ts:" + line + ":" + column);
    },
    memory: wasmMemory,
  },
  Math,
};

let imageData = ctx.createImageData(width, height);
let memoryBufferArray = new Uint32Array(wasmMemory.buffer);
let imageBufferArray = new Uint32Array(imageData.data.buffer);

let i = 0;
let j = 0;

(function render() {
  requestAnimationFrame(render);
  imageBufferArray.set(memoryBufferArray.subarray(0, width * height));
  // i++;
  // if (i > width) {
  //   i = 0;
  //   j++;
  // }
  ctx.putImageData(imageData, 0, 0); // apply image buffer
})();

WebAssembly.instantiateStreaming(
  fetch("build/untouched.wasm"),
  importObject
).then((res) => {
  main.setupData(res);
});
