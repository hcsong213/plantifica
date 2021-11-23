import CustomNavbar from "../components/CustomNavbar";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword} from "../firebase/config.js";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Landing.css";

function Landing() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    // const history = useNavigate();
    useEffect(() => {
        if (loading) {
            return;
        }
        // if (user) {
        //     history.replace("/dashboard");
        // }
    }, [user, loading]);

    return (
        <div className="login">
          <div className="login__container">
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
            <button
              className="login__btn"
              onClick={() => signInWithEmailAndPassword(email, password)}
            >
              Login
            </button>
            {/* <div>
              <Link to="/reset">Forgot Password</Link>
            </div> */}
            {/* <div>
              Don't have an account? <Link to="/register">Register</Link> now.
            </div> */}
          </div>
        </div>
      );
}

export default Landing;