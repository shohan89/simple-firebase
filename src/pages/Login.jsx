import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import app from "../firebase/firebase.init";

const Login = () => {
    const [user, setUser] = useState(null);
    const auth  = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Sign in with Google
    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log("🚀 ~ handleGoogleSignIn ~ user:", loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.error("Error signin with Google:", error.message);
            })
    }

    // Sign in with Github
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider).then(result => {
            const loggedInUser = result.user;
            console.log("🚀 ~ handleGithubSignIn ~ loggedInUser:", loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error => {
            console.error("Error signing in with Github: ", error.message);
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
                <div>
                    <button onClick={handleGoogleSignIn}>SignIn With Google</button>
                    <button onClick={handleGithubSignIn}>SignIn With Github</button>
                </div>
                
                }
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