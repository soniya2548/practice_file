
// // Responsive navbar --------------
// const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".nav-links");
// const links = document.querySelectorAll(".nav-links li");
// hamburger.addEventListener("click", () => {
//   //Animate Links
//   navLinks.classList.toggle("open");
//   links.forEach((link) => {
//     link.classList.toggle("fade");
//   });

//   //Hamburger Animation
//   hamburger.classList.toggle("toggle");
// });



// // Active Inactive NavBar ----------------------

// $(document).ready(function () {
//   $(".nav-list").on("click", "li", function () {
//     // remove classname 'active' from all li who already has classname 'active'
//     $(".nav-list li.active").removeClass("active");
//     // adding classname 'active' to the current clicked li
//     $(this).addClass("active");
//   });
// });


// // Footer

// $(document).ready(function () {
// 	if (window.outerWidth < 425) {
// 		$(".widget-title").on("click", function () {
// 			$(this).toggleClass("active");
// 			$(this).next().slideToggle(200);
// 		});
// 	}
// });


// // BG Changer....


// // Color Array
// let colors = ["blue", "yellow" , "black", "red" , "orange" , "pink" , "brown" , "green"];


// // get Button
// let button = document.getElementById('click-btn');

// // Add event listener
// button.addEventListener('click', function(){
  
  
//   // randomizer
//   var randomcolor = colors[Math.floor(Math.random()*colors.length)]

//   // get container
//    let container = document.getElementById('container');

//   container.style.background = randomcolor;
// })


let key = prompt("Enter key you want to set")
let value = prompt("Enter value you want to set")


localStorage.setItem(key, value)

console.log(`The Value at ${key} is ${localStorage.getItem(key)}`)