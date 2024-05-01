import { NavLink, useNavigate } from 'react-router-dom';
import './Login.css'
import { logIn } from '../../api/api';
import { useState } from 'react';
import Button from '../common/Button';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("response")
        let response = await logIn({email, password})
        console.log(response)
        if(response.user){
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);
            navigate('/home')
        }
        if(response.error){
            setPassword('')
            alert(response.error)
        }
    }
    return (
        <div className="login-container">
            <div>
                <h2>Log In</h2>
                {/* <p>Provide your credentials:</p> */}
            </div>
            <div className="login-form">
                <form onSubmit={(e) => handleLogin(e)}>
                    <input id="email" type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email'/>
                    <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
                    <Button type="submit" text="Login"/>
                </form>
            </div>
            <NavLink className="signup-text" to="/signup">Dont have an account yet? Signup here!</NavLink>
        </div>
    )
}

export default Login;