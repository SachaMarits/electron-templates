// Import dependencies
const ffi = require("ffi-napi");

// Import math library
const mathLibrary = new ffi.Library("./MathLibrary", {
    "Subtract": [
        "int", ["int","int"]
    ],
    "Add": [
        "int", ["int","int"]
    ],
    "Random": [
        "int", ["int","int"]
    ]
});

console.log(mathLibrary.Random(1,5));