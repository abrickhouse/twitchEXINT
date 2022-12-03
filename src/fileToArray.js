const fs = require("fs");

var text = fs.readFileSync("src/out.txt").toString("utf-8");

const arr = text.split("] ");

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i].substring(0, arr[i].search("\n"));
}

console.log(arr);
