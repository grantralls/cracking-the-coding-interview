/**
 * Bubble sort returns sorted array
 *
 */
export const bubbleSort = (arr: number[]): number[] => {
    let exclude = arr.length;

    while (exclude >= 1) {
        for (let i = 0; i < exclude - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
            }
        }
        exclude--;
    }

    return arr;
};
