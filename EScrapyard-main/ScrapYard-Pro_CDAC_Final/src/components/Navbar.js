import React, { useState ,useEffect } from "react";
import Logo from "../assets/final_logo.jpg";
import { Link } from "react-router-dom";

import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { colors } from "@material-ui/core";
import Contact from "../pages/Contact";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const [logout,setLogout] = useState(false);

  const onLogOutClick = () => {
    const role = localStorage.getItem("roles");
    window.localStorage.clear();
    if(!localStorage.length){
      setLogout(false);
      // toast.error("Logout Successfully");
    }
}
useEffect(()=>{
  if(localStorage.length){
    setLogout(true)
  }
},[])

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  
  return (
    <>
        <ToastContainer theme="colored"/>
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />  <strong className="brand">e-ScrapYard</strong>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/login"> Admin </Link>
          <Link to="/user_login"> User </Link>
          <Link to="/contact"> Contact </Link>
          {logout ? (
              <Link to="/"> LogOut </Link>
            ) : ("")}
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link onClick={onLogOutClick} to="/login">
          {" "}
          Admin{" "}
        </Link>
        <Link onClick={onLogOutClick}  to="/user_login">
          {" "}
          User{" "}
        </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact</Link>

        {logout ? (
            <Link onClick={onLogOutClick} to="/">
              {" "}
              LogOut{" "}
            </Link>
          ) : (
            ""
          )}
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
    </>
  );
}

export default Navbar;

