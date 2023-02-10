import {Link} from "react-router-dom";

export default function Nav(){
    return(
        <nav className="Nav">
            <h1>NAV</h1>
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
                        Shop
                    </li>
                </Link>
            </ul>
        </nav>
    )
}