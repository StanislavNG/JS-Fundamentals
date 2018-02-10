function modifyAverage([number]) {
    function getAverage(number) {
        let sum = 0;
        for(let digit of number) {
            sum += Number(digit);
        }

        return sum / number.length;
    }

    let average = getAverage(number);

    let addNine = x => x + "9";

    while(average <= 5) {
        number = addNine(number);
        average = getAverage(number);
    }

    console.log(number);
}

// function solution (input) {
//     function isHigherThanFive (element) {
//        let sum = 0;
//        for(let i = 0;i<element.length;i++){
//            sum+=Number(element[i])
//        }
//        if(sum/element.length>5){
//             return true;
//        }
//        else return false;
//     }
//     while(!isHigherThanFive(input)){
//         input += '9';
//     }
//     console.log(input)
// }