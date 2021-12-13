/*
? lifeSupportRating = o2GenRating * CO2ScrubberRating

! Every bit used

TODO OXYGEN CRITERIA
  * MOST COMMON VALUE @ position (gammaRate from part 1), Delete !commonValue
  * IF 0 & 1 are equally common, keep 1s

TODO CO2 CRITERIA
  * LEAST COMMON VALUE @ position (epsilonRate from part 1), Delete !leastValue
  * IF 0 & 1 are equally common, keep 0s

? EXAMPLE - THERE ARE  7  -1s- SO WE REMOVE THE REDS
!           00100
TODO        11110
TODO        10110
TODO        10111
TODO        10101
!           01111
!           00111
TODO        11100
TODO        10000
TODO        11001
!           00010
!           01010

? WE GET THIS RESULT - NOW WE GET 4 -0s- SO AGAIN, REMOVE REDS

!           1\1110
TODO        1\0110
TODO        1\0111
TODO        1\0101
!           1\1100
TODO        1\0000
!           1\1001

? WE NOW GET THESE - 3 -1s- SO REMOVE REDS

TODO        10\110
TODO        10\111
TODO        10\101
!           10\000

? 2 -1s- REMOVE RED

TODO        101\10
TODO        101\11
!           101\01

? LAST ITTERATION

!           1011\0
TODO        1011\1

? OXYGEN RATING IS: 10111

*/

const fs = require("fs");
const binary = require("binary-to-decimal");
const input = fs.readFileSync("./sample.txt", "utf8");
let lines = input.replace(/(\r|\r)/gm, "").split("\n");

let gammaRate = [],
	epsilonRate = [];

let o2BitArrays = [];

let columns = [[], [], [], [], [], [], [], [], [], [], [], []];

lines.forEach((bNum) => {
	let bNumArr = bNum.split("");
	bNumArr.forEach((b, idx) => {
		columns[idx].push(b);
	});
});

columns.forEach((column, idx, colArr) => {
	let mostCommon = column.reduce(
		(a, b, i, arr) =>
			arr.filter((v) => v === a).length >= arr.filter((v) => v === b).length
				? a
				: b,
		null
	);

	gammaRate.push(mostCommon);

	if (mostCommon === 1) {
		o2BitArrays.push(colArr);
	}

	console.log(`Column ${idx} has ${mostCommon} as most common`);
	console.log(colArr);
});

gammaRate.forEach((bit) => {
	+bit === 0 ? (bit = 1) : (bit = 0);
	epsilonRate.push(bit);
});