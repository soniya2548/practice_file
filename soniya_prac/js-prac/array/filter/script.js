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
// const ages = [32,44,55,61,64,85,80];

// for loop
// for(let i=0; i<= ages.length-1; i++){
//     if(ages[i] <= 20){
//         console.log(ages[i]);
//     }
    // else{
    //     console.log(ages[i]);
    // }
// };

// filter() method

/*const age = ages.filter(function(age){
    if(age>=20){
      return  true;
    }
})
console.log(age)
*/

// Arrow function
// const age1 = ages.filter((age) => (age >= 20))
// console.log(age1)

// const  office = companies.filter(function(company){
//     if(company.category === "Product Based"){
//     return true;
// }
// })
// console.log(office);


const  office = companies.filter(company => company.category === "Product Based");
console.log(office);