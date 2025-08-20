import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.init";

const Login = () => {
    const auth  = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log("🚀 ~ handleGoogleSignIn ~ user:", user)
            })
            .catch(error => {
                console.error("Error signin with Google:", error.message);
            })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>SignIn With Google</button>
        </div>
    );
};

export default Login;