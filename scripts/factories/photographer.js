function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement( 'h3');
        const h4 = document.createElement ('h4');
        const h5 = document.createElement ('h5')
        h2.textContent = name;
        h3.textContent = tagline;
        h4.textContent = price;
        h5.textContent = city;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(h5);
    
        return (article);
    }
    return { name, picture, id, city, country, tagline, price, getUserCardDOM }
}