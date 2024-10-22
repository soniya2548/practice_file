
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


submit.addEventListener("click", (e)=>{
    e.preventDefault()
    let titlec = title.value
    let descc = desc.value
    localStorage.setItem("todo", JSON.stringify([titlec, descc]))
    // localStorage.getItem(todo)
    console.log(todo)
    todo.innerHTML = `
    <h1>${titlec}</h1>
    <p>${descc}</p>
    `;
    title.value="";
    desc.value="";

})
deleteBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    localStorage.removeItem("todo")
    todo.innerHTML = ""
})



// submit.addEventListener("click", (e)=>{
//     e.preventDefault()
//     let titlec = title.value
//     let descc = desc.value
//     localStorage.setItem("todo", JSON.stringify([titlec, descc]))
//     localStorage.getItem(todo)
//     console.log(todo)
//     todo.innerHTML = `
//     <h1>${titlec}</h1>
//     <p>${descc}</p>
//     `;
//     title.value="";
//     desc.value="";

// })
// deleteBtn.addEventListener("click", (e)=>{
//     e.preventDefault()
//     localStorage.removeItem("todo")
//     todo.innerHTML = ""
// })