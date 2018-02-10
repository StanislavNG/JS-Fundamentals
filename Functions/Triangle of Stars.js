function triangleOfStars([count]) {
    count = Number(count);

    for(let i=1; i<=count; i++) {
        printStars(i);
    }

    for(let i=count-1; i>=1; i--) {
        printStars(i);
    }

    function printStars(number) {
        console.log('*'.repeat(number));
    }
}

// function solution (n){
//     function print(j) {
//         console.log('*'.repeat(j))
//     }
//     for(let i = 1;i<=n;i++){
//         print(i)
//     }
//     for(let i = n-1;i>=1;i--){
//         print(i)
//     }
// }