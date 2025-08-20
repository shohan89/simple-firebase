import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import app from "../firebase/firebase.init";

const Login = () => {
    const [user, setUser] = useState(null);
    const auth  = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, provider)
            .then(result => {
                const loggedInUser = result.user;
                console.log("🚀 ~ handleGoogleSignIn ~ user:", loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.error("Error signin with Google:", error.message);
            })
    }
    const handleSignOut = () => {
        signOut(auth).then(result =>{
            setUser(null);
            console.log('User Signed Out:', result);
        })
        .catch(error =>{
            console.error("Error signing Out", error.message);
        })
    }
    return (
        <div>
            {
                user ?
                <button onClick={handleSignOut}>SignOut</button> :
                <button onClick={handleGoogleSignIn}>SignIn With Google</button>}
            {
                user && <div>
                    <h2>Welcome, {user.displayName}</h2>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;