// Nested If else ..................

// let winningNumber = 45;
// let userGuess = +prompt("Guess a number");
// console.log(typeof userGuess, userGuess);
// if(userGuess === winningNumber){
//     console.log("Your guess is right!!");
// }else{
//     if(userGuess < winningNumber){
//         console.log("too low!!")
//     }else{
//         console.log("too high!!!");
//     }
// }








// If elseif condition ................

// let tempInDegree = 85;
// if (tempInDegree < 0) {
//     console.log("extremely cold outside");
// } else if (tempInDegree < 16) {
//     console.log("it is cold outside");
// } else if (tempInDegree < 25) {
//     console.log("wheather is okay");
// } else if (tempInDegree < 35) {
//     console.log("lets go for swim");
// } else if (tempInDegree < 45) {
//     console.log("turn on AC");
// } else {
//     console.log("too hot!!");
// }



// switch Statement .......................

// let day = 7;
// switch (day) {
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thrusday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid Day");
// }





// While Loop ............

// let i = 0;
// while (i < 6) {
//     console.log(i);
//     i++;
// }
// console.log(`current value of i is ${i}`);



// while loop example ...........

// let num=10;
// let total=0;
// i=0;

// while(i<=100){
//     total=total+i;
//     i++;
// }
// console.log(total);




// for loop ..........
// print 0 to 9


// for(let i=0; i<=9; i++){
//     console.log(i);
// }


// Example

// let total=0;
// let num=100;

// for(let i=1; i<=num; i++){
//     total=total+i; 
// }
// console.log(total);




// break keyword ............

// continue keyword ............

// for(let i=1; i<=10; i++){
//     if(i===4){
//         break;
//     }
//     console.log(i);
// }


// for(let i=1; i<=10; i++){
//     if(i===4){
//         continue;
//     }
//     console.log(i);
// }



// do while loop .................

// let i=10;
// do{
//     console.log(i);
//     i++;
// }while(i<=9);
// console.log("Value of i is", i)




// function declaration ................



// function singHappyBirthday(){
// console.log("Happy birthday to you......")
// }
// singHappyBirthday()
// singHappyBirthday()
// singHappyBirthday()
// singHappyBirthday()

// function sumThreeNumber(number1, number2, number3){
//     return number1+number2+number3;
// }
// const returnedValue=sumThreeNumber(2,4,5)
// console.log(returnedValue)



// isEven
// input: 1 Number
// output: true, false

// function isEven(number){
//     if(number % 2 ===0){
//         return true;
//     }
//     return false;
// }
// console.log(isEven(15));

// console.log(12 % 2 === 0);

// function firstchar(anystring){
//     return anystring[4];
// }
// console.log(firstchar("abc"));



// function findtarget(array, target){
//     for(let i=0; i<array.length; i++)
//     if(array[i]===target){
//         return i;
//     }
//     return -1;
// }
// const myarray=[1,3,8,90]
// const ans = findtarget(myarray, 90);
// console.log(ans);




// function expression ..................



// const singHappyBirthday= function(){
//     console.log("hello....");
// }
// singHappyBirthday();


// const sumThreeNumber= function(number1, number2, number3){
//     return number1+number2+number3;
// }
// const ans =sumThreeNumber(2,3,4);
// console.log(ans);

// isEven
// input: 1 Number
// output: true, false

// const isEven=(number) =function(){
//     if(number % 2 ===0){
//         return true;
//     }
//     return false;
// }
// console.log(isEven(15));





// Arrow function ...............



// const singHappyBirthday= () =>{
//     console.log("hello....");
// }
// singHappyBirthday();


// const sumThreeNumber= (number1, number2, number3) =>{
//     return number1+number2+number3;
// }
// const ans =sumThreeNumber(2,3,4);
// console.log(ans);

// const isEven = number  => {
//     if(number % 2 ===0){
//         return true;
//     }
//     return false;
// }
// console.log(isEven(14));





// $(document).ready(function(){
//     $('.dropdown-submenu a.test').on("click", function(e){
//       $(this).next('ul').toggle();
//       e.stopPropagation();
//       e.preventDefault();
//     });
//   });



// document.querySelector(document).on("pagecreate", function () {
//   document.querySelector("#foo").on("click", function () {
//     // close button
//     var closeBtn = document.querySelector('<a href="#" data-rel="back" class="ui-btn-right ui-btn ui-btn-b ui-corner-all ui-btn-icon-notext ui-icon-delete ui-shadow">Close</a>');

//     // text you get from Ajax
//     var content = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing. Morbi convallis sem et dui sollicitudin tincidunt.</p>";




let burger = document.getElementById('navTrigger'),
  nav = document.getElementById('navMenu');

burger.addEventListener('click', function (e) {
  this.classList.toggle('active');
  nav.classList.toggle('active');
});