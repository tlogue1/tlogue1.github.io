/**
 * const clickButton = document.getElementById("btn-click");
clickButton.innerHTML = "DON'T CLICK";

function doStuff() {
    alert("doing stuff");
}
document.getElementById("btn-click").onclick = doStuff;

const doStuff = () =>{
    alert("doing stuff")
}; 

document.getElementById("btn-click").onclick = () => {
    alert("stuff");
}
**/

const doStuff = () => {
    const messageP = document.getElementById("message");
    messageP.innerHTML = "Hello Tyler!";
    messageP.classList.add("special");
};

const hideStrawberrry = () => {
    document.getElementById("strawberry").classList.add("hidden");
};

document.getElementById("strawberry").onclick = hideStrawberrry;

document.getElementById("btn-click").onclick = doStuff;

