import { bubbleSort } from ".";

describe("bubbleSort", () => {
    it("should sort the array", () => {
        expect(bubbleSort([1, 3, 7, 4, 2])).toEqual([1, 2, 3, 4, 7]);
    });
});
