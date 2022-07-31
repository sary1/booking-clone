import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registrationHandler = async (e) => {
    e.preventDefault();
    const user = { email, password };
    try {
      const resp = await axios.post("/auth/login", user);
      console.log(resp.data.user);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className="login">
      <div className="text-center m-5-auto">
        <h2>Sign in to us</h2>
        <form action="/home">
          <p>
            <label>Email address</label>
            <br />
            <input
              type="text"
              name="first_name"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
          <p>
            <label>Password</label>
            <Link to="/forget-password">
              <label className="right-label">Forget password?</label>
            </Link>
            <br />
            <input
              type="password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </p>
          <p>
            <button
              id="sub_btn"
              type="submit"
              onClick={(e) => registrationHandler(e)}
            >
              Login
            </button>
          </p>
        </form>
        <footer>
          <p>
            <Link to="/register">Create an account</Link>.
          </p>
          <p>
            <Link to="/">Back to Homepage</Link>.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Login;
