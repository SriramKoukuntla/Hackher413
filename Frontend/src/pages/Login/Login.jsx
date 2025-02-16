import Auth from "../../components/Auth/Auth"
import { Header } from "../../components/Header/Header"

export const Login = () => {
  return (<>
    <Header/>
    <Auth/>
  </>)
}

// import { auth } from "../../firebase";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// const googleProvider = new GoogleAuthProvider();

// const handleGoogleLogin = async () => {
//   console.log("Hello")

//   // try {
//   //   await signInWithPopup(auth, googleProvider);
//   //   console.log("Google sign-in successful!");
//   // } catch (error) {
//   //   console.error("Google sign-in error:", error);
//   // }
// };

// <button onClick={handleGoogleLogin}>Sign in with Google</button>

// // import { useState } from "react";
// // import { auth } from "../../firebase";
// // import { signInWithEmailAndPassword } from "firebase/auth";

// // export const Login = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await signInWithEmailAndPassword(auth, email, password);
// //       console.log("User logged in!");
// //     } catch (err) {
// //       setError(err.message);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Login</h2>
// //       {error && <p>{error}</p>}
// //       <form onSubmit={handleLogin}>
// //         <input
// //           type="email"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           required
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           required
// //         />
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // };

// // import { Header } from "../../components/Header/Header"
// // import "./Login.css"; 
// // import { useState } from "react";

// // export const Login = () => {
// //     const [username, setUsername] = useState("");
// //     const [password, setPassword] = useState("");
  
// //     const handleSubmit = (event) => {
// //       event.preventDefault(); // Prevents page reload
// //       console.log("Username:", username);
// //       console.log("Password:", password);
// //     };
  
// //     return (
// //         <>
// //             <Header/>
// //             <div className="login-container">
// //             <h2>Login</h2>
// //             <form onSubmit={handleSubmit}>
// //                 <input
// //                 type="text"
// //                 placeholder="Username"
// //                 value={username}
// //                 onChange={(e) => setUsername(e.target.value)}
// //                 />
// //                 <input
// //                 type="password"
// //                 placeholder="Password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 />
// //                 <button type="submit">Login</button>
// //             </form>
// //             </div>
// //         </>
// //     );
// //   }