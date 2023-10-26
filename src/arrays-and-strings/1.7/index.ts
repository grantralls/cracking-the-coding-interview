/**
 * Rotates a NxN matrix 90 degrees clockwise not in place
 */
export const soln = (input: number[][]): number[][] => {
    const newMatrix = [];
    for (let i = 0; i < input.length; i++) {
        const newRow = [];
        for (let j = input.length - 1; j >= 0; j--) {
            newRow.push(input[j][i]);
        }
        newMatrix.push(newRow);
    }

    return newMatrix;
};

/**
 * Rotates a NxN matrix 90 degrees clockwise in place
 */
export const solnInPlace = (input: number[][]): number[][] => {
    let size = input.length;

    for (let offset = 0; offset < size / 2; offset++) {
        for (let i = 0; i < size - 1 - offset * 2; i++) {
            const temp = input[0 + offset][i + offset];

            // left -> top
            input[0 + offset][i + offset] =
                input[size - 1 - i - offset][0 + offset];

            // bot -> left
            input[size - 1 - i - offset][0 + offset] =
                input[size - 1 - offset][size - 1 - i - offset];

            // right -> bot
            input[size - 1 - offset][size - 1 - i - offset] =
                input[i + offset][size - 1 - offset];

            // top -> right
            input[i + offset][size - 1 - offset] = temp;
        }
    }

    return input;
};
