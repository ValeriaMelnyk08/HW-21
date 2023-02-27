import React, { useState } from "react";
import { Link } from "react-router-dom";
import Lock from '../lock.svg';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="auth-form-container">
            <div className="postMainImg"><img src={Lock} alt="" /></div>
            <h2>Sign up</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full name*" />
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com*" id="email" name="email" />
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="You password*" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <div className="question">
        <Link to="/login">Already have an account? Log in</Link>
        </div>
    </div>
    )
}

export default Register;