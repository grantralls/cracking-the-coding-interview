/**
 * 1. choose a pivot
 * 2. start the index at lo
 */
const partition = (arr: number[], lo: number, hi: number): number => {
    const pivot = arr[hi];
    let idx = lo;

    for (let i = lo; i < hi; i++) {
        if (arr[i] < pivot) {
            const temp = arr[idx];
            arr[idx] = arr[i];
            arr[i] = temp;
            idx++;
        }
    }

    const temp = arr[idx];
    arr[idx] = arr[hi];
    arr[hi] = temp;

    return idx;
};

export const quicksort = (arr: number[], lo: number, hi: number): void => {
    if (lo < hi) {
        const p = partition(arr, lo, hi);
        quicksort(arr, lo, p - 1);
        quicksort(arr, p + 1, hi);
    }
};
