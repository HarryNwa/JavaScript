function createBoard(length, width, pieces) {
    // Create an empty 2D board filled with spaces
    const board = new Array(length);
    for (let i = 0; i < length; i++) {
        board[i] = new Array(width).fill(" ");
    }

    // Iterate through the pieces array and populate the board
    for (const piece of pieces) {
        const [x, y, value] = piece;
        if (x >= 0 && x < length && y >= 0 && y < width) {
            board[x][y] = value;
        }
    }

    return board;
}

// Example usage
const length = 4;
const width = 4;
const pieces = [
    [0, 0, "A"],
    [1, 2, "B"],
    [3, 3, "C"]
];

const board = createBoard(length, width, pieces);

// Print the resulting board
for (const row of board) {
    console.log(row.join(" "));
}
