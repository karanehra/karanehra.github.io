let cvs = document.getElementById("cvs");
let ctx = cvs.getContext("2d");
let rect = cvs.getBoundingClientRect();
let width = rect.width;
let height = rect.height;

module.exports = { ctx, width, height };
