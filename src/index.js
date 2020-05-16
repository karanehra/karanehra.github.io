const main = require("./main");
const { ctx, width, height } = require("./canvas");

let totalPixels = width * height;
let currentPaintMemory = totalPixels << 2;
let totalPixelMemory = currentPaintMemory << 1;

//>>>16 converts bytes to number of mempages of 64k each
let wasmMemory = new WebAssembly.Memory({
  initial: 10000,
});

const importObject = {
  env: {
    abort(_msg, _file, line, column) {
      console.error("abort called at index.ts:" + line + ":" + column);
    },
    memory: wasmMemory,
  },
  Math,
};
let exportsObj;

let imageData = ctx.createImageData(width, height);
let memoryBufferArray = new Uint32Array(wasmMemory.buffer);
let imageBufferArray = new Uint32Array(imageData.data.buffer);

WebAssembly.instantiateStreaming(
  fetch("build/untouched.wasm"),
  importObject
).then((res) => {
  exportsObj = res.instance.exports;
  console.log(exportsObj);
  res.instance.exports.init(512);

  document.addEventListener("keydown", handleKeyDown);
  setTimeout(() => render(), 2000);
});

const render = () => {
  exportsObj.populate();
  imageBufferArray.set(memoryBufferArray.subarray(0, width * height));
  ctx.putImageData(imageData, 0, 0);
};

const handleKeyDown = (event) => {
  switch (event.key) {
    case "ArrowUp":
      exportsObj.translate(0, 1);
      render();
      break;
    case "ArrowDown":
      exportsObj.translate(0, -1);
      render();
      break;
    case "ArrowLeft":
      exportsObj.translate(-1, 0);
      render();
      break;
    case "ArrowRight":
      exportsObj.translate(1, 0);
      render();
      break;
  }
};
