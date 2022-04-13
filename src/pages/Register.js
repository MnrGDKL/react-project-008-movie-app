import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../auth/firebase";

const Register = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const displayName = `${firstName} ${lastName}`;
    createUser(email, password, displayName, navigate);
    e.preventDefault();
  }

  return (
  <div>
    <div className="d-flex justify-content-center">
      <div className="form-image">
        <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Register</h1>
        <form id="register" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="first-name">First Name</label>
            <input id="first-name" type="text" className="form-control" placeholder="Enter Your First Name.."  onChange={(e)=>setfirstName(e.target.value)} required/>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="last-name">Last Name</label>
            <input id="last-name" type="text" className="form-control" placeholder="Enter Your Last Name.." onChange={(e)=>setlastName(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">Email</label>
            <input id="email" type="email" className="form-control" placeholder="Enter Your email address.." onChange={(e)=>setEmail(e.target.value)} required/>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="password">Password</label>
            <input id="password" type="password" className="form-control" placeholder="Enter Your password.." onChange={(e)=>setPassword(e.target.value)} required/>
          </div>
          <input type="submit" className="btn btn-primary form-control" value="Register"/>
        </form>
      </div>
    </div>
  </div>);
};

export default Register;
