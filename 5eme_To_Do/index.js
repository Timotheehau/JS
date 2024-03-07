// Cette ligne de code ajoute un écouteur d'événement sur la fenêtre qui se déclenche lorsqu'un clic est effectué.
//window.addEventListener('click', (e) => {
    // Cette ligne de code affiche dans la console l'élément parent de la cible du clic.
   // console.log(e.target.parentElement);
//})

//récuperer les éléments HTML nécessaires
const input = document.querySelector('input')
const submitBtn = document.querySelector('.submit')
const list = document.querySelector('ul')
//Ajouter un écouteur d'événement sur le bouton "Ajouter un élément" qui se déclenche lorsqu'un clic est effectué.
submitBtn.addEventListener('click', () => {
    if (input.value.length > 0) {

        const todo = document.createElement('li')
        //On crée et on insère notre bouton de delete dans chaque todo
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = "X"
        deleteBtn.classList.add('delete')
        deleteBtn.addEventListener('click', () => {
            todo.remove()
        })
        todo.textContent = input.value

        todo.appendChild(deleteBtn)

        list.appendChild(todo)
        localStorage.setItem('todos', JSON.stringify(list))

        input.value = ""

        let checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        todo.appendChild(checkbox)

        checkbox.addEventListener('click', () => {
            todo.style.textDecoration = 'line-through'
            todo.style.opacity = '40%'
        })

        deleteBtn.addEventListener('click', () => {
            todo.remove()
        })
    }
})


//récupérer la valeur de l'input que l'on injecte dans un élément HTML (par exemple li)
//Ajouter un écouteur d'événement sur le bouton "Ajouter un élément" qui se déclenche lorsqu'un clic est effectué.


//Faire en sorte que l'élément créé soit ajouté à la liste des éléments existants
