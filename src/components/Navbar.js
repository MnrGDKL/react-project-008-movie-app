import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../auth/firebase";

const Navbar = () => {
  const navigate = useNavigate();
  // const currentUser = {displayName: "munir gedikli"}
  const currentUser = null;
  const isLoggedIn = currentUser !== null;
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand text-white">
            <h4>React Movie App</h4>
          </Link>
            <div className="d-flex text-white align-items-center">
              {isLoggedIn ? (
                <h5 className="mb-0 text-capitalize">
                  {currentUser?.displayName}
                </h5>
              ) : <button className="ms-2 btn btn-outline-light"
                          onClick={()=> navigate("/login")}>Login</button>} 
              {currentUser ? (
                <button className="ms-2 btn btn-outline-light"
                        onClick={()=> logOut()}>Logout</button>) : (
                <button className="ms-2 btn btn-outline-light"
                        onClick={()=> navigate("/register")}>Register</button>)}
            </div>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;
