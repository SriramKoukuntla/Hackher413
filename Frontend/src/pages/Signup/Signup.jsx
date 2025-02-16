import { Header } from "../../components/Header/Header"
import { useState } from "react";
import "./Signup.css"; 

export const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault(); // Prevents page reload
      console.log("Username:", username);
      console.log("Password:", password);
    };
  
    return (
    <>
        <Header/>
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign Up</button>
            </form>
        </div>
    </>
    );
}
  