import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../firebase/config.js";
import "./Account.css";
import CompleteNavbar from "../components/CompleteNavbar";
import GuestLayout from "../layouts/GuestLayout";

function Account() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
    navigate("/profile");
  };
  useEffect(() => {
    if (loading) return;
  }, [user, loading]);
  return (
    <>
      <CompleteNavbar />
      <GuestLayout>
        <div className="register">
          <div className="register__container">
            <div className="d-flex justify-content-center p-5">
              <h1>Create your account</h1>
            </div>
            <input
              type="text"
              className="register__textBox"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
            />
            <input
              type="text"
              className="register__textBox"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your E-mail"
            />
            <input
              type="password"
              className="register__textBox"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button
              className="register__btn"
              onClick={register}
              href="/profile"
            >
              Create Account
            </button>
            <div>
              Already have an account? <Link to="/login">Login</Link> now.
            </div>
          </div>
        </div>
      </GuestLayout>
    </>
  );
}

export default Account;
