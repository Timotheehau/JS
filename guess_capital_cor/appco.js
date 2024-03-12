const country = document.querySelector('.country-name')
const flag = document.querySelector('.flag')
const input = document.querySelector('input')
const scoreZone = document.querySelector('.score')
const verdict = document.querySelector('.verdict')
const submit = document.querySelector('.submit')
const next = document.querySelector('.next')

const key = '44nmBgtT9PMvyzLMPvmUoMzjNyZ7Fy82J72OmFio'

const url = `https://countryapi.io/api/all?apikey=${key}`

// Chargement initial du Quiz
window.addEventListener('DOMContentLoaded', displayQuiz)

// Ma fonction d'affichage et de lancement du Quiz avec la requete API
function displayQuiz() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        // On initialise score et round
        let score = 0
        let round = 1
    
        // On affiche le score et le round au début
        scoreZone.textContent = `Round ${round} : ${score} / 10`

        // Je crée un tableau avec les keys de notre objet data
        const countryArray = Object.keys(data)

        generateQuestion(countryArray, data, round, score)
    
    })
    .catch(err => console.log(err))
}

function generateQuestion(countryArray, data, round, score) {
    // On génére un chiffre aléatoire entre 0 et 250
    const randomIndex = Math.floor(Math.random() * countryArray.length)

    // À l'aide de notre index aléatoire on recup un code pays aléatoirement
    const randomCode  =countryArray[randomIndex] 

    // On recup un pays aléatoirement et toutes ses informations
    const randomCountry = data[randomCode]
    
    country.textContent = randomCountry.name 
    flag.src = randomCountry.flag.large

    submit.addEventListener('click', () => {
        checkAnswer(randomCountry)

        if (checkAnswer(randomCountry) === true) {
            score++
            scoreZone.textContent = `Round ${round} : ${score} / 10`
        }
    })

    next.addEventListener('click', () => {
        round++
        scoreZone.textContent = `Round ${round} : ${score} / 10`
        // Si on est pas encore au round 10 on regenere une question
        if (round <= 10) {
            generateQuestion(countryArray, data, round, score)
        } else {
            verdict.textContent = `Vous avez terminé le quiz ! Votre score est de ${score} / 10`
        }
    })
}

function checkAnswer(country) {
    if (input.value.trim().toLowerCase() === country.capital.trim().toLowerCase()) {
        verdict.textContent = "Bonne réponse !"
        return true
    } else {
        verdict.textContent = `Mauvaise réponse ... La réponse était ${country.capital}`
        return false
    }
}
