import { useEffect } from "react";
import { getAuth } from "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import CustomNavBar from "./CustomNavbar.js";
import LoginNavbar from "./LoginNavbar.js";

function CompleteNavbar(props) {
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      return;
    }
  }, [user, loading]);

  return <div>{user ? <CustomNavBar /> : <LoginNavbar />}</div>;
}

export default CompleteNavbar;
