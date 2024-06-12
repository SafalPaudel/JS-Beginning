const accountId = 144553
let accountEmail = "safal@google.com"
var accountPassword = "12345"
accountCity = "Kathmandu"
let accountState;
//accountId = 2  // not allowed


accountEmail = "ab@ab.com"
accountPassword = "212121"
accountCity = "Pokhara"

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail , accountPassword, accountCity, accountState])
