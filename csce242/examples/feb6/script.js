const showHideNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");

};

const changeP =(e) => {
    e.preventDefault(); //prevents the default action from occuring --> dont go to another page
    document.getElementById("display").textContent = "Hello Tyler";
};

const showMood = () => {
    const color = document.getElementById("txt-mood").value.toLowerCase().trim();
    const moodP = document.getElementById("mood");
    let mood = "undeterminable";

    if(color == "red"){
        mood = "ANGRY";
    } else if(color == "blue") {
        mood = "sad";
    } else if(color == "yellow") {
        mood = "yellow";
    }

   moodP.innerHTML = "You are in a " + mood + " mood!"; //one way of doing it
   /*moodP.innerHTML = `You are in a ${mood}`;*/ //uses backtick above tab
}

const evalForm = (e) => {
    e.preventDefault();
    console.log("We did it!!");

}

document.getElementById("hamburger").onclick = showHideNav;
document.getElementById("link-click").onclick = changeP;
document.getElementById("txt-mood").onkeyup = showMood;
document.getElementById("form").onsubmit = evalForm;

//for slider --> get the value for the slider and do like if slider ==1 do this, etc.