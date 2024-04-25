import { useState } from 'react'

// Coder un signup en React : pseudo, mail, password, confi
// Préparer aussi la fonction de submit qui devra envoyer les infos du signup, soit sous format json soit sous format type formData
// ! Les inputs doivent etre controllé cad leur value est liée à un state  

function Signup() {
    return ( 
        <>
        <h1>Signup</h1>
        <form>
            <input type="text" placeholder="Pseudo" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button>Signup</button>
        </form>

        </>

     );
}
function Submit() {
    return (
        
        <button>Submit</button>
    )
}


export default Signup;
export { Submit };