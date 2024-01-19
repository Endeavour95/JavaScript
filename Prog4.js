// // Design a function which will return two maximum element from numberarray passed and must be unique.

// // function twoMaximum(iarray){
// //     let max, secondmax;
// //     const niarray = new Set(iarray);
// //     const sarray = Array.from(niarray).sort((a,b)=>a-b);
// //     const sl = sarray.length;
// //     return {max:sarray[sl-1],secondmax:sarray[sl-2]};
// // }

// function twoMaximum(iarray){
//     let fmax,smax;
//     const len = iarray.length;

//     for (let i = 0; i < len; i++) {
//         if(i == 0 ){
//             fmax = iarray[i]
//             smax = iarray[i]
//         }else if (iarray[i]>fmax) {
//             smax = fmax
//             fmax = iarray[i]
//         } else if(iarray[i]>smax && iarray[i]!=fmax){
//             smax = iarray[i]
//         }
     
//     }
//     return {fmax, smax};
// }

// const iarray = [99,99,100,10,20,40,100,120,10,200,5];
// let result = twoMaximum(iarray);
// console.log(result);


const score = 60

const scoreRating =
  score > 70 ? "Excellent" : score > 50 ? "Average" : "Do better"

console.log(scoreRating)