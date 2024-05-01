import { NavLink, useNavigate } from 'react-router-dom';
import './Signup.css'
import { logIn, signUp } from '../../api/api';
import { useState } from 'react';
import Button from '../common/Button';

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
       if(response.error){
        alert(response.error)
        }
    }
    return (
        <div className="signup-container">
        <div>
            <h2>Signup!</h2>
        </div>
        <div className="signup-form">
            <form onSubmit={(e) => handleSignup(e)}>
                <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'/>
                <input id="email" type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email'/>
                <input id="password" type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
                {/* <label for="password">Password</label>
                <input id="password" type="text"/> */}
                <Button type="submit" text="Sign Up"/>
            </form>
        </div>
        <NavLink className="login-text" to="/login">Alredy have an account? Login here</NavLink>
    </div>
    )
}

export default Signup;