const toggleHamburger = () => {
    document.getElementById("nav-items").classList.toggle("hide");
};

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHamburger;
};

/*popup from w3 school*/
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

