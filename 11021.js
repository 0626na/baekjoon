function solution(input) {
  const count = parseInt(input[0]);
  let result = "";

  for (let index = 1; index < count + 1; index++) {
    console.log(
      `Case #${index}: ${
        parseInt(input[index].split(" ")[0]) +
        parseInt(input[index].split(" ")[1])
      }`
    );
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});
