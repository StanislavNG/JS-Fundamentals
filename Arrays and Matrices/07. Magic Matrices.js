function magicMatrices(input) {
    let matrix = input.map(row => row.split(" ").map(Number));
    let sum = matrix[0].reduce((a,b) => a+b);
    let isMagic = true;

    for(let i=1; i<matrix.length; i++) {
        if(sum != matrix[i].reduce((a,b) => a+b)) {
            isMagic = false;
        }
    }

    for(let col=0; col<matrix[0].length; col++) {
        let sumCol = 0;
        for(let row=0; row<matrix.length; row++) {
            sumCol += matrix[row][col];
        }

        if(sumCol != sum) {
            isMagic = false;
        }
    }

    console.log(isMagic);
}

// function magicMatrices(matrix) {
//     let reference = matrix[0].map(Number).reduce((a,b) => a+b);
//     let isMagic = true;
//     for (let i = 0; i < matrix.length; i++) {
//         let sum = matrix[0].map(Number).reduce((a,b) => a+b);
//         if (sum !== reference) {
//             isMagic = false;
//             console.log(isMagic);
//             return;
//         }    
//     }
//     for (let i = 0; i < matrix[0].length; i++) {
//         let sum = 0;
//         for (let l = 0; l < matrix.length; l++) {
//             sum += matrix[i][l];            
//         }
//         matrix[0].map(Number).reduce((a,b) => a+b);
//         if (sum !== reference) {
//             isMagic = false;
//             console.log(isMagic);
//             return;
//         }    
//     }
//     console.log(isMagic);
// }