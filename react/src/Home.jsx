import questions from './questions'
// import {useState} from 'react'
import Input from './Input'

function Home() {
    const listItems = questions.map(question => (
    <li key={question.id}> 
    <p>{question.question}</p>
    {question.options.map((option, index) => (
        <p key={index}>{option}</p>
    ))}
    </li>
    )
)
    return ( 
        <>
        <h1>Home</h1>
        {listItems}
        </>
        
     );
}

// function increaseCount() {
//     const[count, setCount] = useState(0)
//     console.log(count)
//     function increaseCount() {
//         setCount(count => count +1)
//         setCount(count => count +1)
//     }

//     return (
//     <>
//         <h1>Bienvenue sur le homepage</h1>
//         <h2>{count}</h2>
//         <button onClick={() => increaseCount()}> + 2</button>
//     </>       

// )
// }

 export default Home
 // export default increaseCount
