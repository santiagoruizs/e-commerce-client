import { NavLink, useNavigate } from 'react-router-dom';
import './Login.css'
import { logIn } from '../../api/api';
import { useState } from 'react';



const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
       let response = await logIn({email, password})
       console.log(response)
       if(response.user){
        navigate('/home')
       }
    }
    return (
        <div className="login-container">
            <div>
                <h2>Welcome!</h2>
            </div>
            <div className="login-form">
                <form onSubmit={(e) => handleLogin(e)}>
                    <label for="email">Email</label>
                    <input id="email" type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    <label for="password">Password</label>
                    <input id="password" type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit">LogIn</button>
                </form>
            </div>
            <NavLink to="/signup">dont have an account yet? signup here</NavLink>
        </div>
    )
}

export default Login;