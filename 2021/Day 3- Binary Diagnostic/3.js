const { table } = require("console");
const fs = require("fs");
const binary = require("binary-to-decimal");
const input = fs.readFileSync("./input.txt", "utf8");
let lines = input.replace(/(\r|\r)/gm, "").split("\n");

let gammaRate = [],
	epsilonRate = [];

/*
? Power Consumption = gammaRate * epsilonRate
* gammaRate = commonBit @ position[i]
* epsilonRate = leastCommonBit @ position[i] (reversed gammaRate)
* convert gammaRate & epsilonRate to decimal before getting the product
*/

let columns = [[], [], [], [], [], [], [], [], [], [], [], []];

lines.forEach((bNum) => {
	let bNumArr = bNum.split("");
	bNumArr.forEach((b, idx) => {
		columns[idx].push(b);
	});
});

columns.forEach((column) => {
	let mostCommon = column.reduce(
		(a, b, i, arr) =>
			arr.filter((v) => v === a).length >= arr.filter((v) => v === b).length
				? a
				: b,
		null
	);

	gammaRate.push(mostCommon);
});

gammaRate.forEach((bit) => {
	+bit === 0 ? (bit = 1) : (bit = 0);
	epsilonRate.push(bit);
});

gammaRate = binary.decimal(gammaRate.join(""));
epsilonRate = binary.decimal(epsilonRate.join(""));

console.log(gammaRate * epsilonRate);