// jsTVWWPChK1W5ttKZVHgtS4vdWAaLn5pr6IWehIZ

const apiKey = 'jsTVWWPChK1W5ttKZVHgtS4vdWAaLn5pr6IWehIZ';
const submitBtn = document.createElement('submitBtn');
const button = document.createElement('button')
const input = document.createElement('input');
const img = document.createElement('img');
const text = document.querySelector('h2');
const score = document.querySelector('.score');

document.body.appendChild(input);
input.style.display = 'block';
input.style.margin = 'auto';
input.style.width = '50%';
input.style.marginTop = '20px';
input.style.padding = '10px';
input.style.fontSize = '20px';
input.style.border = 'none';
input.style.borderRadius = '5px';
input.style.textAlign = 'center';
input.style.outline = 'none';
input.style.marginBottom = '20px';
input.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
input.style.fontFamily = 'Arial, sans-serif';
input.style.fontWeight = 'bold';
input.style.color = 'black';
input.style.backgroundColor = 'white';
input.style.transition = '0.3s';
input.placeholder = 'Entrez la capitale';


let scoreCount = 0;
let capital = '';
let country = '';
let imgSrc = '';
let answer = '';

button.addEventListener('click', async () => {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await response.json();
    const random = Math.floor(Math.random() * data.length);
    country = data[random].name.common;
    capital = data[random].capital[0];
    text.textContent = `Quelle est la capitale de ${country}?`;
    imgSrc = data[random].flags.png;
    img.src = imgSrc;
    img.style.width = '200px';
    img.style.height = 'auto';
    img.style.display = 'block';
    img.style.margin = 'auto';
    document.body.appendChild(img);
    answer = capital;
})

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (input.value === answer) {
            scoreCount++;
            score.textContent = `Score: ${scoreCount}`;
            input.value = '';
            button.click();
        } else {
            input.value = ''
            
        }
    }
});



for (let i = 0; i < 10; i++) {
    button.click();    
}
window.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        button.click();
    }
});







