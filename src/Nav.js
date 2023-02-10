import {Link} from "react-router-dom";

export default function Nav(){
    return(
        <nav className="Nav">
            <Link to="/shopping-cart">
                <h1>AnimeShop</h1>
            </Link>
            <ul className="navUl">
                <Link to="/shopping-cart">
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
        </nav>
    )
}