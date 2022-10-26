


//------------------------------------------------------------------------------

// function wordPuzzle(userInput) {
//     vowelArray = ['a', 'e', 'i', 'o', 'u'];
//     inputArray = userInput.split(' ');
//     let i = 0;
//     inputArray.forEach(function(element) {
//         console.log(element.substring());
//         vowelArray.forEach(function(velement) {
//             if (element.includes(velement)) {
//                 inputArray.splice(i++, 1, '-');
//             }
//         });
//     });
//     //console.log(vowelArray, inputArray);
//     inputArray.join('');
//     return inputArray;
// }
// console.log(wordPuzzle("Believe you can and you're halfway there. Theodore Roosevelt"));
// // console.log(inputArray);

function noVs(userInput) {
    const noVowels = userInput.replace(/[aeiou]/gi, '-');
    return noVowels;
}
console.log(noVs("Believe you can and you're halfway there. Theodore Roosevelt"));
