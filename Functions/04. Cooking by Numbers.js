function cookingByNumbers(input) {
    var number = Number(input[0]);

    let chop = x => x/2;
    let dice = x => Math.sqrt(x);
    let spice = x => ++x;
    let bake = x => x*3;
    let fillet = x => x - x * 0.2;

    for(let i=1; i<=5; i++) {
        switch (input[i]) {
            case "chop":
                number = chop(number);
                console.log(number);
                break;
            case "dice":
                number = dice(number);
                console.log(number);
                break;
            case "spice":
                number = spice(number);
                console.log(number);
                break;
            case "bake":
                number = bake(number);
                console.log(number);
                break;
            case "fillet":
                number = fillet(number);
                console.log(number);
                break;
        }
    }
}

cookingByNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);

// function solution (input) {
//     let func = function (element,n) {
//         switch (element){
//             case 'chop':return n/2;
//             case 'dice':return Math.sqrt(n);
//             case 'spice': return n+1;
//             case 'bake': return 3*n;
//             case 'fillet':return n*0.8
//         }
//     };
//     let num = Number(input[0]);
//     for(let i=1;i<input.length;i++){
//         num = func(input[i],num);
//         console.log(num)
//     }

// }