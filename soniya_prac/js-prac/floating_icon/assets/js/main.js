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










// Floating Icons -------------------

$(window).scroll(function(){
  if ($(this).scrollTop() > 500) {
    $('.float-container').removeClass('.flati-icon');
  } else {
     $('.float-container').addClass('.flati-icon');
  }
});