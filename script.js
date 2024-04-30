// MOUSEMOVE

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function (e) {
    cursor.style.cssText = cursor2.style.cssText = "left:" + e.clientX + "px; top: " + e.clientY + "px;"
});


//login Page Link
function goToLogin() {
    // Change the URL to the next page
    window.location.href = "login.html";
}


//Registration page Link
function goToSignup() {
    // Change the URL to the next page
    window.location.href = "registration.html";
}


//Index page Link
function goToIndex() {
    // Change the URL to the next page
    window.location.href = "index.html";
}


//Password Show/Hide






// typewriter.js

