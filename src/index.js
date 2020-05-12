const main = require("./main");
const { ctx, width, height } = require("./canvas");

let totalPixels = width * height;
let currentPaintMemory = totalPixels << 2;
let totalPixelMemory = currentPaintMemory << 1;

//>>>16 converts bytes to number of mempages of 64k each
let wasmMemory = new WebAssembly.Memory({ initial: 1000 });

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

WebAssembly.instantiateStreaming(
  fetch("build/untouched.wasm"),
  importObject
).then((res) => {
  // res.instance.exports.populate();
  console.log(memoryBufferArray);
});
