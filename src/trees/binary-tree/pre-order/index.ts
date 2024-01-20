const walk = (
    cur: BinaryNode<number> | undefined,
    path: number[],
): number[] => {
    if (!cur) {
        return path;
    }
};

export const pre_order_search = (head: BinaryNode<number>): number[] => {
    return walk(head, []);
};
