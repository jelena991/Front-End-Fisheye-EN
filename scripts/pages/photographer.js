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
    
    media.forEach((picture) => {
        const mediaModel = new Media(picture);
        const mediaDOM = mediaModel.createMedia(template);
        gallery.appendChild(mediaDOM);
    }); 

};

async function init() {
    // Retreive photographer data
    const { photographers, media } = await getData();
    displayData(photographers);


    let params = (new URL(document.location)).searchParams;
    let photographerId = params.get('id'); 
    console.log("ID", photographerId)
 
    const filteredMedia = media.filter(item => item.photographerId.toString() === photographerId);
    displayMedia(filteredMedia);
};

init();




