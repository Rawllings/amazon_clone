import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Amazon_PNG6.png/800px-Amazon_PNG6.png?20200324004345"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
      </div>
    </div>
  );
}

export default Login;
