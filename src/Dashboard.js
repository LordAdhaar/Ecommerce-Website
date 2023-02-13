import {auth} from "./firebase";
import {useAuthState} from "react-firebase-hooks/auth"
import { Link } from "react-router-dom";
import Login from "./Login";

export default function Dashboard(){

    const [user,loading] = useAuthState(auth);

    return(
        <div>
            <h3>Dashboard brah {user.displayName}</h3>
            <Link to="/">
                <button onClick={()=> auth.signOut()}>Sign Out</button>
            </Link>
        </div>
    )
}