const input = document.querySelector('input') // on sélectionne l'élément d'entrée (input)
const favoriteBtn = document.querySelector(".btn-favorite"); // le bouton de favoris
const submitBtn = document.querySelector(".submit"); // le bouton de soumission
const ul = document.querySelector("ul"); // la liste non
const bottomBtn = document.querySelector(".bottomBtn"); // le bouton pour descendre en bas de la page
const topBtn = document.querySelector(".topBtn"); // le bouton pour remonter en haut de la page

// Initialisation du tableau de favoris
let favTable = []

// on va afficher les détails du repas en fonction de la recherche
function displayMeal() {
    // Vérifie si la valeur de l'entrée (input) si elle n'est pas vide
    if (input.value !== "") {
        ul.innerHTML = ""; 
        const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`; 
        axios.get(URL)
            .then(res => {
                const body = res.data.meals; // on récupère les données des repas
                console.log(body);

                body.forEach(element => { // une boucle à travers chaque repas récupéré
                    const title = element.strMeal; // Titre du repas
                    const category = element.strCategory; // Catégorie du repas
                    const area = element.strArea; // Région et origine du repas
                    const img = element.strMealThumb; // l'image du repas
                    const li = document.createElement("li"); // Crée un élément li (<p>${instructions}</p>)

                    li.innerHTML = `
                        <img src="${img}" alt="poster">
                        <h2>${title}</h2>
                        <h3>${category}</h3>
                        <h3>${area}</h3>
                        <button id=${element.idMeal} class="btn-add">Add to favorite</button>      
                    `;
                    ul.appendChild(li); // on va ajouter l'élément li à la liste ul

                    // On vient chercher le 5ème enfant du li 
                    const addBtn = li.children[4]

                    // On écoute le bouton (aka 5ème enfant de ton li)
                    addBtn.addEventListener('click', () => {
                        if (!favTable.includes(element.idMeal)) {
                            // On ajoute au tableau de favoris l'id du meal / repas
                            favTable.push(addBtn.id)
                            // On ajoute notre tableau de favs au local storage
                            localStorage.setItem('favorites', JSON.stringify(favTable))
                            addBtn.textContent = "Delete from favorites"
                            addBtn.style.color = "red"
                        } else {
                            const index = favTable.indexOf(addBtn.id)
                            favTable.splice(index, 1)
                            localStorage.setItem('favorites', JSON.stringify(favTable))
                            addBtn.textContent = "Add to favorites"
                            addBtn.style.color = "black"
                        }
                    })

                });
            }).catch(e => console.error(e)); // catch qui va gère les erreurs de la requête 
    }
}

window.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        button.click();
    }
});
 
// l'événement lors du clic sur le bouton de favoris
favoriteBtn.addEventListener("click", () => {
    ul.innerHTML = ""; // on va éfface le contenu précédent de la liste

    const favorites = JSON.parse(localStorage.getItem("favorites")) || []; // puis récupère les favoris depuis le stockage local
    
    favorites.forEach(idMeal => { 
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        
        axios.get(url)
        .then(res => {
            const data = res.data.meals
            console.log(data)

            data.forEach(element => {
                const title = element.strMeal; // Titre du repas
                const category = element.strCategory; // Catégorie du repas
                const area = element.strArea; // Région et origine du repas
                const img = element.strMealThumb; // l'image du repas
                const li = document.createElement("li"); // Crée un élément li (<p>${instructions}</p>)

                li.innerHTML = `
                    <img src="${img}" alt="poster">
                    <h2>${title}</h2>
                    <h3>${category}</h3>
                    <h3>${area}</h3>
                    <button id=${element.idMeal} class="btn-del">Delete from favorite</button>`;

                ul.appendChild(li); // on va ajouter l'élément li à la liste ul

                const delBtn = li.children[4]

                delBtn.addEventListener('click', () => {
                    delBtn.parentElement.remove()
                    const id = delBtn.id

                    const index = favTable.indexOf(id)
                    favTable.splice(index, 1)
                    localStorage.setItem('favorites', JSON.stringify(favTable))

                })
            })
        })
        .catch(err => console.log(err))
    });
});
 
submitBtn.addEventListener("click",displayMeal)
 // et pour finir l'événement lors du clic sur le bouton de soumission pour afficher les repas

// Une flèche pour pouvoir descendre tout en bas de la page
// Une flèche pour remonter tout en haut de la page

    bottomBtn.addEventListener('click', async () => {
        window.scrollTo(0, document.body.scrollHeight);
    });

    topBtn.addEventListener('click', async () => {
        window.scrollTo(0, 0);
    })



//UN footer avec les lettres de l'alphabet quand on clique sur une lettre on effectue une recherche

    const footer = document.querySelector("footer");

    for (let i = 65; i <= 90; i++) {
        const letter = document.createElement("button");
        letter.textContent = String.fromCharCode(i);
        letter.addEventListener('click', () => {
            input.value = letter.textContent
            displayMeal()
        })
        footer.appendChild(letter);
    }

// Avec les lettres de l'alphabet on peut effectuer une recherche



// Quand on clique sur un plat qu'on ajoute aux favoris qui est déjà dans les favoris
// lui donner une petite animation de type wobble

    favoriteBtn.addEventListener('click', () => {
        favoriteBtn.classList.add('wobble', 1000, "infinite")
        setTimeout(() => {
            favoriteBtn.classList.remove('wobble')
        }, 1000)
    })

// Afficher une pop-up quand on ajoute un plat aux favs, ex : "plat ajouté avec succès" clique sur une lettre on effectue une recherche




// Afficher une pop-up quand on supprime un plat des favs, ex : "plat supprimé avec succès"

