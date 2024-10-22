
// Responsive navbar --------------
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
hamburger.addEventListener("click", () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});



// Active Inactive NavBar ----------------------

$(document).ready(function () {
  $(".nav-list").on("click", "li", function () {
    // remove classname 'active' from all li who already has classname 'active'
    $(".nav-list li.active").removeClass("active");
    // adding classname 'active' to the current clicked li
    $(this).addClass("active");
  });
});


// Footer

$(document).ready(function () {
	if (window.outerWidth < 425) {
		$(".widget-title").on("click", function () {
			$(this).toggleClass("active");
			$(this).next().slideToggle(200);
		});
	}
});


// Todo List....

const inputBox = document.getElementById("input-box");
const listCont = document.getElementById("list-cont");
function AddTask(){
  if(inputBox.value === ''){
    alert("You must write something!");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listCont.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = ""

}
listCont.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
  }
}, false);