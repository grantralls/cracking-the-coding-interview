import { soln, solnInPlace } from "./index";

describe("soln", () => {
    it("should rotate by 90 degrees clockwise an evenly sized NxN matrix", () => {
        let input = [
            [1, 2],
            [3, 4],
        ];
        let expected = [
            [3, 1],
            [4, 2],
        ];
        expect(soln(input)).toEqual(expected);

        input = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ];
        expected = [
            [13, 9, 5, 1],
            [14, 10, 6, 2],
            [15, 11, 7, 3],
            [16, 12, 8, 4],
        ];
        expect(soln(input)).toEqual(expected);
    });

    it("should rotate by 90 degrees clockwise an odd sized NxN matrix", () => {
        let input = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        let expected = [
            [7, 4, 1],
            [8, 5, 2],
            [9, 6, 3],
        ];
        expect(soln(input)).toEqual(expected);

        input = [
            [1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20],
            [21, 22, 23, 24, 25],
        ];
        expected = [
            [21, 16, 11, 6, 1],
            [22, 17, 12, 7, 2],
            [23, 18, 13, 8, 3],
            [24, 19, 14, 9, 4],
            [25, 20, 15, 10, 5],
        ];
        expect(soln(input)).toEqual(expected);
    });
});

describe("solnInPlace", () => {
    it("should rotate by 90 degrees clockwise an evenly sized NxN matrix", () => {
        let input = [
            [1, 2],
            [3, 4],
        ];
        let expected = [
            [3, 1],
            [4, 2],
        ];
        expect(solnInPlace(input)).toEqual(expected);

        input = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ];
        expected = [
            [13, 9, 5, 1],
            [14, 10, 6, 2],
            [15, 11, 7, 3],
            [16, 12, 8, 4],
        ];
        expect(solnInPlace(input)).toEqual(expected);
    });

    it("should rotate by 90 degrees clockwise an odd sized NxN matrix", () => {
        let input = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ];
        let expected = [
            [7, 4, 1],
            [8, 5, 2],
            [9, 6, 3],
        ];
        expect(solnInPlace(input)).toEqual(expected);

        input = [
            [1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20],
            [21, 22, 23, 24, 25],
        ];
        expected = [
            [21, 16, 11, 6, 1],
            [22, 17, 12, 7, 2],
            [23, 18, 13, 8, 3],
            [24, 19, 14, 9, 4],
            [25, 20, 15, 10, 5],
        ];
        expect(solnInPlace(input)).toEqual(expected);
    });
});
