const showHideNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");

};

const changePage = () => {
    document.getElementById("col1").classList.toggle("col2");
}

const showPic = () => {
    const picture = document.getElementById("txt-change").value.toLowerCase().trim();
    const  change = document.getElementById("change");
    
    if(picture == "b"){
        document.getElementById("change").src = "images/birthday.jpg";
    } else if(picture == "c") {
        pics = img.src = "images/"
    } else if(picture == "p") {
        pics = "images/"
    } else if(picture == "r") {
        pics = "images/"
    } else if(picture == "s") {
        pics = "images/"
    } else if(picture == "w") {
        pics = "images/"
    }   
}

const yogaP = () => {
    const yogaPic = document.getElementById("myRange");
    const  changePic = document.getElementById("slideContainer");
    let slideContainer = "undeterminable";

    if(changePic == 1 ){
        slideContainer = <img src="images/"></img>
    } else if(changePic == 2 ) {
        slideContainer = "images/"
    } else if(changePic == 3 ) {
        slideContainer = "images/"
    } else if(changePic == 4 ) {
        slideContainer = "images/"
    } else if(changePic == 5 ) {
        slideContainer = "images/"
    } else if(changePic == 6 ) {
        slideContainer = "images/"
    } else if(changePic == 7 ) {
        slideContainer = "images/"
    } else if(changePic == 8 ) {
        slideContainer = "images/"
    } 
}





document.getElementById("hamburger").onclick = showHideNav;
document.getElementById("txt-change").onkeyup = showPic;
document.getElementById("myRange").onkeyup = yogaP;


const flip = () => {
    document.getElementById("img-1").src="images/"
}