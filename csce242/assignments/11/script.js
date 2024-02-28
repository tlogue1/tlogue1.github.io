class Tree {
    constructor(type, growthRate, height, lifeSpan, habitat, fact, pic) {
        this.type = type;
        this.growthRate = growthRate;
        this.height = height;
        this.lifeSpan = lifeSpan;
        this.habitat = habitat;
        this.fact = fact;
        this.pic = pic;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("tree");

        const h3 = document.createElement("h3");
        h3.innerHTML = this.type;
        section.append(h3);

        
        const arrow = document.createElement("a");
        arrow.href = "#";
        arrow.innerHTML = "&#x2964";
        arrow.classList.add("arrow");
        h3.append(arrow);
        arrow.onclick = this.expandContract;
        

        const columns = document.createElement("section");
        columns.classList.add("columns");
        section.append(columns);

        const imageSection = document.createElement("section");
        columns.append(imageSection);
        const image = document.createElement("img");
        image.src = "images/" + this.pic;
        imageSection.append(image);

        const moreSection = document.createElement("section");
        moreSection.classList.add("hidden" , "more");
        moreSection.append(this.paragraph("Type", this.type));
        moreSection.append(this.paragraph("Growth Rate", this.growthRate));
        moreSection.append(this.paragraph("Height", this.height));
        moreSection.append(this.paragraph("Life Span", this.lifeSpan));
        moreSection.append(this.paragraph("Habitat", this.habitat));
        moreSection.append(this.paragraph("Fun Fact", this.fact));
        columns.append(moreSection);

        return section;

    }

    expandContract(e) {
        const section = e.currentTarget.closest(".tree").querySelector(".more");

        if(section.classList.contains("hidden")) {
            e.currentTarget.innerHTML = "&#x2962";
        } else {
            e.currentTarget.innerHTML = "&#x2964";
        }

        section.classList.toggle("hidden");
    };

    paragraph(type, info) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${type}:</strong> ${info}`
        return p;
    }


}

const trees = [];
trees.push(new Tree("Maple", "12 inch per year", "90 feet", "400 years", "Most are in Asia, but some are in North America, Europe, and North Africa","Maple trees take at least 30 years to product syrup" ,"maple-tree.jpeg"));
trees.push(new Tree("Oak", "1 to 3 feet per year", "35 to 100 feet ", "600 years", "They grow througout most of the Eastern United States","Oak trees produce about 10 million acorns during its lifetime" , "oak-tree.jpeg"));
trees.push(new Tree("Willow", "6 to 10 feet per year", "3 to 50 feet", "20 to 30 years", "They grow best east of the Mississippi River","Willow wood is very tough but lightweight" , "willow-tree.jpeg"));
trees.push(new Tree("Pine", "2 feet per year", "10 to 260 feet", "100 to 1,000 years", "They grow in northern temperate Regions","Pine wood is commonly used in construction and furniture making" ,"pine.jpeg"));

trees.forEach((tree) => {
    document.getElementById("trees").append(tree.item);

});