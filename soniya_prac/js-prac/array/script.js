// Start Array


// " Array is collection of data , array are variable which can hold more than one value.



// Creating an array

// let arr = [78, 32, 33, 67, 56, 45, 23];
// console.log(arr);

// // Access length of array
// console.log(arr.length);

// // Access the first array element

// // alert(arr[0]);
// console.log(arr[0]);


// // Accessing array element by position 
// console.log(arr[0])
// console.log(arr[3])
// console.log(arr[5])

// // Changing an array element
// arr[0] = 100;
// arr[1] = 200;
// arr[2] = 200;
// console.log(arr);

// // Converting an array to a string
// console.log(arr.toString());

// // Accessing length of array element
// let arr1 =["jnnj", "djjfkkf", "hbhbhjqwbe"]
// console.log(arr1[1].length);

// // Accessing the last array element
// let arr3 = [78, 32, 33, 67, 56, 45, 23]
// console.log(arr3[arr3.length-1])

// // -----------------------------

// // Looping Array Element [ Print All element of an Array]

// const arr4 = ["java", "Array", 25, 100, "React"];

// for(let idx = 0; idx< arr4.length; idx++){
// console.log(arr4[idx]);
// console.log(arr4.length);
// arr4[2]="HTML";
// console.log(arr4);
// }

// for of
// for(let idx of arr4){
// // for(let idx=0; idx<arr4-1; idx++){
//     // console.log(idx);
//     // console.log(arr4[idx]);
//     // console.log(arr.toUpperCase());
// }


// ----------------------------------------------------------------------

// Array Method =================

// at(): at() method returns an indexed element from an array.


// 1. Push(): add to end

// let foodItems=["tomato", "potato", "mango", "chips"];
// foodItems.push("burger", "paneer", "onion");
// console.log(foodItems);


// 2.  Pop(): delete from end & return / toString(): converts array to string

// foodItems.pop();
// console.log(foodItems);
// let deleteItem=foodItems.pop();
// console.log("deleted",deleteItem);
// console.log(foodItems.toString());


// 3.  concat(): joins multiple arrays & returns result

// let marvel_heroes=["thor","spiderman","ironman"];
// let dc_heroes=["superman","batman"];

// let heroes = marvel_heroes.concat(dc_heroes);
// console.log(heroes);


// 4.  unshift(): add to start

// let marvel_heroes=["thor","spiderman","ironman"];

// let heroes=marvel_heroes.unshift("antman");

// console.log(heroes);
// console.log(marvel_heroes);


// 5. shift(): delete from start & return

// let marvel_heroes=["thor","spiderman","ironman"];

// let val = marvel_heroes.unshift();
// console.log("delete", val);


// 6. Slice(): returns a piece of the array
// slice (startidx, endllex)

// let marvel_heroes=["thor","spiderman","ironman", "antman", "dr. stranger"];

// console.log(marvel_heroes);

// console.log(marvel_heroes.slice(1,5));


// 7.  splice(): change original array(add, remove, replace);

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// Add Element
// fruits.splice(2, 0, "Lemon", "Kiwi");

// Delete Element
// fruits.splice(2,1);

// Replace Element
// fruits.splice(2, 1, "pineapple");

// practice question -----

let Companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// Remove the first company from the array ?
// Companies.shift();

// Remove Uber & Add Ola in this place ?
// Companies.splice(2, 1, "Ola");

// Add Amazon at the end ?
Companies.push("Amazon");