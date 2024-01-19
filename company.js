const departments = {
    '1' : {
        deptId : 1,
        deptName : "IT"
    },
    '2' : {
        deptId : 2,
        deptName : "HR"
    },
    '3' : {
        deptId : 3,
        deptName : "Engineering"
    }
}

const message = {
    empRegistered : "Employ registered successfully",
    empExist : "Employ exist in the Employees table",
    empEdited : "Employ details updated successfully",
    empDeleted : "Employ associated with empId deleted successfully",
    empNotExist : "Employ empId not found in Employess table"
    
}

let employees = {}

// let employees = {
//     '1' : {
//         empId : 1,
//         empFName : "Ashutosh",
//         empLName : "Verulkar",
//         empSalary : 20000,
//         empDesignation : "Developer",
//         empDept : departments[1]
//     },
//     '2' : {
//         empId : 2,
//         empFName : "Harshal",
//         empLName : "Dhokane",
//         empSalary : 37000,
//         empDesignation : "Developer",
//         empDept : departments[1]
//     }
// }


// let id = 1

function addEmployee(fName, lName, salary, designation, deptId) {
    // if (employees == "{}") {
    // if (employees == null) {
    // if (typeof employees == undefined) {
    if (Object.keys(employees).length < 1) {
        employees[1] = {
            empId : 1,
            empFName : fName,
            empLName : lName,
            empSalary : salary,
            empDesignation : designation,
            empDept : deptId
        }

        // id++
        const status =  true
        const replyMessage = message.empRegistered

        return {employees, status, replyMessage}

    } 
    else {
        let key = Object.keys(employees).pop()
        let id = Number(key) + 1
        employees[id] = {
            empId : id,
            empFName : fName,
            empLName : lName,
            empSalary : salary,
            empDesignation : designation,
            empDept : deptId
        }

        // id++
        const status =  true
        const replyMessage = message.empRegistered

        return {employees, status, replyMessage}
    }
}
 
function editEmployee (empId, editProperties) {
    if (employees[empId]) {
        for (const prop in editProperties) {
            if (editProperties.hasOwnProperty(prop)) {
                employees[empId][prop] = editProperties[prop];
            }
        }
    
        const status = true
        const replyMessage = message.empEdited
    
        return {employees, status, replyMessage}
    } else {
        const status = false 
        const replyMessage = message.empNotExist

        return {employees, status, replyMessage}
    }
}

function delEmployee (empId) {
    if (employees[empId]) {
        delete employees[empId]
        const status = true
        const replyMessage = message.empDeleted
    
        return {employees, status, replyMessage}
    } else {
        const status = false 
        const replyMessage = message.empNotExist

        return {employees, status, replyMessage}
    }

}

function avgSalary () {
    let empCount = Object.keys(employees).length

    let sum = 0

    for (let key in employees) {
        sum += Number(employees[key].empSalary)
    }

    let avg = sum/empCount

    const status = true

    return {status, avg}
}

function noOfEmployees () {
    let empCount = Object.keys(employees).length

    const status = true

    return {status, empCount}
}

// let add1 = addEmployee("Ashutosh", "Verulkar", "20000", "Developer", 1)
// console.log(add1)

// let add2 = addEmployee("Harshal", "Dhokane", "35000", "Developer", 1)
// console.log(add2)

// let add3 = addEmployee("Ashutosh", "Verulkar", "20000", "Developer", 1)
// console.log(add3)

// let editProperties1 = {
//     empSalary : '25000'
// }

// let edit1 = editEmployee(1, editProperties1)
// console.log(edit1)

// let editProperties2 = {
//     empSalary : '25000',
//     empDesignation : "Tester"
// }

// let edit2 = editEmployee(1, editProperties2)
// console.log(edit2)

// let del1 = delEmployee(2)
// console.log(del1)

// let avgSal1 = avgSalary()
// console.log(avgSal1)

// let noEmp1 = noOfEmployees()
// console.log(noEmp1)