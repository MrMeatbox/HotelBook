import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Register.css";
import logo from "./travel.jpg";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
    phone: undefined,
    email: undefined,
  });
  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "REGISTER_START" });

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        credentials
      );
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
      navigate("/login");
    } catch (error) {
      dispatch({ type: "REGISTER_FAIL", payload: error.response.data });
    }
  };

  return (
    <div className="body">
      <center>
        <div className="reg-container">
          <img src={logo} alt="" />
          <h1>New Here?</h1>
          <h2>Register for free!</h2>
          <div className="reg-input">
            <h3>Please insert details</h3>
            <input
              onChange={handleChange}
              className="user-ip"
              type="text"
              placeholder="username"
            />
            <br />
            <input
              onChange={handleChange}
              className="user-ip"
              type="text"
              placeholder="email"
            />
            <br />
            <input
              onChange={handleChange}
              className="user-ip"
              type="text"
              placeholder="password"
            />
            <br />
            <input
              onChange={handleChange}
              className="user-ip"
              type="text"
              placeholder="phone"
            />
            <br />
          </div>
          <button
            disabled={loading}
            onClick={handleClick}
            className="ip-submit"
          >
            Submit
          </button>
          {error && <h2>{error.message}</h2>}
        </div>
      </center>
    </div>
  );
};

export default Register;
