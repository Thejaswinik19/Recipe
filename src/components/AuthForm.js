// src/components/AuthForm.js

import React, { useState } from 'react';
import "../styles/AuthForm.css";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Register

  const handleToggle = () => {
    setIsLogin(!isLogin); // Toggle between login and register form
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <form>
        <div>
          <label>Email</label>
          <input type="email" required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" required />
        </div>
        <button type="submit">{isLogin ? "Login" : "Register"}</button>
      </form>
      <p>
        {isLogin ? (
          <>
            Don't have an account?{' '}
            <span onClick={handleToggle} style={{ cursor: 'pointer', color: 'yellow' }}>
              Register here
            </span>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <span onClick={handleToggle} style={{ cursor: 'pointer', color: 'yellow' }}>
              Login here
            </span>
          </>
        )}
      </p>
    </div>
  );
}

export default AuthForm;
