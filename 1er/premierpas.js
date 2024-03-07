const h1 = document.querySelector('h1');
// const div = document.getElementById('div');
const square = document.querySelector('.square')[0];
const body = document.querySelector('body');

square.addEventListener('click', () => {
    square.style.width = "30rem";
})

//Je créé une liste et un item de liste
const ul = document.createElement('ul');
const li = document.createElement('li');
// J'ajoute du contenu de texte à mon item de liste
li.textContent = "Je suis un item de liste";
li.innerHTML = '<h2>Je suis un item de liste haha</h2>';
//J'insère mon item dans ma liste
ul.appendChild(li);
//J'insère ma liste dans le body
body.appendChild(ul);



// const number = 33;
// let name = "John";

// var x = 5;
// for (var i=0; i<10; i++) {
//     x += i;
// }
var objets = {
    nom : 'table',
    couleur : 'bleue',

     affiche: function() {
         console.log('Je suis une ' + this.nom + ' ' + this.couleur);
     }
}

// afficher les chiffres de 1 à 500 et dire si ils sont pairs ou impairs
for (let i=1; i<=500; i++) {
    if (i % 2 === 0) {
        console.log(i);
    } else {
        console.error(i + ' est impair')
        //ou console.log`${i} est impair`
    }

}
function maFonction(name) {
    console.log(`Je suis ${name}`);
}

console.log(square);

square[1].style.color = "green";
