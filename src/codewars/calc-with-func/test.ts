import { NUMBER_FUNCS, plus, minus, times, dividedBy } from './index';

describe('calc-with-func', () => {
	it('work with the example input', () => {
		expect(NUMBER_FUNCS["seven"](times(NUMBER_FUNCS["five"]()))).toEqual(35);
		expect(NUMBER_FUNCS["four"](plus(NUMBER_FUNCS["nine"]()))).toEqual(13);
		expect(NUMBER_FUNCS["eight"](minus(NUMBER_FUNCS["three"]()))).toEqual(5);
		expect(NUMBER_FUNCS["six"](dividedBy(NUMBER_FUNCS["two"]()))).toEqual(3);
	});
});
