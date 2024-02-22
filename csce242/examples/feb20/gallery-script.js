let count = 1;


const interval = setInterval(() => {
    document.querySelectorAll(".items section").forEach((section) => {
        section.classList.remove("highlighted");
    });

    document.querySelector(`.items section:nth-child(${count})`).classList.add("highlighted");


    count++;
}, 500); //this is for milliseconds