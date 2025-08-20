import { getAuth, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.init";

const Login = () => {
    const auth  = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () =>{
        console.log('Google Sign In');
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Sign In With Google</button>
        </div>
    );
};

export default Login;