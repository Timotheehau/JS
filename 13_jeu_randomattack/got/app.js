// Jeu à faire avec des classes en JS 

// On va vouloir coder la logique du jeu en JS avec un système de classes. 

// 1) On pourra commencer par une classe Player qui contiendra toutes les infos d'un joueur et 
// ses actions possibles.

// Le seul élément hors de nos classes sera le querySelector pour notre div 
// de classe game (dans le html)

// Un player aura par défaut : 

//  - 100 de health 
//  - 100 de mana
//  - un nom
//  - une spec (guerrier, mage etc) 
//  - une méthode d'attaque qui enlève 10 à l'adversaire 
//  - une méthode getDetails qui affiche nom et spec du player
//  - une méthode createPlayer qui affichera le joueur dans le .game avec ses infos (+les boutons) 
//  - une méthode setOpponent() qui permettra de sélectionner le destinataire des attaques.  

// Dans player il y aura un constructor et dans ce constructor on appelle createPlayer()
// Quand un des player arrive à 0 de health afficher message type xxx is dead...

// 2) Créer une nouvelle classe Game

// Cette classe comprendra :

//  -  méthode newGame() : affiche la page d'intro avec l'input pour le nom du héro et un select
//  pour choisir la spec du héro. Quand on appuie sur go on arrive sur la page de "combat"
//  Appuyer sur le bouton go doit aussi générer nos players ...

//  -  créer la ou les méthodes statique afin de gérer le dé. On veut que chaque fois qu'on appuie 
//  attaque le dé se lance et selon le résulatat l'attaque aboutit ou non. Pour l'effet de 
//  succession de dés on pourra utiliser setInterval, pour l'arret du dé sur une face setTimeout

// API got : https://thronesapi.com/

// Todo : 

// - Mettre les dés sous le VS ou au dessus (probablement du css)
// - Gérer la mana : quand on attaque (réussie) on prend 10 points de mana. On part de 0 de mana.
// - Ajouter une bordure pour le joueur en cours.
// - Quand l'ennemi meurt un bouton apparait proposant d'affronter le personnage suivant 
// - Ajouter bouton de refresh pour relancer le jeu 
// Cacher les boutons du joueur dont ce n'est pas le tour

const game = document.querySelector('.game')

class Game {
    static new() {
        game.innerHTML = `
        <div class="intro">
            <h2>Welcome !</h2>
            <input type="text" placeholder="Enter your Hero's name">
            <p>Choose one : </p>
                <select>
                    <option value="Warrior">Warrior</option>
                    <option value="Wizard">Wizard</option>
                    <option value="Barbarian">Barbarian</option>
                    <option value="Archer">Archer</option>
                    <option value="Mercenary">Mercenary</option>
                    <option value="Full-stack Developper">Full-stack Developper</option>
                    <option value="Rogue">Rogue</option>
                </select>
            <button>Go</button>
        </div>
        `
        const btn = document.querySelector('button')
        
        btn.addEventListener('click', () => {
            const name = document.querySelector('input').value
            const spec = document.querySelector('select').value
            
            if (name.length > 0) {
                game.innerHTML = "<h2>Loading API data ...</h2>"

                fetch('https://thronesapi.com/api/v2/Characters')
                .then(res => res.json())
                .then(data =>  {
                    const random = Math.floor(Math.random() * data.length)
                    const character = data[random]

                    const avatar = './assets/web-dev.png'

                    game.innerHTML = "<div class='zone'></div>"

                    const zone = document.querySelector('.zone')
                    const vs = document.createElement('img')
                    vs.classList.add('vs')
                    vs.src = './assets/VS.png'
                    zone.appendChild(vs)

                    const player1 = new Player(name, spec, avatar, true)
                    const player2 = new Player(character.fullName, character.title, character.imageUrl)
        
                    player1.setOpponent(player2)
                    player2.setOpponent(player1)  
                })
            } else {
                const error = document.createElement('h2')
                error.textContent = "Please give a name to your hero"
                error.classList.add('error')

                game.querySelector('.intro').appendChild(error)
            }
        })
    }

    static newDice() {
        // On crée le dé 
        const dice = document.createElement('img')
        dice.classList.add('dice')

        // On crée le chiffre aléatoire
        const random = Math.floor(Math.random() * 6) + 1

        // On donne comme source une face aléatoire 
        dice.src = `./assets/dice-six-faces-${random}.png`

        return dice 
    }

    static rollDice() {
        const zone = document.querySelector('.zone')
        let newDice = this.newDice()

        if (zone.querySelector('.dice')) {
            zone.querySelector('.dice').remove()
        } 

        zone.appendChild(newDice)

        const interval = setInterval(() => {
            const dice = this.newDice()
            const img = document.querySelector('.dice')
            img.src = dice.src
        }, 80)

        setTimeout(() => {
            clearInterval(interval)
        }, 1500)
    }
}
 
class Player {
    constructor(name, specialisation, avatar) {
        this.name = name
        this.specialisation = specialisation
        this.health = 100
        this.mana = 1000
        this.avatar = avatar

        this.div = this.createPlayer()
    }

    attack() {
        const zone = document.querySelector('.zone')
        const dice = document.querySelector('.dice')
        const number = dice.src.slice(-5, -4)

        if (number > 3) {
            zone.innerHTML += "<h2 class='result' style=\"color: darkgreen\">Attack successful !</h2>" 

            if (this.opponent.health > 10) {
                this.opponent.health -= 10
                this.mana += 10

                this.div.querySelector('.mana').textContent = `Mana : ${this.mana}`
                this.opponent.div.querySelector('.health').textContent = `${this.opponent.health}`
            } else {
                this.opponent.div.innerHTML = `<h2 style="color: darkred">${this.opponent.name} is DEAD ...</h2>`
            }
        } else {
            zone.innerHTML += "<h2 class='result' style=\"color: darkred\">Attack failed</h2>" 
        }
        // Cacher les boutons du joueur dont ce n'est pas le tour        
        this.div.querySelector('.attack').style.display = 'none'
        this.div.querySelector('.specialAttack').style.display = 'none'
        this.opponent.div.querySelector('.attack').style.display = 'block'
        this.opponent.div.querySelector('.specialAttack').style.display = 'block'
        
        // Faire en sorte qu'on puisse cliquer qu'une fois
        this.div.querySelector('.attack').disabled = true
        this.div.querySelector('.specialAttack').disabled = true
        this.opponent.div.querySelector('.attack').disabled = false
        this.opponent.div.querySelector('.specialAttack').disabled = false
    }

    specAttack() {
        // conso de mana + dégats selon les résultats du dé
        const zone = document.querySelector('.zone')
        const dice = document.querySelector('.dice')
        const number = dice.src.slice(-5, -4)

        console.log(number)

        switch(number) {
            case '4' : 
                zone.innerHTML += "<h2 class='result' style=\"color: darkorange\">Weak attack</h2>"
                this.opponent.health -= 10
                break
            case '5' : 
                zone.innerHTML += "<h2 class='result' style=\"color: darkgreen\">Spec attack successful</h2>"
                this.opponent.health -= 20
                break
            case '6' : 
                zone.innerHTML += "<h2 class='result' style=\"color: darkgreen\">Spec attack successful</h2>"
                this.opponent.health -= 30
                break
            default :
                zone.innerHTML += "<h2 class='result' style=\"color: darkred\">Attack failed</h2>"
        }
        this.opponent.div.querySelector('.health').textContent = `${this.opponent.health}`
    }
   
    createPlayer() {
        const div = document.createElement('div')

        div.innerHTML = `
            <img class="avatar" src=${this.avatar}>
            <h2>${this.name}</h2>
            <h3>${this.specialisation}</h3>
            <p>Health: <span class="health">${this.health}</span></p>
            <p class="mana">Mana: ${this.mana}</p>
            <button class="attack">Attack</button>
            <button class="specialAttack">Special Attack</button>
        `
        const attackButton = div.querySelector('.attack')

        attackButton.addEventListener('click', () => {
            const result = document.querySelector('.result')

            if (result !== null) {
                result.remove()
            }

            Game.rollDice()

            setTimeout(() => {
                this.attack()
            }, 1600)
        })

        const specAttackButton = div.querySelector('.specialAttack')

        specAttackButton.addEventListener('click', () => {
            if (this.mana >= 30) {
                this.mana -= 30
                this.div.querySelector('.mana').textContent = `Mana : ${this.mana}`

                const result = document.querySelector('.result')

                if (result !== null) {
                    result.remove()
                }

                Game.rollDice()

                setTimeout(() => {
                    this.specAttack()
                }, 1600)

            } else {
                const h3 = document.createElement('h3')
                h3.textContent = "Not enough mana for the special attack"
                this.div.appendChild(h3)
            }
        })
        
        game.appendChild(div)
        return div
    }

    setOpponent(opponentPlayer) {
        this.opponent = opponentPlayer
    }
}
 
Game.new()


 

