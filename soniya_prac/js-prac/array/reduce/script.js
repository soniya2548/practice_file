const companies = [
    {
        id: 1,
        name: "Google",
        category: "Product Based",
        start: 1992,
        end: 2004,
    },
    {
        id: 2,
        name: "Microsoft",
        category: "Product Based",
        start: 1975,
        end: 2005,
    },
    {
        id: 3,
        name: "Amazon",
        category: "Product Based",
        start: 1992,
        end: 2008,
    },
    {
        id: 4,
        name: "Paytm",
        category: "Product Based",
        start: 1999,
        end: 2007,
    },
    {
        id: 5,
        name: "Coforge",
        category: "Service Based",
        start: 1989,
        end: 2010,
    },
    {
        id: 6,
        name: "Mindtree",
        category: "Service Based",
        start: 1982,
        end: 2012,
    },
    {
        id: 7,
        name: "Infosys",
        category: "Service Based",
        start: 1981,
        end: 2014,
    },
    {
        id: 8,
        name: "Accenture",
        category: "Service Based",
        start: 1989,
        end: 2009,
    },
    
];



const ages = [20,25,30,28,18,15,19,32,44,55,61,13,64,85,80];

// Simple 
let total = 0;
for(let i=0; i<ages.length; i++){
    total += ages[i];
}
console.log(total, "For loop");


// reduce()
const sumage = ages.reduce(function(total,age){
    return total+age;
},0)
console.log(sumage, "Reduce method");

// reduce():Arrow function
const sumage1 = ages.reduce((total,age) => total+age ,0)
console.log(sumage1, "Arrow Function");


const numbers = [45, 4, 9, 16, 25];

// Arrow -----
 const numberSum = numbers.reduce((total,number) => total+number, 0)
 console.log(numberSum, "the total of numbers");

//  function ------
const numberSum1 = numbers.reduce(function(total,number){
    return total+number;
},0)
console.log(numberSum1, "the sum of the numbers");