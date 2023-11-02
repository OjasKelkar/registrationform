import React from 'react';
import './login.css'; // Import your CSS file

function Login() {
  return (
    <div id="login">
    <div class="login">
      <div className="nav">
        <div className="nav1">
          <div className="a"></div>
          <div className="b"></div>
          <div className="c"></div>
        </div>
        <h1 className="head">CAMEO</h1>
        <div className="nav2">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <i className="bx bxs-grid-alt"></i>
          </a>
        </div>
      </div>
      <div className="bodyalt">
        <div className="wrap-up">
          <h1>Sign In</h1>
          <form action="">
            <div className="input-box">
              <input type="text" name="" id="" placeholder="Username" required aria-required="true" />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input type="password" name="" id="" placeholder="Password" required aria-required="true" />
              <i className="bx bxs-lock-alt"></i>
            </div>
            <div className="remember-forgot">
              <label htmlFor=""><input type="checkbox" />Remember me</label>
              <a href="#">Forgot password?</a>
            </div>
            <button className="btn" type="submit">Login</button>
            <div className="register-link">
              <p>Don't have an account?<a href="/Register">Register</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;