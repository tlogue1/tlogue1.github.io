const swtichAdsvertisement = () => {
    let i=0;
    const advertisement = ["\"The variety in these images is outstanding.\"", 
    "\"Each image has been edited by our superior staff.\"",
    "\"These images are of the highest quality.\"",
    "\"Our team has worked very hard to get these images perfect.\"",
    "\"We hope these images are to your liking.\""]

const advertisementContainer = document.getElementById("advertisement-container");
advertisementContainer.innerHTML = advertisement[0];
const changeAdvertisement = setInterval(() => {
    if(i < advertisement.length -1) {
        i++;
    } else {
        i=0;
    }
    advertisementContainer.innerHTML = advertisement[i];
    }, 2000);
}



const displayImages = () => {
const imageArray = {
    "images/garden.jpg": '<p><a href="https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape&position=0&from_view=keyword&track=sph&uuid=8e520e53-3fb6-4e41-9da7-682c824a94f7">Image by vecstock</a>on Freepik</p>',
    "images/golden.jpg" : '<p><a href="https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=landscape&position=7&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a> on Freepik</p>',
    "images/mountain-lake.jpg": '<p><a href="https://www.freepik.com/free-photo/amazing-shot-beautiful-butchart-gardens-brentwood-bay_20496783.htm#query=landscape&position=27&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a>on Freepik</p>',
    "images/small-house.jpg": '<p><a href="https://www.freepik.com/free-photo/small-houses-green-field-with-dark-sky_7553929.htm#query=landscape&position=39&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a>on Freepik</p>',
    "images/snow.jpg" : '<p><a href="https://www.freepik.com/free-photo/beautiful-scenery-lot-leafless-trees-snow-covered-land-during-sunset_10990489.htm#query=landscape&position=38&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a>on Freepik</p>'
};

const imageGallery = document.getElementById("images-container");

for (const [imageURL, attribution] of Object.entries(imageArray)) {
    const imageElement = document.createElement('img');
    imageElement.src = imageURL;
    imageElement.alt = 'Image';

    const attributionElement = document.createElement('p');
    attributionElement.innerHTML = attribution;

    imageGallery.appendChild(imageElement);
    imageGallery.append(attributionElement);
}

}

window.onload = () => {
    displayImages();
    swtichAdsvertisement();
}
