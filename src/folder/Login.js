import React from "react";
import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const email1 = "abcd@123.com";
  const Password1 = "12345";

  function loginUser(e) {
    e.preventDefault();

    // if (email === email1 && password === Password1) {
    //   navigate("/signup");
    // }
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => navigate("/home"))
      .catch((err) => alert("User Does-not exist"));
  }

  const handlesignup = () => {
    navigate("/signup");
  };
  return (
    <div className="main-div">
      <form onSubmit={loginUser}>
        <h1 className="main-text">Login-Page </h1>
        <div className="login-container">
          <input
            type="text"
            className="email-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br />
          <input
            type="text"
            className="password-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br />

          <button className="Btn-login" type="Submit">
            Login
          </button>
          <p style={{ fontSize: "14px" }} onClick={handlesignup}>
            signup first
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
