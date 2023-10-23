// <!-- JS for toggle menu -->
var navLinks = document.getElementById("navLinks");
function showmenu() {
    navLinks.style.right = "0";
}
function hidemenu() {
    navLinks.style.right = "-200px";
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("nav-links").style.padding = "30px 10px";
        document.getElementById("nva").style.fontSize = "25px";
    } else {
        document.getElementById("nav-links").style.padding = "80px 10px";
        document.getElementById("nav").style.fontSize = "35px";
    }
}

// Smooth scrolling when clicking on navigation links
document.querySelectorAll('menus').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;

        window.scroll({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});