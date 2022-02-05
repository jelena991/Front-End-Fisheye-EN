function openLightbox() {
    const modal = document.getElementById("gallery-lightbox");
	modal.style.display = "block";
}

function closeLightbox() {
    const modal = document.getElementById("gallery-lightbox");
    modal.style.display = "none";
}

  
class Gallery {
    constructor (media, templateGalleryItem){
        /*ovaj media je arej objekata klase iz medija.js*/
        this.media = media;
        this.templateGalleryItem = templateGalleryItem;
        this.currentIndex = 0;
    }

    create (rootElement){
        for (let i = 0; i < this.media.length; i++){
            const item = this.media[i];
            const galleryItem = this.templateGalleryItem.content.cloneNode(true); 
            const image = galleryItem.querySelector("img");
            const video = galleryItem.querySelector("video");

            if (item.image){
                video.remove();
                image.src = `assets/samplePhotos/${item.photographerId}/${item.image}`;

                image.id = item.id;
            } else {
                image.remove();
                video.src = `assets/samplePhotos/${item.photographerId}/${item.video}`;
            }

            galleryItem.addEventListener('click', () => {
                console.log('clicked')
                this.viewMedia(item.id);
            });

            rootElement.appendChild(galleryItem);
        }
    }
    viewMedia (id) {
        const modal = document.getElementById("gallery-lightbox");
	    modal.style.display = "block";

        // displejati lightbox
        // fokusirati sliku sa html id-em koji je predat funkciji da bude u centru
    }
}



