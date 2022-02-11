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
        this.element = element;

        const imageElement = element.querySelector('img');
        const videoElement = element.querySelector('video');

        if (this.image ) {
           
            const image = `assets/samplePhotos/${this.photographerId}/${this.image}`;
            
            element.querySelector('img').setAttribute("src", image);
            element.querySelector('img').setAttribute("id", this.id);
           
            videoElement.remove();
        } else {
            const video = `assets/samplePhotos/${this.photographerId}/${this.video}`;
            element.querySelector('video').setAttribute("src", video);
            
            imageElement.remove();
        }

        if (element.querySelector('p')){
            element.querySelector('p').textContent = this.title;
        }
      

        //LAJKOVI ISPOD SLIKE
        if (element.querySelector('span')){
            element.querySelector('span').textContent = this.likes;
            //console.log("Element 1", element);

            element.getElementById('likes-button').addEventListener("click", this.addLikes.bind(this));
        }
       

       
        return element;
    }


    addLikes(event) {
        console.log("Element 2", event);
        this.likes++
        console.log("ADDED", this.likes);
        this.element.querySelector('span').textContent = this.likes;
    }
}