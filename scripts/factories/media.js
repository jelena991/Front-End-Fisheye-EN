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
        
        const imageElement = element.querySelector('img');
        const videoElement = element.querySelector('video');

        if (this.image ) {
           
            const image = `assets/samplePhotos/${this.photographerId}/${this.image}`;
            
            element.querySelector('img').setAttribute("src", image);
            element.querySelector('img').setAttribute("id", this.id);

            //EVENT LISTENER FOR DISPLAYING LIGHTBOX 
            //imageElement.addEventListener("click", this.viewMedia.bind(this));

            videoElement.remove();
        } else {
            const video = `assets/samplePhotos/${this.photographerId}/${this.video}`;
            element.querySelector('video').setAttribute("src", video);

            //EVENT LISTENER FOR DISPLAYING LIGHTBOX 
            videoElement.addEventListener("click", this.viewMedia.bind(this));
            
            imageElement.remove();
        }

        if (element.querySelector('p')){
            element.querySelector('p').textContent = this.title;
        }
      

        //LIKES ON SINGLE PICTURE

        if (element.querySelector('span')){
            element.querySelector('span').textContent = this.likes;
            element.querySelector('span').setAttribute('id', `S${this.id}`); 

            element.getElementById('likes-button').addEventListener("click", this.addLikes.bind(this));
        }

    
        return element;
    }

    addLikes(event) {
        const sumLikes = document.getElementById(`S${this.id}`);
        sumLikes.textContent = this.likes++;
        console.log("SUM IS", this.likes);

        //add likes to box 
        const currentLikes = document.getElementById('sumLikes').textContent++;
        console.log("CURRENT LIKES", currentLikes);
    }
 
    viewMedia (id) {
        const modal = document.getElementById("gallery-lightbox");
	    modal.style.display = "block";
        const activeSlide = document.getElementById(`L${this.id}`);
        console.log("ACTIVE SLIDE", activeSlide);
        activeSlide.style.display = "block";
        console.log("CURRENT PICTURE IS", this.id);
    }
}