const toggleHamburger = () => {
    document.getElementById("nav-items").classList.toggle("hide");
};

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHamburger;
};


function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

