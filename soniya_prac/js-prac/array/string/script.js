// String is a sequence of characters used to represent text, string are immutable, strings cannot be changed, only replaced.

// create string
// let str = "ApnaCollege";

// String Length
// let text = str.length;

// String Indices
// console.log(str[4]);

// Template Literals in JS -
// A way to have embedded expressions in strings for example. `this is a template literal`
// let specialString = `This is a template literal`;
// console.log(specialString);
// console.log(typeof specialString);


// String interpolation -
// To create strings by substitution of placeholders for example. `string text ${expression} string text`

// let obj = {
//     item: "pen",
//     price:10,
// }

// let output = `The Cost Of ${obj.item} is ${obj.price} rupees.`;
// console.log(output);

// String Methods
// javascript strings are primitive and immutable: All string methods produce a new string without altering the original string. 

// String Length

let str = "abcdefghijklmnopqrstuvwxyz";
console.log(str.charAt()); // charAt() method: its not allows negative indexes.
console.log(str[0]); // 
console.log(str.at(-5));// at() method: it allows negative indexes.
console.log(str.length); // length method: its returns the length of a string.
console.log(str.toUpperCase());// string toUpperCase() method: convert to upper case of string.
console.log(str.toLowerCase());// string toLowerCase() method: convert to lower case of string.
console.log(str.trim());// string trim() metheod : remove whitespace from both sides of a string.

let str1 = "Apple,Banana,Kiwi,Mango,Papaya,";
console.log(str1.slice(5, 15)); // Slice() method : the method takes 2 parameters: start position, and end position(end not included)

let str2 = "hello,world,welcome";
let result = str1.concat(str2);// concat() method: joins two or more strings. the concat() method can be used instead of the plus operator. 
console.log(result);
console.log(str1.replace("Apple", "Orange"));// Replace() method: this method replaces a specified value with another value in a string.

// Prompt the user to enter their full name. generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length ?

let fullname = prompt("Enter Your Name withou spaces");
let username = "@" + fullname + fullname.length;
console.log(username);