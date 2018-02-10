function orbit(input) {
    let dimensions = input[0].split(" ").map(Number);
    let position = input[1].split(" ").map(Number);
    let rows = dimensions[0];
    let cols = dimensions[1];
    let starRow = position[0];
    let starCol = position[1];

    let matrix = [];
    for(let i=0; i<rows; i++) {
        matrix.push([]);
    }

    for(let row = 0; row< rows; row++) {
        for(let col=0; col<cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
        }
    }

    console.log(matrix.map(row => row.join(" ")).join("\n"));
}

// function solution (input = []) {
//     let matrix = [[]];
//     let firstI = input[2];
//     let firstJ = input[3];
//     let rows = input[1];
//     let columns = input[0];
//     let numToAdd = 0;
//     for(let i = 0;i<rows;i++){
//         matrix[i]= new Array(columns);
//         for(let j = 0;j<columns;j++){
//             if(Math.abs(firstI-i)<=Math.abs(firstJ-j)) {
//                 numToAdd = Math.abs(firstJ-j)
//             }
//             else{
//                 numToAdd= Math.abs(firstI-i)
//             }
//             matrix[i][j] = 1+numToAdd;
//         }
//     }
//     console.log(matrix.map(rows=>rows.join(' ')).join('\n'))
// }
// solution([4, 4, 0, 0])