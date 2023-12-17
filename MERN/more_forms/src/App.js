import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <CreatAccount />
      </div>
    </>
  );
}

function CreatAccount() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const createUser = (e) => {
    e.preventDefault();

    const newUser = {
      first_name,
      last_name,
      email,
      password,
      confirm_password,
    };

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <form onSubmit={createUser} class="user-form">
        <div class="form-label">
          <label>First Name</label>
          <input type="text" onChange={(e) => setFirstName(e.target.value)} />
          {first_name.length > 0 && first_name.length <= 2 ? (
            <p>First Name must be at least 2 characters.</p>
          ) : (
            ""
          )}
        </div>
        <div class="form-label">
          <label>Last Name</label>
          <input type="text" onChange={(e) => setLastName(e.target.value)} />
          {last_name.length > 0 && last_name.length <= 2 ? (
            <p>Last Name must be at least 2 characters.</p>
          ) : (
            ""
          )}
        </div>
        <div class="form-label">
          <label>Email</label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
          {email.length > 0 && email.length <= 5 ? (
            <p>Email must be at least 5 characters.</p>
          ) : (
            ""
          )}
        </div>
        <div class="form-label">
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {password.length > 0 && password.length <= 8 ? (
            <p>Password must be at least 8 characters.</p>
          ) : (
            ""
          )}
        </div>
        <div class="form-label">
          <label>Confirm Password</label>
          <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {confirm_password.length > 0 && confirm_password.length <= 8 ? (
            <p>Password must be at least 8 characters.</p>
          ) : (
            ""
          )}
        </div>
      </form>
      <div class="form-data-container">
        <p>Your Form Data</p>

        <div class="form-data">
          <p>First Name: {first_name}</p>
          <p>Last Name: {last_name}</p>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
          <p>Confirm Password: {confirm_password}</p>
        </div>
      </div>
    </>
  );
}

export default App;
