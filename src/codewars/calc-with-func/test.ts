import { two, three, four, five, six, seven, eight, nine, plus, minus, times, dividedBy } from './index';

describe('calc-with-func', () => {
	it('work with the example input', () => {
		expect(seven(times(five()))).toEqual(35);
		expect(four(plus(nine()))).toEqual(13);
		expect(eight(minus(three()))).toEqual(5);
		expect(six(dividedBy(two()))).toEqual(3);
	});
});
