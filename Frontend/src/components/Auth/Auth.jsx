import { useState, useEffect } from "react";
import { auth, provider, signInWithPopup, signOut } from "../../config/firebase-config";
import { onAuthStateChanged } from "firebase/auth";

const Auth = () => {
  const [user, setUser] = useState(null);

  // Check if user is already signed in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Sign in function
  const googleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User Info:", result.user);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  // Sign out function
  const googleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {user ? (
        <div>
          <h3>Welcome, {user.displayName}</h3>
          <img src={user.photoURL} alt="User profile" width="100" />
          <p>Email: {user.email}</p>
          <button onClick={googleSignOut}>Sign Out</button>
        </div>
      ) : (
        <button onClick={googleSignIn}>Sign in with Google</button>
      )}
    </div>
  );
};

export default Auth;
