import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { About } from "./pages/About/About";
import { Home } from "./pages/Home/Home";
import { Core } from "./pages/Core/Core";
import { Matches } from "./pages/Matches/Matches";
import { Messages } from "./pages/Messages/Messages";
import { Profile } from "./pages/Profile/Profile";

import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Core" element={<Core />} />
          <Route path="/Matches" element={<Matches />} />
          <Route path="/Messages" element={<Messages />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
