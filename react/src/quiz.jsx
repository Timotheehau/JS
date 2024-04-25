import { useState } from "react";
import questions from "./questions"

function Quiz() {
    // 1 données
    const [Index, setIndex] = useState(0)
    const [score, setScore] = useState(0)
    // créer 2 states pour stocker les réponses et le score
    // 2 fonctions
    function handleClick(option) {
        if (option === questions[Index].answer) {
            setScore(score + 1)
        }

        setIndex(index+1)

        function handleReset() {
            setIndex(0)
            setScore(0) 
        }

        return (
            <>
            <h1>Quiz</h1>
            <p>{questions[Index].question}</p>
            {questions[Index].options.map((option, index) => (
                <button key={index} onClick={() => handleClick(option)}>{option}</button>
            ))}
            <p>Score: {score}</p>
            <button onClick={handleReset}>Reset</button>
            </>
        )

    }

    tf
}
export default Quiz 