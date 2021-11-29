import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAuth } from "@firebase/auth";
import Landing from "./pages/Landing";
import Account from "./pages/Account";
import AddPlants from "./pages/AddPlants";
import Achievements from "./pages/Achievements";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function requireAuth(nextState, replace, next) {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) {
    replace({
      pathname: "/login",
      state: { nextPathname: nextState.location.pathname },
    });
  }
  next();
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="new-account" element={<Account />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="search" element={<AddPlants />} />
          <Route path="login" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
