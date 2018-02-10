function spiralMatrix(input) {
    input = input[0].split(" ").map(Number);
    let rows = input[0];
    let cols = input[1];
    let matrix = [];

    for(let i=0; i<rows; i++) {
        matrix.push([]);
    }

    let startRow = 0, startCol = 0, endRow = rows - 1, endCol = cols - 1;
    let number = 1;

    while(startRow<=endRow || startCol<=endCol) {
        for(let i = startCol; i<=endCol; i++) {
            matrix[startRow][i] = number++;

        }

        for(let i = startRow + 1; i<=endRow; i++) {
            matrix[i][endCol] = number++;
        }

        for(let i = endCol - 1; i>=startCol; i--) {
            matrix[endRow][i] = number++;
        }

        for(let i =endRow - 1; i>startRow; i--) {
            matrix[i][startCol] = number++;
        }


        startRow++;
        startCol++;
        endRow--;
        endCol--;
    }

    console.log(matrix.map(row => row.join(" ")).join("\n"));
}

// function generateMatrix(n) {
//     var total = n*n;
//     var result= [];
 
//     for(var i=0;i<n;i++) {
//         var rs = [];
//         for(var j=0;j<n;j++) {
//             rs.push(0);
//         }   
//         result.push(rs);
//     }
    
//     var x=0;
//     var y=0;
//     var step = 0;
//     for(var i=0;i<total;){
//         while(y+step<n){
//             i++;
//             result[x][y]=i; 
//             y++;
 
//         }    
//         y--;
//         x++;
        
//         while(x+step<n){
//             i++;
//             result[x][y]=i;
//             x++;
//         }
//         x--;
//         y--;
         
//         while(y>=step){
//             i++;
//             result[x][y]=i;
//             y--;
//         }
//         y++;
//         x--;
//         step++;
         
//         while(x>=step){
//             i++;
//             result[x][y]=i;
//             x--;
//         }
//         x++;
//         y++;
//     }
//     return result.forEach(row => console.log(row.join(' ')));;
// }