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

export const zero = generateNumberFunc(0);
export const one = generateNumberFunc(1);
export const two = generateNumberFunc(2);
export const three = generateNumberFunc(3);
export const four = generateNumberFunc(4);
export const five = generateNumberFunc(5);
export const six = generateNumberFunc(6);
export const seven = generateNumberFunc(7);
export const eight = generateNumberFunc(8);
export const nine = generateNumberFunc(9);

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
