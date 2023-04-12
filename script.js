// Default tab
document.getElementById("fruits").style.display = "block";
document.getElementsByClassName("tab")[0].classList.add("active");

// Open a tab
function openTab(evt, tabName) {
    // Declare variables
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the active class
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the selected tab content and add the active class to the button
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Function to toggle selection of a list item
function toggleSelection(evt) {
    // Check if the clicked element is an li tag
    if (evt.target.tagName.toLowerCase() === "li") {
        // Toggle the selected class on the clicked list item
        evt.target.classList.toggle("selected");
    }
}

// Add event listeners to all list items
var lis = document.getElementsByTagName("li");
for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", toggleSelection);
}