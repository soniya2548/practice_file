
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


// Todo List........................................


const inputBox = document.getElementById("input-box");
const listCont = document.getElementById("list-cont");

// Initialize variables to keep track of tasks and completed tasks
let totalTasks = 0;
let completedTasks = 0;

function AddTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listCont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
        // Increment totalTasks when a new task is added
        totalTasks++;
        updateTaskCount();
    }
    inputBox.value = "";
}

listCont.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        // Increment or decrement completedTasks based on whether the task is checked or unchecked
        if (e.target.classList.contains("checked")) {
            completedTasks++;
        } else {
            completedTasks--;
        }
        updateTaskCount();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        // Decrement totalTasks when a task is removed
        totalTasks--;
        // If the removed task was checked, decrement completedTasks
        if (e.target.parentElement.classList.contains("checked")) {
            completedTasks--;
        }
        updateTaskCount();
    }
}, false);

// Function to update the total task, completed task, and pending task count
function updateTaskCount() {
    document.getElementById("total-tasks").textContent = totalTasks;
    document.getElementById("completed-tasks").textContent = completedTasks;
    // Calculate pending tasks by subtracting completed tasks from total tasks
    let pendingTasks = totalTasks - completedTasks;
    document.getElementById("pending-tasks").textContent = pendingTasks;
}