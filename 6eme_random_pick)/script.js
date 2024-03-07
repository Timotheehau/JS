const students = ["Timothée", 
"Dalil", 
"Patterson", 
"Thomas",
"Audric", 
"Zouayobo", 
"Lucas", 
"Enzo", 
"Ismail", 
"Yanis", 
"Kahil", 
"Milan", 
"Adem", 
"Théo", 
"Abdelhadi", 
"Le prof offre les chouquettes"]
const random = document.getElementsByClassName('random')
const output = document.querySelector('.output')

const button = document.querySelector('button')
button.addEventListener('click', () => {
    const randomStudent = Math.floor(Math.random() * students.length)
    console.log(randomStudent, students[randomStudent])
    output.textContent = students[randomStudent]
    random.value = randomStudent
})

// correction
// const students = 
// ["Timothée", 
// "Dalil", 
// "Patterson", 
// "Thomas",
// "Audric", 
// "Zouayobo", 
// "Lucas",
//  "Enzo", 
//  "Ismail", 
//  "Yanis", 
//  "Kahil", 
//  "Milan", 
//  "Adem", 
//  "Théo", 
//  "Abdelhadi", 
//  "Le prof offre les chouquettes"]
//  const button = document.querySelector('button')

// const studentField = document.querySelector('h2')

// function randomName() {
//     let randomIndex = Math.floor(Math.random() * students.length)
//     studentField.textContent = students[randomIndex]
// }

//const interval = setInterval(randomName, 100)

// button.addEventListener('click', () => {
//     clearInterval(interval)
//     randomName()
// })
// window.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter') {
//         clearInterval(interval))
//     }}
