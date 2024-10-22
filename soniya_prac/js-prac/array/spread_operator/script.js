
/* -------------- in Array Format -------------- */

// var names=["Ajay", "Anuj", "Vivek"];
// function getNames(name1,name2,name3){
// console.log(name1,name2,name3);
// console.log(name2,name3,name1);
// console.log(name3,name1,name2);
// }
// getNames(names[0],names[1],names[2])


// Simple method
// var numbers = [1,2,45,66,23,33];
// function getNumbers(number1,number2,number3,number4,number5,number6){
//     console.log(number4);
// }
// getNumbers(numbers[0],numbers[1],numbers[2],numbers[3],numbers[4]);

// spread operator
// var numbers = [1,2,45,66,23,33];
// function getNumbers(number1,number2,number3,number4,number5,number6){
//     console.log(number1,number2,number3,number4, "reduce method");
// }
// getNumbers(numbers[0],numbers[1],numbers[2],numbers[3],numbers[4]);
// getNumbers(...numbers);
// getNumbers(numbers);


/* -------------- in Object Format -------------- */

var students = {
    name: "Ajay",
    age:"28",
    hobbies:["Cricket","Singing"]
}
// const age = students.age;
// console.log(age);

// const {age,name}=students;
// console.log(age,name);

// rest------
const {...rest}=students;
console.log(rest);

// const Sname= students.name;
// const Shobbies = students.hobbies;
// console.log(age, Sname, Shobbies);