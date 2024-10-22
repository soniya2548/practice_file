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

$(document).ready(function() {
  $('#myForm').submit(function() {
    var isValid = true;
    
    // Validate input fields
    $('input[validate="true"], select[validate="true"], textarea[validate="true"]').each(function() {
      if ($(this).val() === '') {
        $(this).next('.alert').show();
        isValid = false;
      } else {
        $(this).next('.alert').hide();
      }
    });
    
    // Validate radio buttons
    $('ul.select-check[validate="true"]').each(function() {
      if ($(this).find('input:checked').length === 0) {
        $(this).next('.alert').show();
        isValid = false;
      } else {
        $(this).next('.alert').hide();
      }
    });
    
    // Validate checkboxes
    $('ul.custom-control[validate="true"]').each(function() {
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