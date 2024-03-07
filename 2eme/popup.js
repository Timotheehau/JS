const body = document.querySelector('body');
// On va créer une fonction qui écrit "Hello World" dans une pop-up
function popUp(message) {
    if (message.length <= 100) {
        alert(message);
    } else {
        alert("Erreur: Le message est trop long");
    }
}

// Ecrire une fonction qui affiche un argument dans une pop-up

//Si le message est trop long (100 charactères), afficher un message d'erreur à la place

// Créer un carré de couleur dont la couleur change à chaque clic, il doit passer de vert à bleu et de bleu à vert
// Créer un bouton + qui incrémente une valeur jusqu'à 20 où elle s'arrete

const square = document.querySelector('.square');
square.addEventListener('click', () => {
    const currentColor = square.style.backgroundColor;
    if (currentColor === 'green') {
        square.style.backgroundColor = 'blue';
    } else {
        square.style.backgroundColor = 'green';
    }
})

// Créer un bouton + qui incrémente une valeur jusqu'à 20 où elle s'arrete

const button = document.createElement('button');
body.appendChild(button);
button.textContent = '+';
let count = 0;
button.addEventListener('click', () => {
    if (count <= 20) {
        count++;
        console.log(count);
    } else {
        console.error('La valeur est déjà à 20');
    }
})
/* correction
function popUp(text) {
    if (String,length(text) <100) {
        alert(text);
    } else {
        alert('Erreur: Le message est trop long');
    }
} */
