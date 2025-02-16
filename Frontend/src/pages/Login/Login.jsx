import { Header } from "../../components/Header/Header"
import "./Login.css"; 
import { useState } from "react";

export const Login = () => {
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
            <div className="login-container">
            <h2>Login</h2>
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
                <button type="submit">Login</button>
            </form>
            </div>
        </>
    );
  }