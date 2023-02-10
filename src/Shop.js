import uniqid from "uniqid";

export default function Shop(props){

    return(
        <div className="Shop">
            <ul className="shopUl">
                {props.cartProducts}
            </ul>
            <h2>{props.bill}</h2>
        </div>
    )
}