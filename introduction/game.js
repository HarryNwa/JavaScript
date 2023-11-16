// function generate(length, width, pieces) {
//     let board = new Array(length);

//     for (let index = 0; index < length; index++) {
//         board[index] = new Array(width).fill(" ");
//     }

//     for (let piece of pieces) {
//         let { row, col, value } = piece; // Use object destructuring
//         if (row >= 0 && row < length && col >= 0 && col < width) {
//             board[row][col] = value;
//         }
//     }

//     return board;
// }

// const length = 3;
// const width = 3;
// const pieces = [
//     { row: 0, col: 0, value: "x" },
//     { row: 0, col: 1, value: "x" },
//     { row: 0, col: 2, value: "o" },
//     { row: 1, col: 0, value: "o" },
//     { row: 1, col: 2, value: "x" },
//     { row: 2, col: 0, value: "x" },
//     { row: 2, col: 1, value: "o" },
//     { row: 2, col: 2, value: "o" },
// ];

// const board = generate(length, width, pieces);

// for (let row of board) {
//     console.log(row.join(" "));
// }




function generate(length, width, pieces) {
    let board = new Array(length);

    for (let index = 0; index < length; index++) {
            board[index] = new Array(width).fill(" ");
        }

    for (let piece of pieces){
        let {row, col, value} = piece;
        if (row >= 0 && row < length && col >= 0 && col < width) {
            board[row][col] = value;
        }
    }

    return board;
}

    let length = 3;
    let width = 3;
    let pieces = [
        {row : 0, col : 0, value: "x"},
        {row : 0, col : 1, value: "x"},
        {row : 0, col : 2, value: "o"},
        {row : 1, col : 0, value: "o"},
        {row : 1, col : 2, value: "x"},
        {row : 2, col : 0, value: "x"},
        {row : 2, col : 1, value: "o"},
        {row : 2, col : 2, value: "o"},

    ];


    board = generate(length, width, pieces)
    for (let row of board) {
        console.log(row.join(" "));

    }


