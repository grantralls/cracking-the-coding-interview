import { search } from "./index";

const mocks: number[][] = [
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6, 7],
];

describe("binary search", () => {
    it("should find a findable number", () => {
        mocks.forEach((mock) => {
            expect(search(mock, 1)).toEqual(0);
            expect(search(mock, 3)).toEqual(2);
            expect(search(mock, 6)).toEqual(5);
        });

        const input = [1, 5, 7, 12];
        expect(search(input, 5)).toEqual(1);
        expect(search(input, 12)).toEqual(3);
    });

    it("shouldn't find a non-findable number", () => {
        let input = [1, 2, 3, 4, 5];
        expect(search(input, 10)).toEqual(-1);

        input = [1, 5, 6, 10, 11, 16];
        expect(search(input, 2)).toEqual(-1);
    });
});
