import React, { useState } from 'react';
import './LoginBox.css';
import nexgateLogo from '../assets/nexgate-logo.png';

/**
 * LoginBox Component
 * Split layout with login form on the left and branding on the right
 * Includes form inputs for gym name and password with yellow submit button
 */
const LoginBox = () => {
  const [gymName, setGymName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Login logic would go here
    console.log('Login attempted with:', { gymName, password });
  };

  return (
    <div className="login-container">
      {/* Left side: Login form */}
      <div className="login-form-section">
        <h1 className="login-title">"Welcome Back"</h1>
        <p className="login-subtitle">
          Access your dashboard and manage your organization easily.
        </p>

        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Your Gym Name : -----"
            className="login-input"
            value={gymName}
            onChange={(e) => setGymName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password : ********"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
           type="submit"
           className="login-button"
           
     
          >  
           Login
          </button>
        </form>

        <button className="login-button"
             onClick={() => window.location.href ='http://localhost:8082/'}
             style={{ marginLeft: "190px" }}
             >Sign in</button>
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
