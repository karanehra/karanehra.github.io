const main = require("./main");
const importObject = {
  env: {
    abort(_msg, _file, line, column) {
      console.error("abort called at index.ts:" + line + ":" + column);
    },
  },
  Math,
};
WebAssembly.instantiateStreaming(
  fetch("build/untouched.wasm"),
  importObject
).then((res) => {
  main.setupData(res);
});
