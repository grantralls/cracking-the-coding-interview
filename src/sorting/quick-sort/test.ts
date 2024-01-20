import { quicksort } from ".";

describe("quicksort", () => {
    it("should sort", () => {
        let input = [10, 3, 7, 4, 6, 5];
        quicksort(input, 0, input.length - 1);
        expect(input).toEqual([3, 4, 5, 6, 7, 10]);
    });
});
