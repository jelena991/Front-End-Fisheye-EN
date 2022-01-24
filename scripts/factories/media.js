class Media {
    constructor ({id, photographerId, title, image, video, likes, date, price}){
        this.id = id;
        this.photographerId = photographerId;
        this.title = title;
        this.image = image;
        this.video = video; 
        this.likes = likes; 
        this.date = date; 
        this.price = price;
    }

    createMedia (template){
        const element = template.content.cloneNode(true);
         
        if (this.image ) {
            const image = `assets/samplePhotos/${this.photographerId}/${this.image}`;
            
            element.querySelector('img').setAttribute("src", image);

        } else {
            const video = `assets/samplePhotos/${this.photographerId}/${this.video}`;
            element.querySelector('video').setAttribute("src", video);

        }

        element.querySelector('p').textContent = this.title;

        return element;
    }
}