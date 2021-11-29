import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

export default function AuthLayout({ children }) {
  const auth = getAuth();
  const [user] = useAuthState(auth);

  return (
    <>
      {user ? (
        children
      ) : (
        <div className="justify-content-md-center align-me text-center">
          Please <a href="/login">log in</a> 🌱
        </div>
      )}
    </>
  );
}
