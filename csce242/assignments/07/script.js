
let pos = 0;

const changing = document.getElementById("image1");

changing.addEventListener("click", function(changing){ 
    changing.target.classList.toggle("new");
})



const addStar = () => {

    const column = document.getElementById("col3");
    const star = document.createElement("section");
    star.classList.add("star");
    column.append(star);
    star.style.background = star;
}


document.getElementById("col3").onclick = addStar;


const rotate = () => {
    const square = document.getElementById("square");
    square.classList.add("rotate");
    
   
}

document.getElementById("square").onclick = rotate;