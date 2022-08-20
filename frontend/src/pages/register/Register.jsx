import React from "react";
import "./Register.css";
import logo from "./travel.jpg";

const Register = () => {
  return (
    <div>
      <center>
        <div className="reg-container">
          <img src={logo} alt="" />
          <h1>New Here?</h1>
          <h2>Register for free!</h2>
          <div className="reg-input">
            <h3>Please insert details</h3>
            <input className="user-ip" type="text" placeholder="username" />
            <br />
            <input className="user-ip" type="text" placeholder="email" />
            <br />
            <input className="user-ip" type="text" placeholder="password" />
            <br />
            <input className="user-ip" type="text" placeholder="phone" />
            <br />
          </div>
          <button className="ip-submit">Submit</button>
        </div>
      </center>
    </div>
  );
};

export default Register;
