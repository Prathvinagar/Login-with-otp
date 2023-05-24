import React from "react";
import './login.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";




function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const email1 = "abcd@123.com";
    const Password1 = "12345";

    function loginUser(e) {

        e.preventDefault()
        
        if (email === email1 && password === Password1) {
            navigate('/signup');

        }

 }

      return (
        <div className="main-div">
            <form onSubmit={loginUser}>
                <h1 className="main-text">Login-Page </h1>
                <div className="login-container">
                    <input type="text" className="email-input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input><br />
                    <input type="text" className="password-input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input><br />

                    <button className="Btn-login" type="Submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;