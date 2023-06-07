import React, { useState } from "react"; 
import { ChatBot } from "./ChatBot";
export const Login = (props) => 
{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => { // When submit or log-in button is pressed this function is called....
        e.preventDefault(); // this is written to prevent default form submission behavior (page reload) 
        console.log(email);
    }

    return (
        <>
        <div className="auth-form-container">
            <h2><img src="./images/log.jpg" className ="app-logo" alt=""/></h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="**************" id="password" name="password"/>
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
        <div>
            <ChatBot/>
        </div>
        </>
        )
}