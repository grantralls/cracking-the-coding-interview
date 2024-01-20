export const soln = (input: number[]): number[] => {
    for (let i = 1; i < input.length; i++) {
        const temp = input[i];
        for (let j = i - 1; j >= 0; j--) {
            if (input[j] > temp) {
                input[j + 1] = input[j];
                input[j] = temp;
            }
        }
    }

    return input;
};
