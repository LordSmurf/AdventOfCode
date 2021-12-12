const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf8");
let lines = input.replace(/(\r|\r)/gm, "").split("\n");

let xPos = 0;
let yPos = 0;

lines.forEach((command) => {
	if (command.startsWith("forward")) {
		//console.log(command.slice(8));
		xPos += Number(command.slice(8));
	} else if (command.startsWith("up")) {
		//console.log(command.slice(3));
		yPos -= Number(command.slice(3));
	} else if (command.startsWith("down")) {
		//console.log(command.slice(5));
		yPos += Number(command.slice(5));
	}
});

console.log(xPos);
console.log(yPos);
console.log(xPos * yPos);
