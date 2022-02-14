//Add JavaScript code linked to the photographer.html page
async function getData() {
    let response = await fetch ('http://127.0.0.1:5501/data/photographers.json');

    if (!response.ok){
    throw new Error("HTTP error" + response.status);
    }
    
    let data = await response.json();
    console.log('DATA', data);
  
     // TO DO: Error handling
    return data;
}


function displayData(photographers) {

    console.log("PRAVIMO FOTOGRAFERA");
    const main = document.getElementById("main");
    const template = document.getElementById('photographer-page-template');

    let params = (new URL(document.location)).searchParams;
    let photographerId = params.get('id'); 
    //console.log('PHOTOGRAPHERS', photographers)
    //console.log(photographers[0].id)

    //filter through all photographers and return the one with the correct Id
    const photographer = photographers.filter(item => item.id.toString() === photographerId)[0];
    console.log(photographer)

    const photographerModel = new Photographer(photographer);
    const userCardDOM = photographerModel.createCard(template);
    main.appendChild(userCardDOM);
};


function displayMedia(media) {
    const gallery = document.getElementById("gallery");
    console.log ("media in displayMedia are: ", media)
    const template = document.getElementById('gallery-template');
    
    let mediaArray = [];

    media.forEach((picture) => {
        const mediaModel = new Media(picture);
        const mediaDOM = mediaModel.createMedia(template);
        gallery.appendChild(mediaDOM);

        mediaArray.push(mediaModel);
    });

    return mediaArray;
};

function displayNameInForm(name){
    const nameForm = document.getElementById('name');
    nameForm.textContent = name;
}


function displayLightbox(mediaArray) {

    const template = document.getElementById('lightbox-template');

    const lightboxModel = new Gallery(mediaArray, template);

    const rootElement = document.getElementById('gallery-lightbox');
    lightboxModel.create(rootElement);
}

function changeOrder(filteredMedia) {
    const select = document.getElementById('orderBy');
    console.log("SELECT", select.value);
    select.addEventListener("change", function(){
        console.log("ecent is", this.value);
        orderBy(filteredMedia, this.value);
    });  
}

function orderBy(filteredMedia, sortValue){
    
    if (sortValue === 'date'){
         removeMedia();
    displayMedia(filteredMedia.sort(byDate));
    console.log('ordered by date');
    } else if (sortValue === 'popularity') {
        removeMedia();
        displayMedia(filteredMedia.sort(byPopularity));
        console.log('ordered by popularity');   
    } else if (sortValue === 'title') {
        removeMedia();
        displayMedia(filteredMedia.sort(byTitle));
        console.log('ordered by title');
    }
}

function removeMedia() {
    const gallery = document.getElementById("gallery");
    while(gallery.lastChild.id !== 'gallery-template'){
        gallery.removeChild(gallery.lastChild);
    }
}

/*Compare by title*/

function byTitle(a,b){
    if (a.title > b.title){
        return 1; 
    } else if (b.title > a.title) {
        return -1;
    } else {
        return 0;
    }

    /** OPTION 2
     * function byTitle(a,b){
     *      return a.compareTo(b);
     * }
     */
}

/*Compare by popularity*/

function byPopularity(a, b){
    //subtraction will give a positive, negative or zero as result 
    return b.likes - a.likes;
}

/*Compare by date*/

function byDate(a, b){
    //yeat, month, day
    return new Date(a.date).valueOf() - new Date(b.date).valueOf(); //timestamps
}


function sumLikes(media) {

    const sum = media.reduce((total, { likes }) => {
        total += likes;
        return total;
      }, 0);

      console.log("sum of all likes is: ", sum);

    const likesElement = document.getElementById("sumLikes");
    likesElement.textContent = sum; 
}

function displayRate (price) {
    const rate = document.getElementById("rate");
    rate.textContent =`$${price}/day`; 
}


async function init() {
    // Retreive photographer data
    const { photographers, media } = await getData();
    displayData(photographers);


    let params = (new URL(document.location)).searchParams;
    let photographerId = params.get('id'); 
    console.log("ID", photographerId)
 
    const filteredMedia = media.filter(item => item.photographerId.toString() === photographerId);

    const name = photographers.filter(item => item.id.toString() === photographerId)[0].name;

    displayNameInForm(name)
    //DISPLAY GALLERY
    const mediaArray = displayMedia(filteredMedia);
    displayLightbox(mediaArray);

    changeOrder(filteredMedia);

    sumLikes(filteredMedia);

    const price = photographers.filter(item => item.id.toString() === photographerId)[0].price;
    displayRate(price);
 
 };

init();




