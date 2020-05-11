const main = require("./main");

let cvs = document.getElementById("cvs");
let ctx = cvs.getContext("2d");

let { width, height } = cvs.getBoundingClientRect();

let totalPixels = width * height;
let currentPaintMemory = totalPixels << 2;
let totalPixelMemory = currentPaintMemory << 1;
console.log(
  totalPixelMemory,
  totalPixelMemory + 0xffff,
  (totalPixelMemory + 0xffff) & ~0xffff
);

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
WebAssembly.instantiateStreaming(
  fetch("build/untouched.wasm"),
  importObject
).then((res) => {
  main.setupData(res);
});
