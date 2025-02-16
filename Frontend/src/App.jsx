import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { About } from "./pages/About/About";
import { Home } from "./pages/Home/Home";




import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
