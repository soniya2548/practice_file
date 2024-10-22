// Responsive navbar --------------

function addRequiredClass() {
  if (window.innerWidth < 860) {
    document.body.classList.add("mobile");
  } else {
    document.body.classList.remove("mobile");
  }
}

window.onload = addRequiredClass;

let hamburger = document.querySelector(".hamburger");
let mobileNav = document.querySelector(".nav-list");

let bars = document.querySelectorAll(".hamburger span");

let isActive = false;

hamburger.addEventListener("click", function () {
  mobileNav.classList.toggle("open");
  if (!isActive) {
    bars[0].style.transform = "rotate(49deg)";
    bars[1].style.opacity = "0";
    bars[2].style.transform = "rotate(-49deg)";
    isActive = true;
    $("body").addClass("menu-open");
  } else {
    bars[0].style.transform = "rotate(0deg)";
    bars[1].style.opacity = "1";
    bars[2].style.transform = "rotate(0deg)";
    isActive = false;
    $("body").removeClass("menu-open");
  }
});


// function toggleTextVisibility(dotsId, moreTextId, btnTextId) {
//     var dots = document.getElementById(dotsId);
//     var moreText = document.getElementById(moreTextId);
//     var btnText = document.getElementById(btnTextId);

//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more";
//         moreText.style.display = "none";
//     } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less";
//         moreText.style.display = "inline";
//     }
// }

// Read More

function toggleReadMore() {
  var content = document.querySelector(".read-more-content");
  var toggleButton = document.querySelector(".read-more-toggle");

  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    toggleButton.textContent = "Read More";
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    toggleButton.textContent = "Read less";
  }
}


// Home Banner Slider

$(document).ready(function () {
  $(".home-bannr-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust autoplay speed as needed
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});



// Testimonial Slider

$(document).ready(function () {
  $(".testimonial-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust autoplay speed as needed
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});

// Chest Surgeon

$(document).ready(function () {
  $(".chest-slider").slick({
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 3.1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: "2.5%",
    autoplaySpeed: 2000, // Adjust autoplay speed as needed
    // Add other options as needed
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.1,
          dots: true,
          arrows: false,
          centerMode: true,
          centerPadding: "6%",
        },
      },
    ],
  });
});

// video
$(document).ready(function () {
  $(".Video-info-slider").slick({
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nav: false,
    autoplaySpeed: 2000, // Adjust autoplay speed as needed
    // Add other options as needed
    // centerMode: true,
    // centerPadding: "5%",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.1,
          dots: true,
          arrows: true,
          centerMode: true,
          centerPadding: "6%",
        },
      },
    ],
  });
});

// blog article
$(document).ready(function () {
  $(".blog-and-articles").slick({
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000, // Adjust autoplay speed as needed
    // Add other options as needed
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});

// Counting......

$(".counting").each(function () {
  var $this = $(this),
    countTo = $this.attr("data-count");

  $({ countNum: $this.text() }).animate(
    {
      countNum: countTo,
    },

    {
      duration: 3000,
      easing: "linear",
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
        //alert('finished');
      },
    }
  );
});




// Read More Button-----------



$(document).ready(function () {
  function AddReadMore() {
    //This limit you can set after how many characters you want to show Read More.
    var carLmt = 230;
    // Text to show when text is collapsed
    var readMoreTxt = "..read more";
    // Text to show when text is expanded
    var readLessTxt = "read less";

    //Traverse all selectors with this class and manipulate HTML part to show Read More
    $(".add-read-more").each(function () {
      if ($(this).find(".first-section").length)
        return;

      var allstr = $(this).html();
      if (allstr.length > carLmt) {
        var firstSet = allstr.substring(0, carLmt);
        var secdHalf = allstr.substring(carLmt, allstr.length);
        var strtoadd = firstSet + "<span class='second-section'>" + secdHalf + "</span><span class='read-more' title='Click to Show More'>" + readMoreTxt + "</span><span class='read-less' title='Click to Show Less'>" + readLessTxt + "</span>";
        $(this).html(strtoadd);
      }
    });

    //Read More and Read Less Click Event binding
    $(document).on("click", ".read-more,.read-less", function () {
      $(this).closest(".add-read-more").toggleClass("show-less-content show-more-content");
    });
  }

  AddReadMore();
});


// $(".content-read-m").each(function () {
//   const textElement = $(this).find(".text-read-m");
//   const button = $(this).find(".toggleButton-read-m");
//   const fullText = textElement.html();
//   const truncatedText = fullText.substring(0, 350) + "...";
//   let isTruncated = true;
//   textElement.html(truncatedText);
//   button.click(function () {
//     if (isTruncated) {
//       textElement.html(fullText);
//       button.html("Read Less");
//     } else {
//       textElement.html(truncatedText);
//       button.html("Read More");
//     }
//     isTruncated = !isTruncated;
//   });
// });





// Top Up Button 

let mybutton = document.getElementById("topUpBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Digital Clock...........

setInterval(() => {
  d = new Date(); //object of date()
  hr = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();
  hr_rotation = 30 * hr + min / 2; //converting current time
  min_rotation = 6 * min;
  sec_rotation = 6 * sec;
  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);



// video play one by one ----------

let players = [];

function onYouTubeIframeAPIReady() {
    const iframes = document.querySelectorAll('.youtube-player');
    iframes.forEach((iframe, index) => {
        players.push(new YT.Player(iframe, {
            events: {
                'onStateChange': onPlayerStateChange
            }
        }));
    });
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        players.forEach(player => {
            if (player !== event.target && player.getPlayerState() == YT.PlayerState.PLAYING) {
                player.pauseVideo();
            }
        });
    }
}