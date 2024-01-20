export type AdjacencyList = Array<{ to: number; weight: number }[]>;

export function dfs(
    list: AdjacencyList,
    curr: number,
    seen: boolean[],
    path: number[],
): number[] {
    if (seen.length !== list.length) {
        seen = new Array(list.length).fill(false);
    }

    if (seen[curr]) {
        return path;
    }

    seen[curr] = true;
    path.push(curr);
    for (let i = 0; i < list[curr].length; i++) {
        dfs(list, list[curr][i].to, seen, path);
    }

    return path;
}
