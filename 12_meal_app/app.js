// Fonctionnalités
const body = document.querySelector('body')
const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`
const search = document.querySelector('.searchbar')
const searchBtn = document.querySelector('.search-btn')
const container = document.querySelector('.container')
const meal = document.querySelector('.meal')
const mealImg = document.querySelector('.meal-img')
const mealTitle = document.querySelector('.meal-title')
const recipe = document.querySelector('.recipe')
const fav = document.querySelector('.fav')
const favList = document.querySelector('.fav-list')
const favMeal = JSON.parse(localStorage.getItem('favMeal'))
const remove = document.querySelector('.remove')
const randomBtn = document.createElement('button')
const placeholder = document.querySelector('.placeholder')
// 1) Pouvoir chercher un plat en fonction de son nom ou ses ingrédients
console.log(url)
// 2) Pouvoir en cliquant sur un plat afficher la recette

    function displayMeal(meals) {
        mealTitle.textContent = meals.strMeal
        mealImg.src = meals.strMealThumb
        recipe.addEventListener('click', () => {
            recipe.textContent = meals.strInstructions
        })
    }

    searchBtn.addEventListener('click', () => {
        const query = search.value
        searchMeal(query)
    })


    async function searchMeal(query) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        const data = await response.json()
        displayMeal(data.meals[0])
    }

    window.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchBtn.click()
        }
    })
    window.addEventListener('click', (e) => {
        if (e.target === remove) {
            recipe.textContent = ''
        }
    })

    fav.addEventListener('click', () => {
        localStorage.setItem('favMeal', JSON.stringify(mealTitle.textContent))
        const favItem = document.createElement('li')
        favItem.textContent = mealTitle.textContent
        favList.appendChild(favItem)

        favItem.addEventListener('click', () => {
            favItem.remove()
            localStorage.removeItem('favMeal')
        })
    })     
    














// 3) Pouvoir ajouter une recette / plat à une liste de favoris

// Bonus : barre de recherche avec suggestion

// API : Free Meal API