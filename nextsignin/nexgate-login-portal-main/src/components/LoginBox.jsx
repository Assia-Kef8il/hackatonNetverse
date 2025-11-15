import React, { useState } from 'react';
import './LoginBox.css';
import nexgateLogo from '../assets/nexgate-logo.png';

/**
 * LoginBox Component
 * Split layout with login form on the left and branding on the right
 * Includes form inputs for gym name and password with yellow submit button
 */
const LoginBox = () => {
  const [pswd, setPswd] = useState('');
  const [cpswd, setCpswd] = useState('');


  const handleLogin = (e) => {
    e.preventDefault();
    // Login logic would go here
    console.log('Login attempted with:', { gymName, password });
  };

  return (
    <div className="login-container">
      {/* Left side: Login form */}
      <div className="login-form-section">
        <h1 className="login-title">Sign in</h1>
      

        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="password"
            placeholder="Create a password"
            className="login-input"
            value={pswd}
            onChange={(e) => setPswd(e.target.value)}
          />
          <input
            type="password"
            placeholder="confirm password"
            className="login-input"
            value={cpswd}
            onChange={(e) => setCpswd(e.target.value)}
          />  
         
          
          <button type="submit" className="login-button">
            Create account
          </button>
        </form>

        
      </div>

      {/* Right side: Branding */}
      <div className="login-branding-section">
        <img src={nexgateLogo} alt="NexGate Logo" className="branding-logo" />
        <p className="branding-slogan">
          " Your Gym, Smarter. Faster. Digital. "
        </p>
      </div>
    </div>
  );
};

export default LoginBox;
