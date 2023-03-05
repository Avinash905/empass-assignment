import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    toast.success("Login Success");
    navigate("/empass-assignment/dashboard");
  };

  return (
    <section className="login-section flex-center">
      <div className="login-container flex-center">
        <h2 className="form-heading">Sign In</h2>
        <form
          onSubmit={formSubmit}
          className="login-form"
        >
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={formDetails.email}
            onChange={inputChange}
          />
          <input
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={formDetails.password}
            onChange={inputChange}
          />
          <button
            type="submit"
            className="btn form-btn"
          >
            sign in
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
