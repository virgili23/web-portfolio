const toggleBtn = document.getElementById("nav-toggle");
const homeBody = document.getElementById("home");
const faIcon = document.getElementById("fa-icon");


toggleBtn.onclick = function() {
    homeBody.classList.toggle("menu-active");
    faIcon.classList.toggle("fa-xmark");
};
