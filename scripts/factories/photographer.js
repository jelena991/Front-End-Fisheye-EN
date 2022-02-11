class Photographer {
    constructor ({name, portrait, id, city, country, tagline, price}){
        this.name = name;
        this.portrait = portrait;
        this.id = id; 
        this.city = city;
        this.country = country;
        this.tagline = tagline; 
        this.price = price; 
    }

    createCard (template){
        const element = template.content.cloneNode(true);
        const picture = `assets/photographers/${this.portrait}`;

        if (element.querySelector('a') ) {
            element.querySelector('a').href = "photographer.html?id=" + this.id;
        }
        element.querySelector('h2').textContent = this.name;
        element.querySelector('img').setAttribute("src", picture);
        
        element.querySelector('h3').textContent = `${this.city}, ${this.country}`;
        element.querySelector('p').textContent = `${this.tagline} \n`;
       
        if (element.getElementById('price')){
            element.getElementById('price').textContent = `$${this.price}/day`;
        }

        

        return element;
    }
}

// const template = document.getElementById('photographer-card-template');
// const photo1 = new Photographer({id: 1, name:'john'});
// const photo1Card = photo1.createCard(template);
// document.body.appendChild(photo1Card)
// console.log(photo1)







/* function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;
    
    const tmpl = document.getElementById('photographer-card-template').content.cloneNode(true);

    tmpl.querySelector('img').setAttribute("src", picture);
    tmpl.querySelector('h2').innerText = name;
    // tmpl.querySelector('p').innerText = `${city}, ${country} \n ${tagline} \n $${price}/day`;
    tmpl.getElementById('location').innerText = `${city}, ${country} \n`;
    tmpl.getElementById('tagline').innerText = `${tagline} \n`;
    tmpl.getElementById('price').innerText = `$${price}/day`;
    

    return tmpl;

    //function getUserCardDOM() {

    //}
    // return { name, picture, id, city, country, tagline, price, getUserCardDOM }
} */