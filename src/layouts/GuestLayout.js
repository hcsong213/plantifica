import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

/**
 * THIS DOES NOT PROTECT THE CHILDREN FROM RENDERING EVEN IF USER IS DEFINED.
 * The user might be defined when the pages that use this layout rendered. Since
 * The page is initially rendered before ths layout's logic kicks in, you
 * have to use other strategies for protecting pages that really need
 * user to be undefined to render.
 **/

export default function GuestLayout({ children }) {
  const auth = getAuth();
  const [user] = useAuthState(auth);

  return (
    <>
      {user ? (
        <div className="justify-content-md-center align-me text-center">
          <span>You're already logged in! We're so glad you're here :))</span>{" "}
          <br />{" "}
          <span>
            Click to <a href="/">go back home</a> 🌱
          </span>
        </div>
      ) : (
        children
      )}
    </>
  );
}
