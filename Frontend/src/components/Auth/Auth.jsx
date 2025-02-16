import { useState, useEffect } from "react";
import { auth, provider, signInWithPopup, signOut } from "../../config/firebase-config";
import { onAuthStateChanged } from "firebase/auth";

const Auth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const googleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="auth-container">
      {user ? (
        <>
          <img src={user.photoURL} alt="User" />
          <button className="auth-button" onClick={googleSignOut}>Sign Out</button>
        </>
      ) : (
        <button className="auth-button" onClick={googleSignIn}>Sign in</button>
      )}
    </div>
  );
};

export default Auth;


// import { useState, useEffect } from "react";
// import { auth, provider, signInWithPopup, signOut } from "../../config/firebase-config";
// import { onAuthStateChanged } from "firebase/auth";

// const Auth = () => {
//   const [user, setUser] = useState(null);

//   // Check if user is already signed in
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   // Sign in function
//   const googleSignIn = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       console.log("User Info:", result.user);
//     } catch (error) {
//       console.error("Error signing in:", error);
//     }
//   };

//   // Sign out function
//   const googleSignOut = async () => {
//     try {
//       await signOut(auth);
//       setUser(null);
//     } catch (error) {
//       console.error("Error signing out:", error);
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       {user ? (
//         <div>
//           <h3>Welcome, {user.displayName}</h3>
//           <img src={user.photoURL} alt="User profile" width="100" />
//           <p>Email: {user.email}</p>
//           <button onClick={googleSignOut}>Sign Out</button>
//         </div>
//       ) : (
//         <button onClick={googleSignIn}>Sign in with Google</button>
//       )}
//     </div>
//   );
// };

// export default Auth;
