import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Account from "./pages/Account";
import AddPlants from "./pages/AddPlants";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="new-account" element={<Account />} />
          <Route path="profile" element={<Profile />} />
          <Route path="search" element={<AddPlants />} />
          <Route path="login" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
