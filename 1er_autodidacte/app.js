for (var i=0; i<= 150 ; i++)
if (i % 2 === 0){
    console.log(i + ' bien')
} else {
    console.log(i + ' pas bien')
}
// checker f12 Console pour results
// le but ici est de voir tous les nombres de 0 à 200 inclus
// tout en attribuant une valeur si le nombre est paire
// la console va retourner : le nombre + bien
// si impaire alors : le nombre + pas bien
const body = document.querySelector('body')
const ul = document.createElement('ul')
const li = document.createElement('li')

li.innerHTML = '<h2>Je suis un item de liste en html<h2>'
li.textcontent = 'Je suis un item de liste'

body.appendChild(ul)
ul.appendChild(li)


// On va commencer par créé un carré en html css avec des propriétés comme la couleur, la width, la height, la transition: transform 0.5s
// puis créé une constante qui a la classe de notre carré
const square = document.querySelector('.square')
// A ce carré on va ajouter un écouteur d'évènement quand on clique dessus
square.addEventListener('click', () => {
    // on va créé une constante qui prend le parametre de couleur arriere plan
    const currentColor = square.style.backgroundColor
    // si la valeur est === (celle définie dans le css)
    if (currentColor === 'blue'){
        //alors on veut qu'elle devienne une autre
    square.style.backgroundColor = '#afa0eb'
    //sinon ça redevient comme à son origine
    } else {
        square.style.backgroundColor = 'blue'
    }
})



