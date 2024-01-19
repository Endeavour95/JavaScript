let resultstatus;

const message = {
    hotelRegistered: "Hotel registerd successfully",
    hotelExist: "Hotel already registered",
    hotelEmailExist: "This business email is already registered with another business",
    businessEmailExist: "This email is already associated with the another hotel you have to use different email",
    hotelMenuItemAdded: "Item added successfully in the Hotel Menu",
    hotelMenuItemExist: "Item already exist in the list of Items",
    // hotelMenuItemNotExist: "Item does not exist in the list of items",
    hotelMenuItemEdited: "Hotel Menu Item edited successfully",
    // hotelMenuItemNotEdited: "Item properties not changed",
    hotelMenuItemDeleted: "Hotel Menu Item deleted successfully from the list of Items",
    emptyList: "Item list does not contain any item"
}

let hotels = {};

// let hotelMenu = {
//     itemId: 1,
//     itemName : "Idli",
//     itemPrice : 15,
//     itemType : "Rice"
// };

const taxes = {
    sgst: 2.5,
    cgst: 2.5,
    vat: 12.5
}

function addHotel(name, phone, email, address, taxes) {
    let hotelflag;
    
    if (Object.keys(hotels).length < 1) {
        let hotel = {            
            hotelName : name,
            hotelPhoneNo : phone,
            hotelEmail : email,
            hotelAddress : address,
            hotelTaxes : taxes,
            hotelMenu: {}
        }

        let firstHotelId = Object.keys(hotels).length + 1
        hotels[firstHotelId] = hotel

        const status = true
        const replyMessage = message.hotelRegistered

        return {hotels, status, replyMessage}
    } 
    else {
        let hotelsKeyArray = Object.keys(hotels)        

        for (let i = 0; i < hotelsKeyArray.length; i++) {            
            if (name === hotels[hotelsKeyArray[i]].hotelName) {                
                if (email == hotels[hotelsKeyArray[i]].hotelEmail) {
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

        if (hotelflag == true) {
            let hotel = {                
                hotelName : name,
                hotelPhoneNo : phone,
                hotelEmail : email,
                hotelAddress : address,
                hotelTaxes : taxes,
                hotelMenu : {}
            }
    
            let nextHotelId = Object.keys(hotels).length + 1    
            hotels[nextHotelId] = hotel
    
            const status = true    
            const replyMessage = message.hotelRegistered
    
            return {hotels, status, replyMessage}
        } else {
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
    
    if (Object.keys(hotels[hotelId].hotelMenu).length < 1) {
               
        let firstItemId = Object.keys(hotels[hotelId].hotelMenu).length + 1        
        hotels[hotelId].hotelMenu[firstItemId] = item

        const updatedHotelMenu = hotels[hotelId].hotelMenu        
        const status = true    
        const replyMessage = message.hotelMenuItemAdded

        return {updatedHotelMenu, status, replyMessage}
    }
    else {        
        for (let i = 1; i <= Object.keys(hotels[hotelId].hotelMenu).length ; i++) {
            // const hotelMenuItem = hotels[hotelId].hotelMenu[i].itemName
            console.log("111111",hotels[hotelId].hotelMenu[i].itemName)
            if (item.itemName === hotels[hotelId].hotelMenu[i].itemName) {
                addItemflag = false
                break
            } else {
                addItemflag = true
                break
            }            
        }
        
        if (addItemflag == true) {            
            let nextItemId = Object.keys(hotels[hotelId].hotelMenu).length + 1            
            hotels[hotelId].hotelMenu[nextItemId] = item        
           
            const updatedHotelMenu = hotels[hotelId].hotelMenu
            const status = true    
            const replyMessage = message.hotelMenuItemAdded

            return {updatedHotelMenu, status, replyMessage}
        } else {            
            const status = false    
            const replyMessage = message.hotelMenuItemExist

            return {status, replyMessage}
        }
    }
}

function editHotelMenuItem (hotelId, itemId, editProperties) {
    // for (let i = 1; i <= Object.keys(hotels[hotelId].hotelMenu).length ; i++) {
    //     const hotelMenuItem = hotels[hotelId].hotelMenu[i].itemName
    //     // console.log(testting)
    //     const existedItem = 
    //     if ( === hotelMenuItem) {
    //         addItemflag = false
    //         break
    //     } else {
    //         addItemflag = true
    //         break
    //     }            
    // }

    // const itemProperties = hotels[hotelId].hotelMenu[itemId]

    // for (let i = 0; i < Object.keys(hotels[hotelId].hotelMenu[itemId]).length; i++) {        
    // }
    
    // let priceflag;
    // let typeflag;
    // for (let j = 0; j < Object.keys(editProperties).length; j++) {
    //     if (editProperties[j] == itemPrice) {
    //         hotels[hotelId].hotelMenu[itemId].itemPrice = editProperties.itemPrice
    //         priceflag = true
    //     } else if (editProperties[j] == itemType) {
    //         hotels[hotelId].hotelMenu[itemId].itemType = editProperties.itemType
    //         typeflag = true
    //     } else {
    //         break
    //     }      
    // }

    // for (let i = 1; i <= Object.keys(hotels[hotelId].hotelMenu).length ; i++) {
    //     if (editProperties.hasOwnProperty("itemPrice")) {
    //         hotels[hotelId].hotelMenu[itemId].itemPrice = editProperties.itemPrice
    //     } else if (editProperties.hasOwnProperty("itemType")) {
    //         hotels[hotelId].hotelMenu[itemId].itemType = editProperties.itemType
    //     } 
    // } 

    if (editProperties.hasOwnProperty("itemPrice")) {
        hotels[hotelId].hotelMenu[itemId].itemPrice = editProperties.itemPrice
    }
    if (editProperties.hasOwnProperty("itemType")) {
        hotels[hotelId].hotelMenu[itemId].itemType = editProperties.itemType
    }
    // editProperties.hasOwnProperty(itemPrice)
    // editProperties.hasOwnProperty(itemType)

    // function hasProperty(obj, propertyName) {
    //     return obj.hasOwnProperty(propertyName);
    // }
    
    // const myObject = {
    //     property1: 'value1',
    //     property2: 'value2',
    // };
    
    // console.log(hasProperty(myObject, 'property1')); // Output: true
    // console.log(hasProperty(myObject, 'property3')); // Output: false
      

    // const editItem = hotels[hotelId].hotelMenu[itemId]
    // hotels[hotelId].hotelMenu[itemId].itemPrice = editProperties.itemPrice
    // hotels[hotelId].hotelMenu[itemId].itemType = editProperties.itemType
    // const editedItem = hotels[hotelId].hotelMenu[itemId]
    // console.log(editedItem)
    // console.log(hotels[hotelId].hotelMenu)
    // console.log(editItem)

    const updatedHotelMenu = hotels[hotelId].hotelMenu        
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

let orderTest1 = [
    {itemId: 1,
    quantity : 2},
    {itemId: 3,
    quantity : 1},
    {itemId: 2,
    quantity : 4}
]

let result8 = makeOrder (5, orderTest1)