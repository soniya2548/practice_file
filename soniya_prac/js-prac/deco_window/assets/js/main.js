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
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true, // Show dots for navigation
    prevArrow: $('.slick-prev'), // Use custom prev button
    nextArrow: $('.slick-next') // Use custom next button
  });
});


// Card Slide ----------------


$(document).ready(function () {
  $(".card-slider")
    .slick({
      autoplay: false,
      speed: 1000,
      arrows: true,
      lazyLoad: "progressive",
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      Infinity: true,
      prevArrow:
        '<div class="slick-nav prev-arrow"><i class="fa-solid fa-arrow-left"></i></div>',
      nextArrow:
        '<div class="slick-nav next-arrow"><i class="fa-solid fa-arrow-right"></i></div>',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            dots: true,
            arrows: false
          }
        },
      ]
    })
});



$(document).ready(function () {
  $(".testi-slider")
    .slick({
      autoplay: true,
      speed: 800,
      slidesToShow: 1,
      lazyLoad: "progressive",
      arrows: false,
      dots: true,
      autoplay: false,
      infinite: false,
      prevArrow:
        '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
      nextArrow:
        '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    })
});

$(document).ready(function () {
  $(".blog-slider")
    .slick({
      // autoplay: true,
      speed: 800,
      slidesToShow: 3,
      lazyLoad: "progressive",
      arrows: false,
      dots: true,
      // autoplay: true,
      prevArrow:
        '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
      nextArrow:
        '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        },
      ]
    })
});
$(document).ready(function () {
  $(".product-slider")
    .slick({
      // autoplay: true,
      speed: 800,
      slidesToShow: 4,
      lazyLoad: "progressive",
      arrows: false,
      dots: true,
      // autoplay: true,
      prevArrow:
        '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
      nextArrow:
        '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        },
      ]
    })
});



$(document).ready(function () {
	if (window.outerWidth < 425) {
		$(".widget-title").on("click", function () {
			$(this).toggleClass("active");
			$(this).next().slideToggle(200);
		});
	}
});
$(document).ready(function () {
	if (window.outerWidth < 425) {
		$(".widget-title2").on("click", function () {
			$(this).toggleClass("active");
			$(this).next().slideToggle(200);
		});
	}
});