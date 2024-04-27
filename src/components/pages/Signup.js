import { NavLink, useNavigate } from 'react-router-dom';
import './Signup.css'
import { logIn, signUp } from '../../api/api';
import { useState } from 'react';


const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const handleSignup = async (e) => {
        e.preventDefault();
       let response = await signUp({name ,email, password})
       console.log(response)
       if(response.user){
        navigate('/login')
       }
    }
    return (
        <div className="signup-container">
        <div>
            <h2>Signup!</h2>
        </div>
        <div className="signup-form">
            <form onSubmit={(e) => handleSignup(e)}>
                <label for="name">Name</label>
                <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <label for="email">Email</label>
                <input id="email" type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <label for="password">Password</label>
                <input id="password" type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                {/* <label for="password">Password</label>
                <input id="password" type="text"/> */}
                <button type='submit'>SignUp</button>
            </form>
        </div>
        <NavLink to="/login">Alredy have an account? Login here</NavLink>
    </div>
    )
}

export default Signup;