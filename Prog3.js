// Design a javascript function that will return a char and frequency having maximum occourance in char array.

// function occourance(carray) {
//     let maxcount = 0;
//     let char;
//     const len = carray.length
    
//     for (let i = 0; i < len; i++) {
//         let count = 0
//         for (let j = 0; j < len; j++) {
//             if(carray[i]===carray[j]){
//                 count++
//             }       
//             if(count>maxcount){
//                 maxcount = count
//                 char = carray[i]
//             }
//         }
//     }
//     return {char,maxcount}
// }

function occourance(carray) {
    let maxcount = 0;
    let char;
    const len = carray.length
}

const sarray = ['a','d','k','p','i','z','a','b','k','z','a','k']
let result = occourance(sarray)
console.log(result)