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


// Card Slide ----------------


$(document).ready(function () {
  $(".slider1")
    .slick({
      autoplay: true,
      speed: 500,
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
            arrows: false,
            slidesToShow: 1,
          }
        },
      ]
    })
});


// Product Slide ----------------


$(document).ready(function () {
  $(".product-slider")
    .slick({
      autoplay: false,
      speed: 500,
      arrows: false,
      lazyLoad: "progressive",
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      Infinity: true,
    
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




// Floating Icons -------------------

$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $('.float-container').removeClass('flati-icon');
  } else {
    $('.float-container').addClass('flati-icon');
  }
});





// Form Validation for input field --------------

// $(document).ready(function() {
//   $('#myForm').submit(function() {
//     var isValid = true;
//     $('input[validate="true"]').each(function() {
//       if ($(this).val() === '') {
//         $(this).next('.alert').show();
//         isValid = false;
//       } else {
//         $(this).next('.alert').hide();
//       }
//     });
//     return isValid;
//   });
// });


// Form Validation every felid --------------

$(document).ready(function () {
  $('#myForm').submit(function () {
    var isValid = true;

    // Validate input fields
    $('input[validate="true"], select[validate="true"], textarea[validate="true"]').each(function () {
      if ($(this).val() === '') {
        $(this).next('.alert').show();
        isValid = false;
      } else {
        $(this).next('.alert').hide();
      }
    });

    // Validate radio buttons
    $('ul.select-check[validate="true"]').each(function () {
      if ($(this).find('input:checked').length === 0) {
        $(this).next('.alert').show();
        isValid = false;
      } else {
        $(this).next('.alert').hide();
      }
    });

    // Validate checkboxes
    $('ul.custom-control[validate="true"]').each(function () {
      if ($(this).find('input:checked').length === 0) {
        $(this).next('.alert').show();
        isValid = false;
      } else {
        $(this).next('.alert').hide();
      }
    });

    return isValid;
  });
});