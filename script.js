window.oncontextmenu = function(e) {
    e.preventDefault();
}

window.addEventListener("scroll", function() {
    var navBar = document.getElementById("navBar");
    navBar.classList.toggle("sticky", window.scrollY > 800);
});

function topPage() {
    document.getElementById("topPage").scrollIntoView({
        block: "start",
        inline: "nearest",
        behavior: "smooth",
    });
}

function about() {
    document.getElementById("about").scrollIntoView({
        block: "start",
        inline: "nearest",
        behavior: "smooth",
    });
}

function work() {
    document.getElementById("work").scrollIntoView({
        block: "start",
        inline: "nearest",
        behavior: "smooth",
    });
}