import './App.css';
import Landing from './pages/Landing';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Account from './pages/Account';
import AddPlants from './pages/AddPlants';
import Achievements from './pages/Achievements';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* TODO: Route to Landing if not logged in */}
          <Route path="/" element={<Home />} />
          <Route path="new-account" element={<Account />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="search" element={<AddPlants />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
