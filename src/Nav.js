import {Link} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase";

import {FcGoogle} from "react-icons/fc";
import {AiFillFacebook} from "react-icons/ai";
import {GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";




export default function Nav(){

    const [user,loading] = useAuthState(auth);

    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    
    const GoogleLogin = async () => {
        try {
            const result  = await signInWithPopup(auth,googleProvider);
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }



    return(
        <nav className="Nav">
            <Link to="/">
                <h1>AnimeShop</h1>
            </Link>
            <ul className="navUl">
                <Link to="/">
                    <li>
                        Home
                    </li>
                </Link>
                
                <Link to='/Products'>
                    <li>
                        Products
                    </li>
                </Link>
                <Link to="/Shop">
                    <li>
                        Cart
                    </li>
                </Link>
            </ul>
            {!user && (
                <button onClick={GoogleLogin} className="signIn"> <FcGoogle/><p>Sign In</p></button>
            )}
            {user && (
                <Link to="/">
                    <div className="user">
                        <img src={user.photoURL} alt="photo" />
                        <div className="signOut">
                            <p>{user.displayName}</p>
                            <Link to="/">
                                <button onClick={()=> auth.signOut()}>Sign Out</button>
                            </Link>
                        </div>
                        
                    </div>
                </Link>
            )}
        </nav>
    )
}