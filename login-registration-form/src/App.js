import React, {useState} from "react";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
//import img1 from './images/log.jpg';

function App() 
  {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  // The App component uses the useState hook to create and manage the currentForm state variable. 
  // By default, it is set to 'login'. 
  // The toggleForm function is defined to update the currentForm state variable when called.
  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>
      }
    </div>
  );
  // The App component's render method returns JSX code that displays either the Login or Register component based on the value of currentForm. 
  //If currentForm is equal to 'login', it renders the Login component and passes the toggleForm function as the onFormSwitch prop. 
  //If currentForm is not equal to 'login', it renders the Register component and also passes the toggleForm function as the onFormSwitch prop.
}
export default App;