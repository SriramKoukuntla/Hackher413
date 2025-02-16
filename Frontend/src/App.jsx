import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";




import './App.css'

function App() {

  return (
    <>
      <Router>





        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
