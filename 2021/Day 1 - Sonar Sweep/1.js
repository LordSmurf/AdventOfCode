const fs = require("fs");

const input = fs.readFileSync("./1-input.txt", "utf8");

let lines = input.replace(/(\r|\r)/gm, "").split("\n");

//console.log(lines);

let numberOfIncreases = 0;

lines.forEach((measurement, i) => {
	if (i === 0) return;
	if (Number(lines[i]) > Number(lines[i - 1])) {
		numberOfIncreases += 1;
	}
});

console.log(numberOfIncreases);