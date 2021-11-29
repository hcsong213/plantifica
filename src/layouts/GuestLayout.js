import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

export default function AuthLayout({ children }) {
  const auth = getAuth();
  const [user] = useAuthState(auth);

  return (
    <>
      {user ? (
        <div className="justify-content-md-center align-me text-center">
          You're already logged in! We're so glad you're here :)) Click to{" "}
          <a href="/">go back home</a> 🌱
        </div>
      ) : (
        children
      )}
    </>
  );
}
