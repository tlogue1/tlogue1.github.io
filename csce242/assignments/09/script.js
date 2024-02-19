
let isMoving = false;
let height = 0;
let direction = 1;
let updatePosition;

const moveBall = () => {
    if (!isMoving) {
        isMoving = true;
        updatePosition = setInterval(() => {
            height += direction;
            document.getElementById("ball-img").style.setProperty("--position", height + "%");  
            if(height >= 50 || height <= 0) {
                direction *= -1;
            }          
        }, 50);

        document.getElementById("btn-start").textContent = "stop";
        document.getElementById("btn-start").onclick = stopBall;
    }
};

const stopBall = () => {
    isMoving = false;
    clearInterval(updatePosition);
    document.getElementById("btn-start").textContent = "start";
    document.getElementById("btn-start").onclick = moveBall;
};






const showDetails = (e) => {
    const detailsElement = document.getElementById("details");
    const details = e.target.getAttribute("rel");
    detailsElement.innerHTML = details;
} ;


document.querySelectorAll("#yoga-pics img").forEach((img) => {
    img.onclick = showDetails;
});
document.getElementById("btn-start").onclick = moveBall;









