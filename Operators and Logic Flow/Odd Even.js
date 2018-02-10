function oddOrEven([number]) {
    number = Number(number);

    if(number % 1 == 0) {
        if(number % 2 == 0) {
            console.log("even");
        } else {
            console.log("odd");
        }
    } else {
        console.log("invalid");
    }
}

// function oddEven(num) {
//   let rem = num % 2
//     if (rem ==0)
//       console.log("even")
//       else if (rem == Math.round(rem))
//         console.log("odd")
//         else console.log("invalid")
//         }