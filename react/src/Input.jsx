import {useState} from 'react'
function Input() {
const [value, setValue] = useState('')
    return (
        <>
            <input type="text"
                placeholder="Votre texte ici"
                name="input" 
                value={value}
                onChange={setValue(e.target.value)}
            />
            <p>{value}</p>
        </>
    )
}

export default Input;