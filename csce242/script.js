const showHideNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");

};



const change1 = () => {
    const navItems = document.getElementById("link-click").textContent.trim();
    const col1 = document.getElementById("col1");
    const col2 = document.getElementById("col2");

    if (navItems == "Assignments") {
        col1.classList.add("active");
        col2.classList.remove("active");
    }  

}

const change2 = () => {
    const navItems = document.getElementById("link-click2").textContent.trim();
    const col1 = document.getElementById("col1");
    const col2 = document.getElementById("col2");

    if (navItems == "Projects") {
        col1.classList.remove("active");
        col2.classList.add("active");
    }  

}


document.getElementById("hamburger").onclick = showHideNav;
document.getElementById("link-click").onclick = change1;
document.getElementById("link-click2").onclick = change2;
window.addEventListener('load', change1);
