// import "./Header.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export const Footer = () => {
    return (<>
        <nav className="footer">
            <Link to="/Matches">Matches</Link>
            <Link to="/Messages">Messages</Link>
            <Link to="/Profile">Profile</Link>
        </nav>
        <h1>Footer</h1>
    </>)
}