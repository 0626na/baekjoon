function solution(input) {
  console.log(
    input
      .trim()
      .split(" ")
      .filter((item) => item !== "").length
  );
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  solution(input);
  process.exit();
});
