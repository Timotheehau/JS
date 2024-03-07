document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const movieList = document.getElementById('movieList');
    const favorites = document.getElementById('favorites');
 
    // Fonction pour faire une requête HTTP à l'API OMDB
    async function searchMovie(query) {
        const apiKey = '905f57b3';
        const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`;
 
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.Search) {
                displayMovies(data.Search);
            } else {
                console.error('No movies found');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
 
    // Fonction pour afficher les films
// Fonction pour afficher les films
function displayMovies(movies) {
    movieList.innerHTML = '';
    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie');
        movieItem.innerHTML = `
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
            <img src="${movie.Poster}" alt="${movie.Title} Poster">
            <button class="favorite-button">Add to Favorites</button>
        `;
        const favoriteButton = movieItem.querySelector('.favorite-button');
        favoriteButton.addEventListener('click', () => addToFavorites(movie));
        movieList.appendChild(movieItem);
    });
}
 
 
    // Fonction pour ajouter un film aux favoris
    function addToFavorites(movie) {
        const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
        if (!favoriteMovies.some(fav => fav.imdbID === movie.imdbID)) {
            favoriteMovies.push(movie);
            localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
 
            const favoriteItem = document.createElement('div');
            favoriteItem.innerHTML = movie.Title;
            favorites.appendChild(favoriteItem);
        }
    }
 
    // Événement de clic sur le bouton de recherche
    searchButton.addEventListener('click', () => {
        const query = searchInput.value;
        searchMovie(query);
    });
 
});