// APP VIDÉO + API

// 2) Récup les éléments depuis JS
    const input = document.querySelector('input')
    const submitBtn = document.querySelector('.submit')
    const list = document.querySelector('.list_film')
    const favList = document.querySelector('.favList')
    const favBtn = document.querySelector('.favBtn')
    const favDiv = document.querySelector('.favDiv')

// 3) Faire la recherche de film (on recup ce qu'il y a dans l'input 
// et on fait une requete http)

    submitBtn.addEventListener('click', searchMovie)

    function searchMovie() {
        if (input.value.length > 0) {
            fetch(`http://www.omdbapi.com/?s=${input.value}&apikey=46f91a34`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    data.Search.forEach(movie => {
                        const li = document.createElement('li')
                        li.innerHTML = `<p>${movie.Title}</p> <img src="${movie.Poster}>`
                        list.appendChild(li)
                    })
                })
        }
    }


// 4) On affiche les films 

    list.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            const favLi = document.createElement('li')
            favLi.textContent = e.target.textContent
            favList.appendChild(favLi)
        }
        else {
            console.log('not a li')
        }
    })


// 5) On crée un bouton pour les favoris 

    favBtn.addEventListener('click', () => {
        if (favDiv.style.display === 'none') {
            favDiv.style.display = 'block'
        } else {
            favDiv.style.display = 'none'
        }
    })
// 6) On récupère le film liké pour l'ajouter à un tableau de favoris (par exemple)

    favDiv.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            e.target.remove()
        }
    })

// 7) On veut pouvoir supprimer un film de la liste et ne pas ajouter 2 fois le meme


// On veut pouvoir préserver les favoris meme après fermeture du navigateur 
// On veut pouvoir supprimer un film de la liste et ne pas ajouter 2 fois le meme

// Pusher sur guthub une fois fini !! 

// Good luck