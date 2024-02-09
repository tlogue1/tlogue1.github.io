const showHideNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");

};



const change1 = () => {
    const navItems = document.getElementById("link-click").textContent.trim();
    const col1 = document.getElementById("col1");
   const col2 = document.getElementById("col2");

    if (navItems == "Exercise 1") {
        col1.classList.add("active");
        col2.classList.remove("active");
    }  

}

const change2 = () => {
    const navItems = document.getElementById("link-click2").textContent.trim();
    const col1 = document.getElementById("col1");
    const col2 = document.getElementById("col2");

    if (navItems == "Exercise 2") {
        col1.classList.remove("active");
        col2.classList.add("active");
    }  

}


const showPic = () => {
    const picture = document.getElementById("txt-change").value.toLowerCase().trim();
    const img = document.getElementById("pics");
    
    if (picture == "b") {
            img.src="images/read.jpg";
    } else if(picture == "c") {
        img.src="images/clown.jpg";
    } else if(picture == "p") {
        img.src="images/birthday.jpg";
    } else if(picture == "r") {
        img.src="images/rain.jpg";
    } else if(picture == "s") {
        img.src="images/shovel.jpg";
    } else if(picture == "w") {
        img.src="images/work.jpg";
    }   
}

const yogaP = () => {
    const yogaPic = document.getElementById("myRange").value;
    const  img = document.getElementById("pic");
    let slideContainer = "undeterminable";

    if(yogaPic == 1 ){
        img.src="images/yoga1.jpg"
    } else if(yogaPic == 2 ) {
        img.src="images/yoga2.jpg"
    } else if(yogaPic == 3 ) {
        img.src="images/yoga3.jpg"
    } else if(yogaPic == 4 ) {
        img.src="images/yoga4.jpg"
    } else if(yogaPic == 5 ) {
        img.src="images/yoga5.jpg"
    } else if(yogaPic == 6 ) {
        img.src="images/yoga6.jpg"
    } else if(yogaPic == 7 ) {
        img.src="images/yoga7.jpg"
    } else if(yogaPic == 8 ) {
        img.src="images/yoga8.jpg"
    } 
}





document.getElementById("hamburger").onclick = showHideNav;
document.getElementById("txt-change").onkeyup = showPic;
document.getElementById("myRange").oninput = yogaP;
document.getElementById("link-click").onclick = change1;
document.getElementById("link-click2").onclick = change2;




