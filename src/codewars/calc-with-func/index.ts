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

export const zero = generateNumberFunc(0)
export const one = generateNumberFunc(0)
export const two = generateNumberFunc(0)
export const three = generateNumberFunc(0)
export const four = generateNumberFunc(0)
export const five = generateNumberFunc(0)
export const six = generateNumberFunc(0)
export const seven = generateNumberFunc(0)
export const eight = generateNumberFunc(0)
export const nine = generateNumberFunc(0)

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
