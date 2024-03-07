// j'importe le fichier data.js dans celui-ci
const body = document.querySelector('body'); // Sélectionne l'élément <body> du document HTML
const data = [ // Déclare un tableau d'objets contenant des données
    {id:1, name:'Alfred', job: 'Housekeeper', image:'./assets/alfred.png'}, // Premier objet avec des propriétés id, name, job et image
    {id:2, name:'Joe', job:'Taxidriver', image:'./assets/taxi.png'}, // Deuxième objet avec des propriétés id, name, job et image
    {id:3, name:'Akira', job:'Cyborg', image: './assets/cyborg.png'}, // Troisième objet avec des propriétés id, name, job et image
    {id:4, name:'Elektra', job:'Sniper', image: './assets/sniper.png'} // Quatrième objet avec des propriétés id, name, job et image
]

data.forEach(item => { // Parcourt chaque élément du tableau data
    console.log(item); // Affiche chaque élément dans la console
    const container = document.createElement('div'); // Crée un nouvel élément <div>
    container.classList.add('container'); // Ajoute la classe 'container' à l'élément <div>
    body.appendChild(container); // Ajoute l'élément <div> au <body> du document HTML
    container.innerHTML = `
        <h2>${item.name}</h2> // Ajoute le nom de l'élément dans un titre de niveau 2
        <p>${item.job}</p> // Ajoute le travail de l'élément dans un paragraphe
        <img src="${item.image}" alt="${item.name}"> // Ajoute une image avec la source et l'attribut alt basés sur les propriétés de l'élément
    `;
    appendChild(container); // Ajoute l'élément <div> à son parent
    appendChild(img); // Ajoute l'élément <img> à son parent
});

// correction
/* import data from './data.js';
*/