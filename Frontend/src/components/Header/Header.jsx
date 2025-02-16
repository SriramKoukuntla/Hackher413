import "./Header.css";
import Logo from "../../assets/Logo.png";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Auth from "../Auth/Auth";

export const Header = () => {
    return (
        <header className="header">
            <div className = "LeftSide">
                <img src={Logo} alt="Heart Icon" className="logo" />
                <p className = "title">    Love Is In The AIr</p>
            </div>
            <nav className="nav">
                    <Link to="/Home">Home</Link>
                    <Link to="/About">About</Link>
                    <Auth/>
            </nav>
        </header>
    )
}


