class Tree {
    constructor(type, growthRate, height, lifeSpan, habitat, pic) {
        this.type = type;
        this.growthRate = growthRate;
        this.height = height;
        this.lifeSpan = lifeSpan;
        this.habitat = habitat;
        this.pic = pic;
    }

get TreeItem() {
    const section = document.createElement("section");
    section.classList.add("column");

    const image = document.createElement("img");
    image.src = "images/" + this.pic;

    section.appendChild(iamge);

    return section;

}

get TreeExpanded() {
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info");

    const text = '<h3>${this.name}</h3> <p class=bold>Type: $${this.price}</p> <p>Growth Rate: ${this.growthRate}</p> <p>Life Span: ${this.lifeSpan}</p> <p>Habitat: ${this.habitat}</p>'

    infoContainer.innerHTML = text;

    return infoContainer;
}
}

const showTrees = () => {
    const Trees = [];
    Trees.push(new Tree("Pine Tree", ))
}

window.onload = () => {
    showTrees();
}