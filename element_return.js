// function elementReturn(iarray){
//     let fmax = 200;
//     let smax = iarray[0];
//     let ilen = iarray.length;

//     // for (let i = 0; i < ilen-1; i++) {
//     //     if(iarray[i]>=iarray[i+1]){
//     //         fmax = iarray[i];
//     //     }else{
//     //         fmax = iarray[i+1];
//     //     }
//     // }

//     for (let i = 0; i < ilen-1; i++) {
//         if (iarray[i]<fmax || iarray[i]>) {
//             smax = iarray[i];
//         }else{
//         }
//     }

//     return smax;
// }


// const iarray = [99,99,100,10,20,40,100,120,10,200,5];
// let result = elementReturn(iarray);
// console.log(result)

// console.log(elementReturn(iarray));

// let minValue = Number.MIN_SAFE_INTEGER;

// console.log(minValue);  // Output: -9007199254740991

function addHotelMenuItem(addItemName,addItemPrice,addItemType) {
    // if the list of items is empty 
    if (items.length<1) {   
        let item = {
            thsi.itemName: addItemName,
            this.itemPrice: addItemPrice,
            this.itemType: addItemType
        }        
        hotelMenuItems.push(item)
        resultstatus = true
        reply = message.added
        return {addItemName, resultstatus, reply}
    }