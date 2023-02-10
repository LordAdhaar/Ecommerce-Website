
export default function Products(props){
    return(
        <div className="Products">
            <ul className="productUl">
                {props.allProducts}
            </ul>
        </div>
    )
}