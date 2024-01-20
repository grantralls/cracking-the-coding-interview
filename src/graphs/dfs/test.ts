import { AdjacencyList, dfs } from "./index";

describe("dfs", () => {
    it("should traverse the first graph", () => {
        const input: AdjacencyList = [
            [
                { to: 1, weight: 1 },
                { to: 2, weight: 1 },
            ],
            [],
            [{ to: 3, weight: 1 }],
            [],
        ];

        const path = dfs(input, 0, [], []);
        expect(path).toEqual([0, 1, 2, 3]);
    });

    it("should traverse a cyclic graph without getting stuck in a loop", () => {
        const input: AdjacencyList = [
            [
                { to: 1, weight: 1 },
                { to: 2, weight: 1 },
            ],
            [],
            [{ to: 3, weight: 1 }],
            [{ to: 0, weight: 1 }],
        ];

        const path = dfs(input, 0, [], []);
        expect(path).toEqual([0, 1, 2, 3]);
    });
});
