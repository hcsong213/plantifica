import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../firebase/config.js";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Landing.css";
import CompleteNavbar from "../components/CompleteNavbar";
import GuestLayout from "../layouts/GuestLayout.js";

function Landing() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const signIn = () => {
    signInWithEmailAndPassword(email, password);
    navigate("/profile");
  };
  useEffect(() => {
    if (loading) {
      return;
    }
    // if (user) {
    //     history.replace("/dashboard");
    // }
  }, [user, loading]);

  return (
    <>
      <CompleteNavbar />
      <GuestLayout>
        <div className="login">
          <div className="login__container">
            <div className="d-flex justify-content-center m-4 p-4">
              <h1>Sign In</h1>
            </div>
            <input
              type="text"
              className="login__textBox"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
            <input
              type="password"
              className="login__textBox"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button className="login__btn" onClick={signIn}>
              Login
            </button>
            {/* <div>
              <Link to="/reset">Forgot Password</Link>
            </div> */}
            <div>
              Don't have an account? <Link to="/new-account">Register</Link>{" "}
              now.
            </div>
          </div>
        </div>
      </GuestLayout>
    </>
  );
}

export default Landing;
