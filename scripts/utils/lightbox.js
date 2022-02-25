function openLightbox() {
    const modal = document.getElementById("gallery-lightbox");
	modal.style.display = "block";
}

function closeLightbox() {
    const modal = document.getElementById("gallery-lightbox");
    modal.style.display = "none";

}

//lightbox gallery
class Lightbox {
    constructor (image, video, id, photographerId) {
        this.image = image;
        this.video = video;
        this.id = id;
        this.photographerId = photographerId;
    }

    create (template) {
        const element = template.content.cloneNode(true);
        const imageElement = element.querySelector('img');
        const videoElement = element.querySelector('video');

        if (this.image) {
            videoElement.remove();
            const image = `assets/samplePhotos/${this.photographerId}/${this.image}`;

            element.querySelector('img').setAttribute("src", image);
            element.querySelector('img').setAttribute("id", `L${this.id}`);
            element.querySelector('img').style.display = "none";
            
        } else {
            imageElement.remove();
            const video = `assets/samplePhotos/${this.photographerId}/${this.video}`;

            element.querySelector('video').setAttribute("src", video);
            element.querySelector('video').setAttribute("id", this.id);
            element.querySelector('video').style.display = "none";

        }

        return element;
    }
}

const prevBtn = document.querySelector("leftArr");
const nextBtn = document.querySelector("rightArr");
const galeryItems = document.querySelectorAll('.gallery-item');

for (let i = 0; i < galeryItems.length; i++) {
   let currentIndex = i;
   
if (currentIndex == 0) {
    prevBtn.style.display = "none";
}

if (currentIndex >= galleryItem.length - 1) {
    nextBtn.style.display = "none";
}

prevBtn.addEventListener('click', (event) => {
    console.log("PREV CLICKED", prevBtn);
    previous();
}); 

 //Previous button
function previous() {

}

  prevBtn.onclick = () => {
    previous();
}

//Next button
function next() {
    currentIndex++;
  
  }

  nextBtn.onclick = () => {
    next();
  }

}