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


//  Banner Silder ---------------------

// Initialize Slick Slider
$(document).ready(function () {
  $('.slider-container').slick({
    dots: true, // Show dots for navigation
    prevArrow: $('.slick-prev'), // Use custom prev button
    nextArrow: $('.slick-next') // Use custom next button
  });
});