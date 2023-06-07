import React, { useState } from "react";
import { ChatBot } from "./ChatBot";
export const Register = (props) => 
{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    // The component returns JSX code that renders the registration form. 
    // The form has input fields for name, email, and password, and each input field is bound to its respective state variable.
    // When the input values change, the onChange event handlers update the corresponding state variables using the setEmail, setPass, and setName functions.
    const handleSubmit = (e) => 
    {
        e.preventDefault();  // When submit or log-in button is pressed this function is called....
        console.log(email);  // this is written to prevent default form submission behavior (page reload) 
    }

    return (
        <>
        <div className="auth-form-container">
            <h2 className = "container mx-auto flex items-center"><img src="./images/regis.png"  alt=""/></h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Register</button>
        </form>
        {/* Finally, there is a "Log In" button inside the form that triggers the handleSubmit function when clicked. 
        Additionally, there is a "Already have an account? Login here." button below the form that calls the props.onFormSwitch function when clicked. 
        This allows the parent component to switch between the registration and login forms. */}
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    <div>
        <ChatBot />
    </div>
    </>
    )
}