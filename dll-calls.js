const ffi = require("ffi-napi")

const math = new ffi.Library("MathLibrary", {
  Random: ["int", ["int","int"]]
});

function random() {
    document.getElementById("number").innerText = math.Random(1,5);
}

random();
document.getElementById("button").addEventListener("click", random);