import uniqid from "uniqid";

export default function Shop(props){
    return(
        <div className="Shop">

            <div className="finalBill">
                <div className="subTotal">
                    <h3>Sub-Total</h3>
                    <p>{"$"+props.bill}</p>
                </div>
                <div className="shipping">
                    <h3>Shipping</h3>
                    <p>FREE</p>
                </div>
                <div className="total">
                    <h3>Total</h3>               
                    <p>{"$"+props.bill}</p>
                </div>
                <button>ORDER</button>
            </div>
            <ul className="shopUl">
                {props.cartProducts}
            </ul>
        </div>
    )
}