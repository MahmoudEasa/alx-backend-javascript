const readline = require("readline");
r = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

console.log("Welcome to Holberton School, what is your name?");
r.on("line", (input) => {
	if (input.trim() === "exit") {
		console.log("This important software is now closing");
		process.exit(0);
	} else console.log(`Your name is: ${input}`);
});
