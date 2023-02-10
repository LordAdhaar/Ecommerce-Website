import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";
import Nav from "./Nav"
import Products from "./Products"
import uniqid from "uniqid";

export default function RouteSwitch(){

  const [productArr, setProductArr] = useState([{name:"Rem Boy Pillow", price:200,id:"zero",imageUrl:"./assets/remBodyPillow.avif"},{name:"Rem Cosplay",price:2,id:"one",imageUrl:"./assets/remCosplay.jpg"},{name:"Waifu MousePad",price:200,id:"two",imageUrl:"./assets/waifuMousePad.jpeg"},{name:"DevilWaifu Sticket",price:20,id:"three",imageUrl:"./assets/devilWaifu.webp"},{name:"Send Noods Poster",price:2000,id:"four",imageUrl:"./assets/sendNoods.jpg"},{name:"Waifu T-Shirt",price:150,id:"five",imageUrl:"./assets/waifuTshirt.jpg"}]);
  const [cartArr, setCartArr] = useState([])
  const [bill,setBill] = useState(0);

  
  function addToCart(product){

    for (let cartItem of cartArr){
      if (cartItem.id === product.id){
        return;
      }
    }

    let cloneProduct = {...product}
    cloneProduct.quantity=1
    setCartArr([...cartArr,cloneProduct]);

    console.log(cartArr);
    console.log(productArr)
    
    setBill(bill+cloneProduct.price);
  }

  function plusOne(product){
    product.quantity+=1;
    setBill(bill+product.price)
    console.log(cartArr);
    console.log(productArr)
  }

  function minusOne(product){
    product.quantity-=1;
    if(product.quantity===0){
      setCartArr(cartArr.filter(item => item.id !== product.id))
    }
    setBill(bill-product.price)
  }

  function deleteItem(product){
    
    setCartArr(cartArr.filter(item => item.id!==product.id));
    setBill(bill - product.price*product.quantity)
    
  }

  const allProducts = productArr.map(prod=>{
    return(
        <li key={uniqid()} id ={prod.id}>
            <img src={require(`${prod.imageUrl}`)} alt="waifu" />
            <p>{prod.name}</p>
            <p>{"$"+prod.price}</p>
            <button onClick={()=>{addToCart(prod)}}>ADD TO CART</button>
        </li>
    )
  })

  const cartProducts = cartArr.map(prod=>{
    return(
        <li key={uniqid()}>

            <img src={require(`${prod.imageUrl}`)} alt="item" />

            <div className="description">
              <p>{prod.name}</p>
              <p>{"$" + prod.price}</p>
              <button onClick={()=>{deleteItem(prod)}}>DELETE</button>
            </div>
        
            <div className="quantity">
                <button onClick={()=>{plusOne(prod)}}>+</button>
                <p>{prod.quantity}</p>
                <button onClick={()=>{minusOne(prod)}} >-</button>
            </div>


        </li>
    )
})

  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/shopping-cart" element={<App />} />
        <Route path="/Products" element={<Products allProducts={allProducts}/>} />
        <Route path="/Shop" element={<Shop cartProducts={cartProducts} bill={bill}/>} />
      </Routes>
    </BrowserRouter>
  );
};
