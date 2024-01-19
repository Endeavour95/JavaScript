let resultstatus;

const message = {
    hotelRegistered: "Hotel registerd successfully",
    hotelExist: "Hotel already registered",
    hotelEmailExist: "This business email is already registered with another business",
    businessEmailExist: "This email is already associated with the another hotel you have to use different email",
    hotelMenuItemAdded: "Item added successfully in the Hotel Menu",
    hotelMenuItemExist: "Item already exist in the list of Items",
    hotelMenuItemEdited: "Hotel Menu Item edited successfully",
    hotelMenuItemDeleted: "Hotel Menu Item deleted successfully from the list of Items",
    emptyList: "Item list does not contain any item",
    addItem : "Add at least 1 item to make the order",
    calculated : "Total for every item is calculated and object with itemId as key and value as total is returned"
}

let hotels = {}; // consider empty object to store hotels

const taxes = {
    sgst: 2.5,
    cgst: 2.5,
    vat: 12.5
}

function addHotel(name, phone, email, address, taxes) {
    let hotelflag;
    
    if (Object.keys(hotels).length < 1) { // when hotels object is empty
        // let hotel = {            
        //     hotelName : name,
        //     hotelPhoneNo : phone,
        //     hotelEmail : email,
        //     hotelAddress : address,
        //     hotelTaxes : taxes,
        //     hotelMenu: {}
        // }

        let firstHotelId = Object.keys(hotels).length + 1 // id to assign for first item
        hotels[firstHotelId] = {       // first hotel added to hotels object 
            hoteId : firstHotelId,    
            hotelName : name,
            hotelPhoneNo : phone,
            hotelEmail : email,
            hotelAddress : address,
            hotelTaxes : taxes,
            hotelMenu: {}
        } 
            
        const status = true
        const replyMessage = message.hotelRegistered

        return {hotels, status, replyMessage}
    } 
    else { // if hotels object already contain hotels
        let hotelsKeyArray = Object.keys(hotels)   // to make the array of hotel ids present in the hotels object     

        for (let i = 0; i < hotelsKeyArray.length; i++) {            
            if (name === hotels[hotelsKeyArray[i]].hotelName) {  // if hotel name already present in the hotels object            
                if (email == hotels[hotelsKeyArray[i]].hotelEmail) { // if hotel then exist then check email of the existed hotel with entered email and email has to be unique
                    hotelflag = false
                    break
                } else {                   
                    hotelflag = true
                    break
                }
            } else {
                hotelflag = true
                break
            }            
        }

        if (hotelflag == true) { // if hotel name not in the hotels object then store it to the hotels object
            let key = Object.keys(hotels).pop()
            let id = Number(key) + 1 // id to assign for first item
            hotels[id] = {       // first hotel added to hotels object 
                hoteId : id,    
                hotelName : name,
                hotelPhoneNo : phone,
                hotelEmail : email,
                hotelAddress : address,
                hotelTaxes : taxes,
                hotelMenu: {}
            } 
                
            const status = true
            const replyMessage = message.hotelRegistered

            return {hotels, status, replyMessage}
        } else { // if hotel name found in the hotels object then do nothing and send reply
            const status = false    
            const replyMessage = message.hotelEmailExist

            return {status, replyMessage}
        }            
    }
}

addHotel("Grand Mehfil", "072125669", "grandmehfil@gmail.com", "Amravati", taxes)

addHotel("Gauri Inn", "072127877", "gauriinn@gmail.com", "Amravati", taxes)

addHotel("Up & Above", "072127567", "upandabove@gmail.com", "Amravati", taxes)

addHotel("Grand Mehfil", "072125269", "grandmehfilnew@gmail.com", "Amravati", taxes)

addHotel("Gauri Inn", "072127877", "gauriinn@gmail.com", "Amravati", taxes)


function addHotelMenuItem(hotelId, item) {    
    let addItemflag;
    
    if (Object.keys(hotels[hotelId].hotelMenu).length < 1) { // if hotel menu for the given hotel id is empty
               
        let firstItemId = Object.keys(hotels[hotelId].hotelMenu).length + 1 // for assign the id for the first menu item
        item["itemId"] = firstItemId
        hotels[hotelId].hotelMenu[firstItemId] = item // store the first menu item

        const updatedHotelMenu = hotels[hotelId].hotelMenu   // to return the updated hotel menu for given hotel id     
        const status = true    
        const replyMessage = message.hotelMenuItemAdded

        return {updatedHotelMenu, status, replyMessage}
    }
    else {  // if hotel menu already contain items
        for (let i = 1; i <= Object.keys(hotels[hotelId].hotelMenu).length ; i++) {
            if (item.itemName === hotels[hotelId].hotelMenu[i].itemName) { // to check if menu item name is alredy existed in the hotel menu
                addItemflag = false
                break
            } else { 
                addItemflag = true
                break
            }            
        }
        
        if (addItemflag == true) {  // if item is not found in the hotel menu    
            let key = Object.keys(hotels[hotelId].hotelMenu).pop() // to assign the id for item in hotel menu
            let id = Number(key) + 1
            
            // let nextItemId = Object.keys(hotels[hotelId].hotelMenu).length + 1  
            item["itemId"] = id          
            hotels[hotelId].hotelMenu[id] = item  // item added successfully in the hotel menu      
           
            const updatedHotelMenu = hotels[hotelId].hotelMenu // to return updated hotel menu for the given id
            const status = true    
            const replyMessage = message.hotelMenuItemAdded

            return {updatedHotelMenu, status, replyMessage}
        } else { // if item found in the hotel menu           
            const status = false    
            const replyMessage = message.hotelMenuItemExist

            return {status, replyMessage}
        }
    }
}

function editHotelMenuItem (hotelId, itemId, editProperties) {    
    if (editProperties.hasOwnProperty("itemPrice")) { // to check editProperties contain property itemPrice
        hotels[hotelId].hotelMenu[itemId].itemPrice = editProperties.itemPrice
    }
    if (editProperties.hasOwnProperty("itemType")) { // to check editProperties contain property itemType
        hotels[hotelId].hotelMenu[itemId].itemType = editProperties.itemType
    }
    
    const updatedHotelMenu = hotels[hotelId].hotelMenu  // to return updated hotel menu      
    const status = true    
    const replyMessage = message.hotelMenuItemEdited

    return {updatedHotelMenu, status, replyMessage}
}

function delHotelMenuItem (hotelId, itemId) {
    delete hotels[hotelId].hotelMenu[itemId]

    const updatedHotelMenu = hotels[hotelId].hotelMenu        
    const status = true    
    const replyMessage = message.hotelMenuItemDeleted

    return {updatedHotelMenu, status, replyMessage}
}


function makeOrder (hotelId, orderList) {
    let subTotal = {}
    if (orderList[1] == undefined) {

        const status = false    
        const replyMessage = message.addItem

        return {status, replyMessage}
    } else {
        for (const key in orderTest1) {
            // if (Object.hasOwnProperty.call(orderTest1, key)) {
                const element = orderTest1[key];
                let price = hotels[hotelId].hotelMenu[element.itemId].itemPrice
                let quan = orderTest1[key].quantity
                subTotal[element.itemId] = price * quan
                
                // return subTotal
            // }
        }
        const status = true   
        const replyMessage = message.calculated

        return {subTotal, status, replyMessage}
    }
}
// let idealHotellist = {
//     '5': {        
//         hotelName: 'Gauri Inn',
//         hotelPhoneNo: 72127877,
//         hotelEmail: 'gauriinn@gmail.com',
//         hotelAddress: 'Amravati',
//         hotelTaxes: { sgst: 2.5, cgst: 2.5, vat: 12.5 },
//         hotelMenu: {
//         '1': { itemName: 'Idli', itemPrice: 15, itemType: 'Rice' }
//         }
//     }
// }

// let item1 = (hotels["5"].hotelMenu = {
    // "1" : {
    //     itemId : 1,
    //     itemName : "Idli",
    //     itemPrice : 15,
    //     itemType : "Rice"
    // }
// })
// console.log('11111',item1)
// console.log('22222',hotels["5"])

let addItem1 = {    
    itemName : "Idli",
    itemPrice : 10,
    itemType : "Rice"
}

let addItem2 = {    
    itemName : "Dosa",
    itemPrice : 30,
    itemType : "Rice"
}

let addItem3 = {    
    itemName : "Appe",
    itemPrice : 20,
    itemType : "Rice"
}

let addItem4 = {    
    itemName : "Idli",
    itemPrice : 15,
    itemType : "Rava"
}

let result1 = addHotelMenuItem(5, addItem1)
console.log("Resutl for first add Item",result1)

let result2 = addHotelMenuItem(5, addItem2)
console.log("Resutl for second add Item",result2)

let result3 = addHotelMenuItem(5, addItem3)
console.log("Resutl for third add Item",result3)

let result4 = addHotelMenuItem(5, addItem4)
console.log("Resutl for third add Item",result4)

let editTest1 = {
    itemPrice : 50
}

let editTest2 = {
    itemPrice : 15,
    itemType : "Rava"
}

let result5 = editHotelMenuItem(5, 2, editTest1)
console.log("Result for first edit Item", result5)

let result6 = editHotelMenuItem(5, 1, editTest2)
console.log("Result for second edit Item", result6)
    
let result7 = delHotelMenuItem(5, 1)
console.log("Result for first delete Item", result7)

// let orderTest1 = [
//     {itemId: 1,
//     quantity : 2},
//     {itemId: 3,
//     quantity : 1},
//     {itemId: 2,
//     quantity : 4}
// ]

let orderTest1 = {
    '1' : {
        itemId: 2,
        quantity : 2
    },
    '2' : {
        itemId: 3,
        quantity : 1
    },
    // '3' : {
    //     itemId: 2,
    //     quantity : 4
    // }
}

let mk1 = makeOrder(5, orderTest1)
console.log(mk1)
