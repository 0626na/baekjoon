function solution(input) {
  const counts = input.shift();
  let firstArr = [];
  let resultArr = [];

  for (let index = 0; index < counts[1]; index++) {
    firstArr.push(input[index].join(" "));
  }

  for (let index = 0; index < counts[1]; index++) input.shift();

  firstArr.map((item, index) => {
    const first = item.split(" ").map((item) => parseInt(item));
    const second = input[index]
      .join(" ")
      .split(" ")
      .map((item) => parseInt(item));
    first.map((item, index) => {
      resultArr.push(item + second[index]);
    });
    console.log(resultArr.join(" "));
    resultArr = [];
  });
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
  const arr = input.map((item) => item.split(" ").map((item) => +item));
  solution(arr);
  process.exit();
});
