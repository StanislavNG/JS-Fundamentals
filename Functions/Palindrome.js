function palindrome([str]) {
    for(let i=0; i<str.length; i++) {
        if(str[i] != str[str.length - i -1]) {
            return false;
        }
    }

    return true;
}

// function palindrome (input) {
//     function isPalindrome(input) {
//         let returnedvalue = true;
//         for (let i = 0;i<input.length/2;i++){
//             if(input[i]!=input[input.length-i-1]){
//                 returnedvalue =  false;
//             }
//         }
//         return returnedvalue
//     }
//     if(!isPalindrome(input)){
//         console.log('false')
//     }
//     else {
//         console.log('true')
//     }
// }