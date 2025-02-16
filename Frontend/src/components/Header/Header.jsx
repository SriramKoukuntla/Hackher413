import "./Header.css";
import Logo from "../../assets/Logo3.png";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


export const Header = () => {
    return (
        <header className="header">
            <img src={Logo} alt="Heart Icon" className="logo" />
            <nav className="nav">
                <Link to="/About">About</Link>
                <Link to="/Home">Home</Link>
                <Link to="/Login">Login</Link>
                <Link to="/Signup">Signup</Link>
            </nav>
        </header>
    )
}