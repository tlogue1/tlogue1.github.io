document.querySelectorAll(".items section").forEach((section) =>{
    section.onclick = (e) => {
        document.getElementById("dialog").style.display = "block";

        document.querySelector("#dialog-content img").src = e.currentTarget.querySelector("img").src;

       const detailsSection = document.getElementById("dialog-details");
       detailsSection.innerHTML = "";
        const h3 = document.createElement("h3");
        h3.innerHTML = section.querySelector("h3").innerHTML;
        detailsSection.append(h3);
        const p = document.createElement("p");
        p.innerHTML = section.querySelector('p').innerHTML;
        detailsSection.append(p);

    };
});


document.getElementById("dialog-close").onclick = () => {
    document.getElementById("dialog").style.display = "none";

};
//onclick="document.getElementById('dialog').style.display='none'"