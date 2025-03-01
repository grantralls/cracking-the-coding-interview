import { bfs, AdjacencyList } from ".";

describe("bfs", () => {
    it("should traverse the tree in a bfs manner", () => {
        const input: AdjacencyList = [
            [
                { to: 6, weight: 1 },
                { to: 4, weight: 1 },
                { to: 1, weight: 1 },
            ],
            [
                { to: 5, weight: 1 },
                { to: 2, weight: 1 },
            ],
            [{ to: 3, weight: 1 }],
            [],
            [],
            [],
            [],
        ];

        const output = bfs(input, 0, 6);
        expect(output).toEqual([0, 6]);
    });

    it.only("should traverse the tree in a bfs manner and not get stuck in a loop", () => {
        const input: AdjacencyList = [
            [
                { to: 6, weight: 1 },
                { to: 4, weight: 1 },
                { to: 1, weight: 1 },
            ],
            [
                { to: 5, weight: 1 },
                { to: 2, weight: 1 },
                { to: 0, weight: 1 },
            ],
            [
                { to: 3, weight: 1 },
                { to: 1, weight: 1 },
            ],
            [],
            [],
            [],
            [],
        ];

        const output = bfs(input, 0, 3);
        console.log(output);
    });
});
