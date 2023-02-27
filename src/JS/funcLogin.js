import React, { useState } from "react";
import './CSS/main.css';
import { Login } from './JS/Login';
import { Register } from './JS/Register';

function funcLogin() {
    const [currentForm, setCurrentForm] = useState('login');
  
    const toggleForm = (formName) => {
      setCurrentForm(formName);
    }
    return (
      <div className="App">
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        }
        
          
      </div>
    );
  
    
    
  }
  
  export default funcLogin;