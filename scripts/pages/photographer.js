//Add JavaScript code linked to the photographer.html page
async function getPhotographers() {
    let response = await fetch ('http://127.0.0.1:5501/data/photographers.json');

    if (!response.ok){
    throw new Error("HTTP error" + response.status);
    }
    
    let photographers = await response.json();
    console.log(photographers);
  
     // TO DO: Error handling
    return photographers;
}

function displayData(photographers) {
    const main = document.getElementById("main");
    const template = document.getElementById('photographer-page-template');

    let params = (new URL(document.location)).searchParams;
    let photographerId = params.get('id'); 
    console.log('PHOTOGRAPHERS', photographers)
    console.log(photographers[0].id)

    //filter through all photographers and return the one with the correct Id
    const photographer = photographers.filter(item => item.id.toString() === photographerId)[0];
    console.log(photographer)

    const photographerModel = new Photographer(photographer);
    const userCardDOM = photographerModel.createCard(template);
    main.appendChild(userCardDOM);
};

async function init() {
    // Retreive photographer data
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();