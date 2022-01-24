class Media {
    constructor ({id, photographerId, title, image, likes, date, price}){
        this.id = id;
        this.photographerId = photographerId;
        this.title = title;
        this.image = image;
        this.likes = likes; 
        this.date = date; 
        this.price = price;
    }

    createMedia (template){
        const element = template.content.cloneNode(true);
         // TO DO: Change Mimi to Photographer Name
        const image = `assets/samplePhotos/Mimi/${this.image}`;

        element.querySelector('p').textContent = this.title;
        element.querySelector('img').setAttribute("src", image);

        return element;
    }
}