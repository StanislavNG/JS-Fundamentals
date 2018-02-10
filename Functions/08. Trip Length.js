function tripLength(input) {
    let [x1, y1, x2, y2, x3, y3] = input.map(Number);

    let distanceBetweenPoints = (x1, y1, x2, y2) => Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

    let distance123 = distanceBetweenPoints(x1, y1, x2, y2) + distanceBetweenPoints(x2, y2, x3, y3);
    let distance132 = distanceBetweenPoints(x1, y1, x3, y3) + distanceBetweenPoints(x3, y3, x2, y2);
    let distance213 = distanceBetweenPoints(x2, y2, x1, y1) + distanceBetweenPoints(x1, y1, x3, y3);

    let shortestDistance = Math.min(distance123, distance132, distance213);

    if(shortestDistance == distance123) {
        console.log(`1->2->3: ${shortestDistance}`);
        return;
    }

    if(shortestDistance == distance132) {
        console.log(`1->3->2: ${shortestDistance}`);
        return;
    }

    if(shortestDistance == distance213) {
        console.log(`2->1->3: ${shortestDistance}`);
        return;
    }
}



// function solution (input) {
//     let x1=input[0];
//     let y1 = input[1];
//     let x2 = input[2];
//     let y2 = input[3];
//     let x3 = input[4];
//     let y3 = input[5];
//     let distance12 = Math.sqrt((x1-x2)**2+(y1-y2)**2);
//     let distance13 = Math.sqrt((x1-x3)**2+(y1-y3)**2);
//     let distance23 = Math.sqrt((x2-x3)**2+(y2-y3)**2);
//     if(distance12>distance13&&distance12>=distance23){
//         console.log('1->3->2: '+(distance23+distance13))
//     }
//     else if(distance13>=distance12&&distance13>=distance23){
//         console.log('1->2->3: '+(distance23+distance12))
//     }
//     else{
//         console.log('2->1->3: '+(distance12+distance13))
//     }
// }