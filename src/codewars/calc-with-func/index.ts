type Result = (x: number) => number;
type NumberFunc = (op?: Result) => number;
type Operation = (x: number) => Result;

/**
 * A helper function so I don't have to create a new function definition for every number.
 */
const generateNumberFunc = (x: number): NumberFunc => {
	return (op) => {
		// if the number function didn't receive a param, just return the number itself
		if(op == undefined) {
			return x;
		}

		// if the number function did receive an operation param, run it, use the number as the param to operation
		return op(x);
	};
}

/**
 * Maps a numbers name with its function 
 * NUMBER_FUNCS[six]() is my equivalent version of "six()". Is it actually better, I'm not totally convinced. Maybe a little bit of "ego-driven-development" going on here. At least now if the numberFunc changes, I don't have 10 places to change it at.
 */
export const NUMBER_FUNCS = {
	"zero": generateNumberFunc(0),
	"one": generateNumberFunc(1),
	"two": generateNumberFunc(2),
	"three": generateNumberFunc(3),
	"four": generateNumberFunc(4),
	"five": generateNumberFunc(5),
	"six": generateNumberFunc(6),
	"seven": generateNumberFunc(7),
	"eight": generateNumberFunc(8),
	"nine": generateNumberFunc(9),
};

export const times: Operation = (x) => {
	return (y) => {
		return y * x;
	};
}
export const plus: Operation = (x) => {
	return (y) => {
		return y + x;
	};
}
export const minus: Operation = (x) => {
	return (y) => {
		return y - x;
	};
}
export const dividedBy: Operation = (x) => {
	return (y) => {
		return y / x;
	};
}
