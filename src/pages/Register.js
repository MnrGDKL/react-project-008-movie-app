import React from "react";

const Register = () => {
  return (
  <div>
    <div className="d-flex justify-content-center">
      <div className="form-image">
        <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Register</h1>
        <form id="register">
          <label className="form-label" htmlFor="first-name">First Name</label>
          <input id="first-name" type="text" className="form-control" placeholder="Enter Your First Name.." />
          <label className="form-label" htmlFor="first-name">First Name</label>
          <input id="first-name" type="text" className="form-control" placeholder="Enter Your First Name.." />

        </form>
      </div>
    </div>
  </div>);
};

export default Register;
