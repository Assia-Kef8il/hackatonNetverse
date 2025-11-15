import React from 'react';
import Navbar from '../components/Navbar';
import LoginBox from '../components/LoginBox';
import Footer from '../components/Footer';
import './Login.css';

/**
 * Login Page
 * Main page that combines all components:
 * - Navbar at the top
 * - LoginBox in the middle
 * - Footer at the bottom
 */
const Login = () => {
  return (
    <div className="login-page">
      <Navbar />
      <div className="login-page-content">
        <LoginBox />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
