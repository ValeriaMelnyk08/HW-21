import React, { useState } from "react";
import { Link } from "react-router-dom";
import Lock from '../lock.svg';


export  const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="auth-form-container">
            <div className="postMainImg"><img src={Lock} alt="" /></div>
             <h2>Sign in</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com*" id="email" name="email"/>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Your password*" id="password" name="password"/>
            <button type="submit">Sign in</button>
        </form>
        <div className="question">
        <Link to="/register">Don`t have an account? Sign up</Link>
        </div>
        </div>
    )
};

export default Login;