    async function getPhotographers() {
        let response = await fetch ('/data/photographers.json');

        if (!response.ok){
        throw new Error("HTTP error" + response.status);
        }
        
        let photographers = await response.json();
        console.log(photographers);
      
         // TO DO: Error handling
        return photographers;
    }

    function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
        const template = document.getElementById('photographer-card-template');


        photographers.forEach((photographer) => {
            const photographerModel = new Photographer(photographer);
            const userCardDOM = photographerModel.createCard(template);
            photographersSection.appendChild(userCardDOM);

            console.log(photographerModel);
        });
    };

    async function init() {
        // Retreive photographer data
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    