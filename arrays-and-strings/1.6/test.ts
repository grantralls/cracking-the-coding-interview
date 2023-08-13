import { soln } from './index';

describe('string compression', () => {
	it('should compress a string if the result is shorter than the original', () => {
		expect(soln('aaa')).toEqual('a3');
		expect(soln('aabcccccaaa')).toEqual('a2b1c5a3');
	});

	it('should not compress a string if the result is longer than the input', () => {
		expect(soln('abcdefg')).toEqual('abcdefg');
	});
});
