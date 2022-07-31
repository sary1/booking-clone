import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./register.css";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registrationHandler = async (e) => {
    e.preventDefault();
    const user = { firstname, lastname, email, password };
    try {
      await axios.post("/auth/register", user);
      window.location.href = "/";
    } catch (error) {
      if (error.response.data.error.code === 11000)
        console.log({ error: "Email is already registered" });
      console.log({ error: error.response.data.error });
    }
  };

  return (
    <div className="register">
      <div className="text-center m-5-auto">
        <h2>Join us</h2>
        <h5>Create your personal account</h5>
        <form action="/home">
          <p>
            <label>Firstname</label>
            <br />
            <input
              type="text"
              name="first_name"
              required
              onChange={(e) => setFirstname(e.target.value)}
            />
          </p>
          <p>
            <label>Lastname</label>
            <br />
            <input
              type="text"
              name="first_name"
              required
              onChange={(e) => setLastname(e.target.value)}
            />
          </p>
          <p>
            <label>Email address</label>
            <br />
            <input
              type="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
          <p>
            <label>Password</label>
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
              Register
            </button>
          </p>
        </form>
        <footer>
          <p>Already have an account?</p>
          <p>
            <Link to="/login">Back to Login page</Link>.
          </p>
          <p>
            <Link to="/">Back to Homepage</Link>.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Register;
