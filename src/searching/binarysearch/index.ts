/**
 * returns the index of the number provided. If not found, returns -1
 */
export const search = (arr: number[], num: number): number => {
    let start = 0;
    let mid = Math.floor(arr.length / 2);
    let end = arr.length - 1;

    while (start <= end) {
        if (arr[mid] == num) {
            return mid;
        } else if (num > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
        mid = Math.floor(start + (end - start) / 2);
    }

    return -1;
};
