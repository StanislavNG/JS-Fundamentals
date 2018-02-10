function aggregateElements(arr) {
    let elements = arr.map(Number);

    function aggregate(array, initVal, func) {
        let val = initVal;

        for(let i = 0; i< arr.length; i++) {
            val = func(val, array[i]);
        }

        console.log(val);
    }

    aggregate(elements, 0, (a, b) => a + b);
    aggregate(elements, 0, (a, b) => a + 1/b);
    aggregate(elements, "", (a, b) => a + b);
}

// function solution (input) {
//     aggregate(0,input,(a,b)=>a+b);
//     aggregate(0,input,(a,b)=>a+1/b);
//     aggregate('',input,(a,b)=>a+b);
//     function aggregate (startValue,arr,func) {
//         for(let i = 0;i<arr.length;i++){
//             startValue=func(startValue,arr[i])
//         }
//         console.log(startValue)
//     }

// }