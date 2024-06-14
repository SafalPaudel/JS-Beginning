const name = "Safal"
const repoCount = 2

//console.log(name + repoCount + " Paudel");

console.log( ` Hello my name is ${name} and my repo count is ${repoCount}` );    
                // Use Back Text = upper botton of tab     (  `` )      

const gameName = new String('Safal-SP-com') 


// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());         //Original data is not changed
console.log(gameName.charAt(2));
console.log(gameName.indexOf('f'));


const newString = gameName.substring(0, 4)     // We cant give negative value in substring
console.log(newString);

const anotherString = gameName.slice(-7, 4)       // We can give negative value in slice
console.log(anotherString);

const newStringOne = "    Safal   "
console.log(newStringOne);
console.log(newStringOne.trim());           // Trim remove unwanted gaps or sapces

const url = "https://safal.com/safal%20paudel"

console.log(url.replace('%20', '-'))

console.log(url.includes('safal'));
console.log(url.includes('sweetie'));

console.log(gameName.split('-'));

