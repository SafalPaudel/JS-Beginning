// Dates 

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);        // Date is OBJECT

// let myCreatedDate = new Date(2024, 2, 25)
// let myCreatedDate = new Date(2024, 2, 25, 5, 3)
let myCreatedDate = new Date("07-11-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()


// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDate()} and the time  `

newDate.toLocaleString('default',{
    weekday: "long"
})
console.log(newDate);