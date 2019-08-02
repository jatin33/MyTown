const homeLink = document.getElementById('home');
const placesLink = document.getElementById('places');
const locationLink = document.getElementById('location');
const creatorLink = document.getElementById('creator');
const contentHolder = document.getElementById('content');


function decideContent(id) {
    switch (id) {
        case 'home':
            return `
            <img src="./assets/mundra-port.jpg"/>
            <div>Another port town on the south coast of Kutch, Mundra was well-known for salt and spice trading in the past and now more for tie-dye and block-print textiles. 
            The harbor is virtually unusable today, and only small local fishing craft navigate its silted waterways up the river.</div>
            `;
            break;
        case 'places':
            return `
            <img src="./assets/mahadev-temple.jpg"/>
            <div>The Mahadev temple has memorials to famous Mundra sailors, including some who advised the Sultan of Zanzibar and guided Vasco da Gama to India.</div>
            `;
            break;
        case 'location':
            return `
            <div><b>By road:</b> ST buses and jeeps depart from Bhuj about every 30 min. from the central transportation area.
            For local excursions, jeeps can be hired in town.</div>`
            break;
        case 'creator':
            return `
            <img src="./assets/faceitjatin.jpg"/>
            <div>Born and brought up in Kutch,Gujarat recently moved to coastal town of Mundra and fell in love with this place</div>`
            break;
    }
}


homeLink.addEventListener('click', function () {
    contentHolder.innerHTML = decideContent('home');
});

placesLink.addEventListener('click', function () {
    contentHolder.innerHTML = decideContent('places');
});

locationLink.addEventListener('click', function () {
    contentHolder.innerHTML = decideContent('location');
});

creatorLink.addEventListener('click', function () {
    contentHolder.innerHTML = decideContent('creator');
});
