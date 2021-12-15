    async function getPhotographers() {
        let response = await fetch ('http://127.0.0.1:5500/data/photographers.json');

        if (!response.ok){
        throw new Error("HTTP error" + response.status);
        }
        
        let photographers = await response.json();
        console.log(photographers);
      
         // TO DO: Error handling
        return photographers;
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
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
    