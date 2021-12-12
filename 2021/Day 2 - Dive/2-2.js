const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf8");
let lines = input.replace(/(\r|\r)/gm, "").split("\n");

let xPos = 0;
let yPos = 0;
let aim = 0;

/*
* down x increases aim
* up x decreases aim

* forward x increases xPos
* forward x increases depth by aim (x * aim)
*/

lines.forEach((command) => {
	if (command.startsWith("forward")) {
		xPos += Number(command.slice(8));
		yPos += Number(command.slice(8)) * aim;
	} else if (command.startsWith("up")) {
		aim -= Number(command.slice(3));
	} else if (command.startsWith("down")) {
		aim += Number(command.slice(5));
	}
});

console.log(xPos * yPos);
