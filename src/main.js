const { width, height } = require("./canvas");
let wasmExports;

/**
 * Setups all shiz
 * @param {WebAssembly.WebAssemblyInstantiatedSource} res The webassembly load res
 */
function setupData(res) {
  wasmExports = res.instance.exports;
  wasmExports.init(width, height);
  wasmExports.populate();
  console.log(wasmExports);
}

module.exports = { setupData };
