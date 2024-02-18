


const moveBall = (e) => {
    let height = 0;
    const updatePosition = setInterval(() => {
    height += 1;
    document.getElementById("ball-img").style.setProperty("--position", height + "%");
        if(height >=70) {
            clearInterval(updatePosition);
        }
    }, 30);
}


const showDetails = (e) => {
    console.log(e.target.getAttribute("rel"));
    showDetails.innerHTML = (e.target.getAttribute("rel"));
}



document.getElementById("btn-start").onclick = moveBall
document.querySelectorAll("#yoga-pics").forEach((li)=>{
    li.onclick = showDetails;
});






