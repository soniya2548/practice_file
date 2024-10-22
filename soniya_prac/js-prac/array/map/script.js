
const companies = [
    {
        name: "Google",
        category: "Product Based",
        start: 1992,
        end: 2004,
    },
    {
        name: "Microsoft",
        category: "Product Based",
        start: 1975,
        end: 2005,
    },
    {
        name: "Amazon",
        category: "Product Based",
        start: 1992,
        end: 2008,
    },
    {
        name: "Paytm",
        category: "Product Based",
        start: 1999,
        end: 2007,
    },
    {
        name: "Coforge",
        category: "Service Based",
        start: 1989,
        end: 2010,
    },
    {
        name: "Mindtree",
        category: "Service Based",
        start: 1982,
        end: 2012,
    },
    {
        name: "Infosys",
        category: "Service Based",
        start: 1981,
        end: 2014,
    },
    {
        name: "Accenture",
        category: "Service Based",
        start: 1989,
        end: 2009,
    },
    
];

const ages = [20,25,30,28,18,15,19,32,44,55,61,13,64,85,80];

// for loop
// for(i=1; i=>length; i++){
//     console.log(companies[i].name);
// }



// map: function
// companies.map(function(company,index){
//     console.log(company.start, company.end);
// });

// map: arrow function
// companies.map((company,index)=>{
//     console.log(company.start, company.end, company.category, index);
// });


// map: arrow function - string literal
// const dataItems = companies.map((company)=>{
//     return `${company.start} ${company.end} ${company.category}`;
// });
// console.log(dataItems);




// Example--------------

const persons=[
    {
        firstname: "Malcom",
        lastname: "Kaylee",
    },
    {
        firstname: "Manish",
        lastname: "Tomar",
    },
    {
        firstname: "Karan",
        lastname: "Sharma",
    },
    {
        firstname: "Gaurav",
        lastname: "Kumar",
    },
];

persons.map((person)=>{
    console.log((person.firstname));
    console.log(((person.firstname).toLowerCase()));
    console.log(((person.firstname).toUpperCase()));
 })
















/*
const arr = [5, 6, 7, 8, 9];

// Double
// function double(x){
//     return x*2;
// }
 
// Triple
// function triple(x){
//     return x*3;
// }

// Binary

const output = arr.map(function binary(x){
    return x.toString(2);
});

console.log(output);
*/