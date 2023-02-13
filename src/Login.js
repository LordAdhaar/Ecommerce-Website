import {FcGoogle} from "react-icons/fc";
import {AiFillFacebook} from "react-icons/ai";
import {GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import {auth} from "./firebase";
import { useNavigate } from "react-router-dom";

export default function Login(){

    //sign in with google
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    
    const GoogleLogin = async () => {
        try {
            const result  = await signInWithPopup(auth,googleProvider);
            navigate("/Dashboard")
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div>
            <h1>Login</h1>
            <div >
                <button onClick={GoogleLogin}><FcGoogle/>Sign in with Google</button>
                <button><AiFillFacebook/>Sign in with FaceBook</button>
            </div>
        </div>

    )
}