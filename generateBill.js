// // function generateBill(order,taxes) {
    
// //     let itemtotal = []
// //     let subtotal = 0
    
// //     for (let i = 0; i < order.items.length; i++) {
// //         let calculate = 0
// //         calculate = order.items[i].itemquantity * order.items[i].item.itemPrice
// //         itemtotal.push(calculate)
// //         subtotal += calculate
// //     }
    
// //     let vtax = subtotal*taxes.vat/100

// //     let sgtax = subtotal*taxes.sgst/100

// //     let cgtax = subtotal*taxes.sgst/100
  
// //     let totalamount = subtotal + vtax + sgtax + cgtax
    
// //     return {itemtotal, subtotal, vtax, sgtax, cgtax, totalamount}
// // }

// // const edli = {
// //     itemName: "Edli",
// //     itemPrice: 20,
// //     itemType: "Rice"
// // }

// // const rEdli = {
// //     itemName: "Rava Edli",
// //     itemPrice: 25,
// //     itemType: "Rava"
// // }

// // const dosa = {
// //     itemName: "Dosa",
// //     itemPrice: 30,
// // }

// // const mDosa = {
// //     itemName: "Masala Dosa",
// //     itemPrice: 50,
// //     itemType: "Masala"
// // }
                        
// // const taxes = {
// //     sgst: 2.5,
// //     cgst: 2.5,
// //     vat: 12.5
// // }


// // let order = {
// //     items : [
// //         {
// //             item : edli,
// //             itemquantity : 3
// //         },
// //         {
// //             item : mDosa,
// //             itemquantity : 2
// //         },
// //         {
// //             item : rEdli,
// //             itemquantity : 1
// //         }
// //     ]
// // }


// // let result = generateBill(order, taxes)
// // console.log("                    Order Bill                       ")   
// // console.log("*****************************************************")
// // console.log("Item Name      Quantity        Net Price   Item Total")
// // console.log("*****************************************************")
// // for(let i=0; i<order.items.length; i++){
// // console.log(order.items[i].item.itemName, "          ", order.items[i].itemquantity, "          ", order.items[i].item.itemPrice, "          ", result.itemtotal[i] )
// // }
// // console.log("*****************************************************")
// // console.log("Total Amount                                   ",result.subtotal,"Rs") 
// // console.log("SGST(2.5%)                                   ", result.sgtax,"Rs")
// // console.log("CGST(2.5%)                                   ", result.cgtax,"Rs")
// // console.log("VAT(12.5%)                                  ", result.vtax,"Rs")
// // console.log("*****************************************************")
// // console.log("Grand Total                                  ",result.totalamount)



// // const items = [
// //     { name: 'Product1', price: 10.99 },
// //     { name: 'Product2', price: 5.99 },
// //   ];
  
// //   const keyArray = ['name', 'price'];
  
// //   for (let i = 0; i < items.length; i++) {
// //     for (let j = 0; j < keyArray.length; j++) {
// //       const propertyValue = items[i][keyArray[j]];
// //       console.log(`${keyArray[j]}: ${propertyValue}`);
// //     }
// //   }





// function addItem(addItemName,addItemPrice,addItemType) {
//     // if the list of items is empty 
//     if (items.length<1) {   
//         let item = {
//             itemName: addItemName,
//             itemPrice: addItemPrice,
//             itemType: addItemType
//         }
        
//         items.push(item)
//         resultstatus = true
//         reply = message.added
//         return {addItemName, resultstatus, reply}        
//     } else {
//         for (let i=0; i<items.length; i++) {
//             // to find if element exist in list of items
//             if (addItemName===items[i].itemName) {
//                 resultstatus = false
//                 const reply = message.notAdded
//                 return {addItemName, resultstatus, reply}
//             } else {
//                 // if item is not in the list of items  
//                 let item = {
//                     itemName: addItemName,
//                     itemPrice: addItemPrice,
//                     itemType: addItemType
//                 }
//                 items.push(item)                
//                 resultstatus = true
//                 reply = message.added
//                 return {addItemName, resultstatus, reply}
//             }
//         }  
//     }
// }

// function editItem(editItemName,editProperties){
//     // if the list of items is empty 
//     if (items.length<1) {
//         resultstatus = false
//         reply = message.emptyList
//         return {editItemName, resultstatus, reply}
//     } else {
//         for (let i = 0; i < items.length; i++) {
//             // to edit properties of the item from the list of items          
//             if (editItemName == (items[i].itemName)) {                 
//                 const keyArray = Object.keys(editProperties)                          
//                 for (let j = 0; j < keyArray.length; j++) {                    
//                     items[i][keyArray[j]] = editProperties[keyArray[j]]                    
//                 }
//                 flag = true                           
//                 break
//             } else { 
//                 // if item does not exist in the list of items 
//                 flag = false
//             }
//         }
//         // if properties of item the list of items edited successfully
//         if (flag == true) {
//             resultstatus = true
//             reply = message.edited
//             return {editItemName, editProperties, resultstatus, reply}
//         } else {
//             // if item does not exist in the previous for loop
//             resultstatus = false
//             reply = message.notExist
//             return {editItemName, resultstatus, reply}
//         } 
//     }
// }

// function deleteItem(delItemName) {
//     // if the list of items is empty    
//     if (items.length < 1) {
//         resultstatus = false
//         reply = message.emptyList        
//         return {delItemName, resultstatus, reply}
//     } else {       
//         for (let i=0; i<items.length; i++) {
//             // to delete the item from the list of items
//             if (delItemName == items[i].itemName) {                
//                 items.splice(i,1)
//                 flag = true                           
//             } else { 
//                 // if item does not exist in the list of items 
//                 flag = false
//             }  
//         }
//         // if item is deleted from the list of items
//         if (flag == true) {
//             resultstatus = true
//             reply = message.deleted
//             return {delItemName, resultstatus, reply}
//         } else {
//             // if item does not exist in the previous for loop
//             resultstatus = false
//             reply = message.notExist
//             return {delItemName, resultstatus, reply}
//         }        
//     }
// }



// // // let item = {
//     // //     itemName: "Idli",
//     // //     itemPrice: 50,
//     // //     itemType: "rava"
//     // // }
//     // // items.push(item)
    
//     // // console.log(items[0].itemName)
//     // // console.log(items[0].itemPrice)
//     // // console.log(items[0].itemType)
    
// let items = []
    
// // let item
    
// let reply;

// let flag;

// let resultstatus;

// const message = {
//     added: "Item added successfully in the Items list",
//     notAdded: "Item already exist in the list of Items",
//     edited: "Item edited successfully",
//     notEdited: "Item properties not changed",
//     deleted: "Item deleted successfully from the list of Items",
//     notExist: "Item does not exist in the list of items",
//     emptyList: "Item list does not contain any item"
// }

// const taxes = {
//     sgst: 2.5,
//     cgst: 2.5,
//     vat: 12.5
// }

// let addResult = addItem("Appe",10,"Mix")
// console.log("First added item ",addResult)
// console.log("Length of list of items after adding an item to it ",items.length)
// console.log("List of items ",items)

// let addResult1 = addItem("Idli",15,"Rava")
// console.log("Second added item ",addResult1)
// console.log("Length of list of items after adding an item to it ",items.length)
// console.log("List of items ",items)

// let addResult2 = addItem("Dosa",30,"Rice")
// console.log("Third added item ",addResult2)
// console.log("Length of list of items after adding an item to it ",items.length)
// console.log("List of items ",items)

// // Define OrderItem object
// function OrderItem(name, quantity) {
//     this.name = name;
//     this.quantity = quantity;
//   }
  
// function Order() {
//     this.orderItems = [];
  
//     this.addItem = function (orderItem) {
//       this.orderItems.push(orderItem);
//     };
//   }
  
// const order = new Order();

// // Displaying the items in the order
// // for (let i = 0; i < order.orderItems.length; i++) {
// // console.log(`${order.orderItems[i].name} : ${order.orderItems[i].quantity} x ${items} - Rs${items[i].itemPrice * order.orderItems[i].quantity}`);
// // }
    
// // // Making an order
// // const item1 = new OrderItem("Dosa", 2);
// // const item2 = new OrderItem("Idli", 1);  

// // // Adding items to the order
// // order.addItem(item1);
// // order.addItem(item2);

// // let result = generateBill(order, taxes)
// // console.log("                    Order Bill                       ")   
// // console.log("*****************************************************")
// // console.log("Item Name      Quantity        Net Price   Item Total")
// // console.log("*****************************************************")
// // for(let i=0; i<order.orderItems.length; i++){
// // console.log(order.orderItems[i].name, "            ", order.orderItems[i].quantity, "             ", result.itemPrices[i], "        ", result.itemtotal[i] )
// // // console.log(`${order.orderItems[i].name}          ${order.orderItems[i].quantity}          ${result.itemPrices[i]}          ${result.itemtotal[i]}`)
// // }
// // console.log("*****************************************************")
// // console.log("Total Amount                                   ",result.subtotal,"Rs") 
// // console.log("SGST(2.5%)                                   ", parseFloat(result.sgtax.toFixed(2)),"Rs")
// // console.log("CGST(2.5%)                                   ", parseFloat(result.cgtax.toFixed(2)),"Rs")
// // console.log("VAT(12.5%)                                   ", parseFloat(result.vtax.toFixed(2)),"Rs")
// // console.log("*****************************************************")
// // console.log("Grand Total                                  ",parseFloat(result.totalamount.toFixed(2)))


// let editProperties = {itemPrice : 50, itemType : "Masala"}
// let editResult = editItem("Dosa", editProperties)
// console.log("Item edited successfully ",editResult)
// console.log("Changed Properties for an item", editProperties)
// console.log("Length of list of items after adding an item to it ",items.length)
// console.log("List of items ",items)

// // const item3 = new OrderItem("Dosa", 2);
// // const item4 = new OrderItem("Idli", 1);

// // order.addItem(item3);
// // order.addItem(item4);

// // let result2 = generateBill(order, taxes)
// // console.log("                    Order Bill                       ")   
// // console.log("*****************************************************")
// // console.log("Item Name      Quantity        Net Price   Item Total")
// // console.log("*****************************************************")
// // for(let i=0; i<order.orderItems.length; i++){
// // console.log(order.orderItems[i].name, "            ", order.orderItems[i].quantity, "             ", result2.itemPrices[i], "        ", result2.itemtotal[i] )
// // // console.log(`${order.orderItems[i].name}          ${order.orderItems[i].quantity}          ${result.itemPrices[i]}          ${result.itemtotal[i]}`)
// // }
// // console.log("*****************************************************")
// // console.log("Total Amount                                   ",result2.subtotal,"Rs") 
// // console.log("SGST(2.5%)                                   ", parseFloat(result2.sgtax.toFixed(2)),"Rs")
// // console.log("CGST(2.5%)                                   ", parseFloat(result2.cgtax.toFixed(2)),"Rs")
// // console.log("VAT(12.5%)                                   ", parseFloat(result2.vtax.toFixed(2)),"Rs")
// // console.log("*****************************************************")
// // console.log("Grand Total                                  ",parseFloat(result2.totalamount.toFixed(2)))

// let delResult = deleteItem("Idli")
// console.log("After deleting an item for the item list",delResult)
// console.log("Length of list of items after deleting an item to it ",items.length)
// console.log("List of items ",items)

// const item5 = new OrderItem("Dosa", 2);
// const item6 = new OrderItem("Idli", 1);

// order.addItem(item5);
// order.addItem(item6);

// let result3 = generateBill(order, taxes)
// console.log("                    Order Bill                       ")   
// console.log("*****************************************************")
// console.log("Item Name      Quantity        Net Price   Item Total")
// console.log("*****************************************************")
// for(let i=0; i<order.orderItems.length; i++){
// console.log(order.orderItems[i].name, "            ", order.orderItems[i].quantity, "             ", result3.itemPrices[i], "        ", result3.itemtotal[i] )
// // console.log(`${order.orderItems[i].name}          ${order.orderItems[i].quantity}          ${result.itemPrices[i]}          ${result.itemtotal[i]}`)
// }
// console.log("*****************************************************")
// console.log("Total Amount                                   ",result3.subtotal,"Rs") 
// console.log("SGST(2.5%)                                   ", parseFloat(result3.sgtax.toFixed(2)),"Rs")
// console.log("CGST(2.5%)                                   ", parseFloat(result3.cgtax.toFixed(2)),"Rs")
// console.log("VAT(12.5%)                                   ", parseFloat(result3.vtax.toFixed(2)),"Rs")
// console.log("*****************************************************")
// console.log("Grand Total                                  ",parseFloat(result3.totalamount.toFixed(2)))

// // let delResult1 = deleteItem("Poha")
// // console.log("After deleting an item for the item list",delResult1)
// // console.log("Length of list of items after deleting an item to it ",items.length)
// // console.log("List of items ",items)

// function generateBill(order,taxes) {    
//     let itemtotal = []
//     let subtotal = 0
//     let itemPrices = []
    
//     for (let i = 0; i < order.orderItems.length; i++) {
//         for (let j = 0; j < items.length; j++) {
//             // console.log("88888888", order.orderItems[i])
//             if (order.orderItems[i].name == items[j].itemName) {
//                 // console.log("77777777",items[j].itemPrice)
//                 itemPrices.push(items[j].itemPrice)
//             }            
//         }        
//     }

//     for (let i = 0; i < order.orderItems.length; i++) {
//         let calculate = 0
//         calculate = order.orderItems[i].quantity * itemPrices[i]
//         itemtotal.push(calculate)
//         subtotal += calculate
//     }
    
//     let vtax = subtotal*taxes.vat/100
//     let sgtax = subtotal*taxes.sgst/100
//     let cgtax = subtotal*taxes.cgst/100  
//     let totalamount = subtotal + vtax + sgtax + cgtax
    
//     return {itemtotal, itemPrices, subtotal, vtax, sgtax, cgtax, totalamount}
// }

// // const item7 = new OrderItem("Dosa", 2);
// // const item8 = new OrderItem("Idli", 1);

// // order.addItem(item7);
// // order.addItem(item8);

// // let result4 = generateBill(order, taxes)
// // console.log("                    Order Bill                       ")   
// // console.log("*****************************************************")
// // console.log("Item Name      Quantity        Net Price   Item Total")
// // console.log("*****************************************************")
// // for(let i=0; i<order.orderItems.length; i++){
// // console.log(order.orderItems[i].name, "            ", order.orderItems[i].quantity, "             ", result4.itemPrices[i], "        ", result4.itemtotal[i] )
// // // console.log(`${order.orderItems[i].name}          ${order.orderItems[i].quantity}          ${result.itemPrices[i]}          ${result.itemtotal[i]}`)
// // }
// // console.log("*****************************************************")
// // console.log("Total Amount                                   ",result4.subtotal,"Rs") 
// // console.log("SGST(2.5%)                                   ", parseFloat(result4.sgtax.toFixed(2)),"Rs")
// // console.log("CGST(2.5%)                                   ", parseFloat(result4.cgtax.toFixed(2)),"Rs")
// // console.log("VAT(12.5%)                                   ", parseFloat(result4.vtax.toFixed(2)),"Rs")
// // console.log("*****************************************************")
// // console.log("Grand Total                                  ",parseFloat(result4.totalamount.toFixed(2)))

let items = []    
   
let reply;

let flag;

let resultstatus;

const message = {
    added: "Item added successfully in the Items list",
    itemExist: "Item already exist in the list of Items",
    edited: "Item edited successfully",
    notEdited: "Item properties not changed",
    deleted: "Item deleted successfully from the list of Items",
    notExist: "Item does not exist in the list of items",
    emptyList: "Item list does not contain any item",
    hotelRegistered: "Hotel registerd successfully",
    businessEmailExist: "This email is already associated with the another hotel you have to use different email"
}

const taxes = {
    sgst: 2.5,
    cgst: 2.5,
    vat: 12.5
}

let hotels = []

function addHotel(name, phone, email, address, taxes) {
    if (hotels.length<1) {
        const hotel = {
            hotelID : 1,
            hotelName : name,
            hotelPhoneNo : phone,
            hotelEmail : email,
            hotelAddress : address,
            hotelTaxes : taxes
        }
        hotels.push(hotel)
        resultstatus = true
        reply == message.hotelRegistered
        return {hotels,resultstatus, reply}

    } else {
        for (let i = 0; i < hotels.length; i++) {
            // name == hotels[i].hotelName ? 
            if (name === hotels[i].hotelName) {
                if (email === hotels[i].hotelEmail) {
                    resultstatus = false
                    reply = message.businessEmailExist
                    return {hotels, resultstatus, reply}
                } else {
                    const hotel = {
                        hotelID : hotels.length + 1,
                        hotelName : name,
                        hotelPhoneNo : phone,
                        hotelEmail : email,
                        hotelAddress : address,
                        hotelTaxes : taxes
                    }
                    hotels.push(hotel)
                    resultstatus = true
                    reply = message.hotelRegistered
                    return {hotels,resultstatus, reply}
                }
            } else {
                const hotel = {
                    hotelID : hotels.length + 1,
                    hotelName : name,
                    hotelPhoneNo : phone,
                    hotelEmail : email,
                    hotelAddress : address,
                    hotelTaxes : taxes
                }
                hotels.push(hotel)
                resultstatus = true
                reply = message.hotelRegistered
                return {hotels,resultstatus, reply}
            }          
        }
    }
}

// function addHotelMenuItems () {

// }

let hotelMenuItems = []

function addHotelMenuItem(itemName,itemPrice,itemType, hotelID) {
    for (let k = 0; k < hotels.length; k++) {
        if (hotelID === hotels[i].hotelID) {
            // if the list of items is empty 
            if (hotelMenuItems.length<1) {   
                let item = {
                    itemName: itemName,
                    itemPrice: itemPrice,
                    itemType: itemType
                }        
                hotelMenuItems.push(item)
                resultstatus = true
                reply = message.added
                return {hotelMenuItems, itemName, resultstatus, reply}        
            } else {
                for (let i=0; i<hotelMenuItems.length; i++) {
                    // to find if element exist in list of items
                    if (itemName===hotelMenuItems[i].itemName) {
                        resultstatus = false
                        const reply = message.itemExist
                        return {hotelMenuItems, itemName, resultstatus, reply}
                    } else {
                        // if item is not in the list of items  
                        let item = {
                            itemName: itemName,
                            itemPrice: itemPrice,
                            itemType: itemType
                        }        
                        hotelMenuItems.push(item)
                        resultstatus = true
                        reply = message.added
                        return {hotelMenuItems, itemName, resultstatus, reply}
                    }
                }  
            }
        }
    }
}



  