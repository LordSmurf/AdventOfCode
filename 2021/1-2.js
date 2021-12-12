const fs = require("fs");

const input = fs.readFileSync("./1-input.txt", "utf8");

let lines = input.replace(/(\r|\r)/gm, "").split("\n");

let numberOfIncreases = 0;

for (let i = 0; i < lines.length - 3; i += 1) {
	const windowA = +lines[i] + +lines[i + 1] + +lines[i + 2];
	const windowB = +lines[i + 1] + +lines[i + 2] + +lines[i + 3];

	// console.log("A: ", windowA);
	// console.log("B: ", windowB);

	if (windowB > windowA) {
		numberOfIncreases += 1;
	}
}

console.log(numberOfIncreases);
