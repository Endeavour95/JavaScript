// let obj = {0 : {1: 'value'}}

// // console.log(Object.keys(obj).length)
// if(obj[0] === undefined){
//     console.log('satisfied')
// } else {
//     if(obj[0][1]=== 'value'){
//         console.log('data matched')
//     } else {
// // create new data 
//     }
// }

// let employees = {}

// if (employees == "{}") {
//     console.log("1111111111111")
// }
// if (employees == null) {
//     console.log("22222222222")
// }
// if (Object.keys(employees) < 1) {
//     console.log("3333333333")
// }

let orderTest1 = {
    '1' : {
        itemId: 1,
        quantity : 2
    },
    '2' : {
        itemId: 3,
        quantity : 1
    },
    '3' : {
        itemId: 2,
        quantity : 4
    }
}

for (const key in orderTest1) {
    if (Object.hasOwnProperty.call(orderTest1, key)) {
        const element = orderTest1[key];
        console.log(element.itemId)
        
    }
}