function sortAnArrayBy2Criteria(input) {
    input.sort((el1, el2) => sortByLength(el1, el2)).forEach(el => console.log(el));

    function sortByLength(el1, el2) {
        return el1.length - el2.length || sortByName(el1, el2);
    }

    function sortByName(el1, el2) {
        return el1.toLowerCase().localeCompare(el2.toLowerCase());
    }

}

sortAnArrayBy2Criteria(['test',
    'Deny',
    'omen',
    'Default'
])


// function sortArray(params) {
//     let order = (a,b) => {
//         if (a.length != b.length) {
//             return a.length - b.length;
//         } else {
//             return a.toLowerCase() > b.toLowerCase();
//         }
//     } 

//     console.log(params.sort(order).join("\n"));
// }