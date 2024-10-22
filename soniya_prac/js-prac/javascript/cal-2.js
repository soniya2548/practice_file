function Addition(userInput1,userInput2){
    $("#inputResult").text(Number(userInput1) + Number(userInput2))
}
function Substraction(userInput1,userInput2){
    $("#inputResult").text(Number(userInput1) - Number(userInput2))
}
function Divison(userInput1,userInput2){
    $("#inputResult").text(Number(userInput1) / Number(userInput2))
}
function Multipication(userInput1,userInput2){
    $("#inputResult").text(Number(userInput1) * Number(userInput2))
}
function Clear(){
    $("#userInput1").val("");
    $("#userInput2").val("");
    $("#inputResult").text("");
}
    
// area of circle.....

function CalculateAreaOfCircle(Radius){
    var area = 3.14 * Radius * Radius;
    $("#inputResult").text('Area of circle is ' + area)
}


// area of trapezium

function CalculateAreaOfTrapezium(ABase,BBase,Height){
    var area = ((Number(ABase) + Number(BBase))/2)*Height ;
    $("#inputResult").text('Area of Trapezium is ' + area)
}


// Area Of Triangle

function CalculateAreaOfTriangle(Base,Height){
    var area =  (Number(Base) * Number(Height)) / 2 ;
    $("#inputResult").text('Area of Triangle is ' + area)
}

// Area Of Square

function CalculateAreaOfSquare(Area){
    var _area = Area * Area; 
    $("#inputResult").text('Area of Square is ' + _area)
}


// Area of Rectangle

function CalculateAreaOfRectangle(Length,Width){
    var area = Number(Length) * Number(Width) ;
    $("#inputResult").text('Area of Rectangle is ' + area)
}


// Area of Pentagon

function CalculateAreaOfPentagon(Area){
    var _area = (1/4) * ((Math.sqrt((5 * (5 + (2 * Math.sqrt(5)))))) * Area * Area );
    $("#inputResult").text('Area of Pentagon is ' + _area)
}

// Area of Hexagon

function CalculateAreaOfHexagon(Area){
    var _area = ((3 * (Math.sqrt(3))) / 2) * Math.pow(Area , 2);
    $("#inputResult").text('Area of Hexagon is ' + _area)
}

// Area of Septagon

function CalculateAreaOfSeptagon(Area){
    var cotValue = 2.08;
    var _area = (7 / 4) * Math.pow(Area, 2) * cotValue
    $("#inputResult").text('Area of Septagon is ' + _area)
}


// Color Change

function BgColorRed(){
  document.getElementById("text").style.color = "red";
}
function BgColorGreen(){
  document.getElementById("text").style.color = "green";
}
function BgColorYellow(){
  document.getElementById("text").style.color = "yellow";
}
function TextColorRed(){
  document.getElementById("bgcolor").style.backgroundColor = "red";
}
function TextColorGreen(){
  document.getElementById("bgcolor").style.backgroundColor = "green";
}
function TextColorYellow(){
  document.getElementById("bgcolor").style.backgroundColor = "yellow";
}

// Add Rule

// $(document).ready(function () {
//   $("#prefix,#item-category,#item-name,#city,#locality").change(function () {
//     var url = ($('#prefix').val());
//     if ($('#item-category').prop('checked')) {
//       url = url + '/' + $('#item-category').val();
//     }
//     if ($('#item-name').prop('checked')) {
//       url = url + '/' + $('#item-name').val();
//     }
//     if ($('#city').prop('checked')) {
//       url = url + '/' + $('#city').val();
//     }
//     if ($('#locality').prop('checked')) {
//       url = url + '/' + $('#locality').val();
//     }



//     $('#url').val(url);
//   });
// });



// Currency Convertor

function Convertor(){
  var currencyValue = document.getElementById("currencyValue").value;
  var currencyType = document.getElementById("currencyType").value;
  window.alert('currencySign');
}







































































/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

/* Menu hidden */
navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});

/*=============== SEARCH ===============*/
const search = document.getElementById("search"),
  searchBtn = document.getElementById("search-btn"),
  searchClose = document.getElementById("search-close");

/* Search show */
searchBtn.addEventListener("click", () => {
  search.classList.add("show-search");
});

/* Search hidden */
searchClose.addEventListener("click", () => {
  search.classList.remove("show-search");
});

/*=============== LOGIN ===============*/
const login = document.getElementById("login"),
  loginBtn = document.getElementById("login-btn"),
  loginClose = document.getElementById("login-close");

/* Login show */
loginBtn.addEventListener("click", () => {
  login.classList.add("show-login");
});

/* Login hidden */
loginClose.addEventListener("click", () => {
  login.classList.remove("show-login");
});
