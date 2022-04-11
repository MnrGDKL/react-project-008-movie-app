import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  }
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="form-image">
          <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
        </div>
        <div className="register-form">
          <h1 className="form-title display-3">Login</h1>
          <form id="register" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">Email</label>
              <input id="email" type="email" className="form-control" placeholder="Enter Your email address.." onChange={(e)=>setEmail(e.target.value)} required/>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="password">Password</label>
              <input id="password" type="password" className="form-control" placeholder="Enter Your password.." onChange={(e)=>setPassword(e.target.value)} required/>
            </div>
            <input type="submit" className="btn btn-primary form-control" value="Login"/>
          </form>
          <button className="btn btn-primary form-control"> Continue with Google</button>
        </div>
      </div>
    </div>);
};

export default Login;
