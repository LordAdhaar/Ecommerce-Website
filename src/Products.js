import { useState } from "react"
import uniqid from "uniqid";

export default function Products(props){
    return(
        <div className="Products">
            <ul className="productUl">
                {props.allProducts}
            </ul>
        </div>
    )
}