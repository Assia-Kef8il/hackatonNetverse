import React, { useState } from "react";
import "./LoginBox.css";
import nexgateLogo from "../assets/nexgate-logo.png";

/**
 * LoginBox Component
 * Split layout with login form on the left and branding on the right
 * Includes form inputs for gym name and password with yellow submit button
 */
const LoginBox = () => {
  const [gymName, setGymName] = useState("");
  const [password, setPassword] = useState("");
  const [phnbr, setPhnbr] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Login logic would go here
    console.log("Login attempted with:", { gymName, password });
  };

  return (
    <div className="login-container">
      {/* Left side: Login form */}
      <div className="login-form-section">
        <h1 className="login-title">Sign in</h1>

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
          <input
            type="Number"
            placeholder="Your Phone Number : -----"
            className="login-input"
            value={phnbr}
            onChange={(e) => setPhnbr(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email: ********"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="login-button"
            onClick={() => (window.location.href = "http://localhost:8083/")}
          >
           Next
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
