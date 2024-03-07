// Ce commentaire indique le chemin du fichier dans lequel se trouve le code

// Déclaration des variables pour les éléments HTML
const input = document.querySelector('textarea'); // Sélectionne le premier élément textarea dans le document
const submit = document.querySelector('.submit'); // Sélectionne le premier élément avec la classe "submit" dans le document
const output =  document.querySelector('p'); // Sélectionne le premier élément p dans le document

// Fonction pour traduire le contenu de l'input vers l'output
function translate() {
    output.innerHTML = input.value; // Définit le contenu de l'élément output avec la valeur de l'élément input
    input.value = ""; // Réinitialise la valeur de l'élément input à une chaîne vide
}

// Événement click sur la fenêtre
window.addEventListener('click', (event) => {
    console.log(event.target.value); // Affiche la valeur de l'élément sur lequel l'événement click a été déclenché
})

// Événement keydown sur l'élément input
input.addEventListener('keydown', (e) => {
    if (e.key === "Enter") { // Vérifie si la touche pressée est la touche "Enter"
        translate(); // Appelle la fonction translate
    }
})