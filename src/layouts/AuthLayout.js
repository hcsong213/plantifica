import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

/**
 * THIS DOES NOT PROTECT THE CHILDREN FROM RENDERING EVEN IF USER IS NULL
 * The user might be null when the pages that use this layout rendered. Since
 * The page is initially rendered before ths layout's logic kicks in, you
 * have to use other strategies for protecting pages that really need
 * user to be defined to render.
 **/

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
