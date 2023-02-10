import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";
import Nav from "./Nav"
import Products from "./Products"
import uniqid from "uniqid";

export default function RouteSwitch(){

  const [productArr, setProductArr] = useState([{name:"Gut's Sword", price:200, quantity:1,id:0},{name:"Gintama Underwear",price:2,quantity:1,id:1},{name:"One Punch Suit",price:200,quantity:1,id:2},{name:"Haikyu Wig",price:20,quantity:1,id:3},{name:"Berserker Armor",price:2000,quantity:1,id:4},{name:"Rem's Skirt",price:150,quantity:1,id:5}]);
  const [cartArr, setCartArr] = useState([])
  const [bill,setBill] = useState(0);

  useEffect(()=>{
    
  },[bill])
  
  function addToCart(product){

    for (let cartItem of cartArr){
      if (cartItem.id === product.id){
        return;
      }
    }

    setCartArr([...cartArr,product]);
    setBill(bill+product.price);
  }

  function plusOne(product){
    setBill(bill+product.price)
  }

  function minusOne(product){

    if((bill - product.price)<0){
      return;
    }

    setBill(bill-product.price)
  }

  const allProducts = productArr.map(prod=>{
    return(
        <li key={uniqid()}>
            <p>{prod.name}</p>
            <p>{"$"+prod.price}</p>
            <button onClick={()=>{addToCart(prod)}}>ADD TO CART</button>
        </li>
    )
  })

  const cartProducts = cartArr.map(prod=>{
    return(
        <li key={uniqid()}>
            <p>{prod.name}</p>
            <p>{"$"+prod.price}</p>
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
        <Route path="/" element={<App />} />
        <Route path="/Products" element={<Products allProducts={allProducts}/>} />
        <Route path="/Shop" element={<Shop cartProducts={cartProducts} bill={bill}/>} />
      </Routes>
    </BrowserRouter>
  );
};
