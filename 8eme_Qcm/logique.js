import questions from './questions.js';

const quiz = document.querySelector('.quiz');

questions.forEach((item)=> {
    const id = item.id;
    const question = item.question;
    const choices = item.reponses;

    const title = document.createElement('h2');
    title.textContent = `${id} - ${question}`;

    const responseList = document.createElement('ul');

    const resultZone = document.createElement('h2');

    const submit = document.createElement('button');
    submit.textContent = 'Valider';

    for (let key in choices) {
        const li = document.createElement('li');
        li.innerHTML = `<input type="radio" name="${id}" value="${key}"><p>${key} : ${choices[key]}</p>`;
        responseList.appendChild(li);
    }

    quiz.appendChild(title)
    quiz.appendChild(responseList)
    quiz.appendChild(submit)
    quiz.appendChild(resultZone)

    submit.addEventListener('click', () => {
        const userChoice = document.querySelector(`input[name="${id}"]:checked`)
        if (userChoice.value == item.correction) {
            resultZone.textContent = 'Bonne réponse';
            resultZone.style.color = 'green';
        } else {
            resultZone.textContent = 'Mauvaise réponse';
            resultZone.style.color = 'red';
        }
    })
})
