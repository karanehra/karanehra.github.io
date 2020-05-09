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

let size = width * height;
