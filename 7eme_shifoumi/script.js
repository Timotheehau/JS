const buttons = document.querySelector('.buttons')
// const button2 = document.querySelector('.paper')
// const button3 = document.querySelector('.scissors')
const result = document.querySelector('.output')
// const button4 = document.querySelector('.refresh')
const score = document.querySelector('.score')
const computerOutput = document.querySelector('.computer')

// const choices = ['rock', 'paper', 'scissors']
// const computerChoice = choices[Math.floor(Math.random() * choices.length)]

// button.addEventListener('click', () => {
//     if (computerChoice === 'rock') {
//         result.textContent = "It's a draw"
//     } else if (computerChoice === 'paper') {
//         result.textContent = "You lose"
//     } else {
//         result.textContent = "You win"
//     }
//     computerOutput.textContent = `Computer chose ${computerChoice}`
// })

// button2.addEventListener('click', () => {
//     if (computerChoice === 'paper') {
//         result.textContent = "It's a draw"
//     } else if (computerChoice === 'rock') {
//         result.textContent = "You win"
//     } else {
//         result.textContent = "You lose"
//     }
//     computerOutput.textContent = `Computer chose ${computerChoice}`
// })

// button3.addEventListener('click', () => {
//     if (computerChoice === 'scissors') {
//         result.textContent = "It's a draw"
//     } else if (computerChoice === 'paper') {
//         result.textContent = "You win"
//     } else {
//         result.textContent = "You lose"
//     }
//     computerOutput.textContent = `Computer chose ${computerChoice}`
// })  
// button4.addEventListener('click', () => {
//     location.reload()
// })

button.forEach(buttons => {
    
    buttons.addEventListener('click', () => {
        const choices = ['rock', 'paper', 'scissors']
        const computerChoice = choices[Math.floor(Math.random() * choices.length)]
        if (computerChoice === 'rock') {
            result.textContent = "It's a draw"
        } else if (computerChoice === 'paper') {
            result.textContent = "You lose"
        } else {
            result.textContent = "You win"
        }
        computerOutput.textContent = `Computer chose ${computerChoice}`
    })
}
)
