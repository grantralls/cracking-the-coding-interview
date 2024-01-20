import { soln } from "./index";

describe("inserstion sort", () => {
    it("should sort a number array of positive integers", () => {
        let input = [5, 4, 3, 2, 1];
        let expected = [1, 2, 3, 4, 5];
        expect(soln(input)).toEqual(expected);

        input = [5, 3, 1, 2, 4];
        expect(soln(input)).toEqual(expected);

        input = [1, 2, 3, 4, 5];
        expect(soln(input)).toEqual(expected);

        input = [8, 2, 4, 9, 3, 6];
        expected = [2, 3, 4, 6, 8, 9];
        expect(soln(input)).toEqual(expected);
    });

    it("should sort a number array of mixed-sign integers", () => {
        const input = [3, 2, 1, 0, -1, -2, -3];
        const expected = [-3, -2, -1, 0, 1, 2, 3];

        expect(soln(input)).toEqual(expected);
    });
});
