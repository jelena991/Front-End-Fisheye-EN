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
            element.querySelector('img').setAttribute("id", this.id);
            
        } else {
            imageElement.remove();
            const video = `assets/samplePhotos/${this.photographerId}/${this.video}`;

            element.querySelector('video').setAttribute("src", video);
            element.querySelector('video').setAttribute("id", this.id);

        }

        return element;
    }

    
}

