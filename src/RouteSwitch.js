import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";
import Nav from "./Nav"
import Products from "./Products"
import Login from "./Login";
import Dashboard from "./Dashboard";
import uniqid from "uniqid";

import {db} from "./firebase";
import {query,collection, onSnapshot, QuerySnapshot, updateDoc,doc, addDoc, deleteDoc} from "firebase/firestore";

export default function RouteSwitch(){

  const [productArr, setProductArr] = useState([{name:"Goku Action Figure", price:200,uniqueId:"zero",imageUrl:"./assets/goku.jpg"},{name:"AOT Necklace",price:2,uniqueId:"one",imageUrl:"./assets/AOT.jpg"},{name:"Gojo Water Bottle",price:200,uniqueId:"two",imageUrl:"./assets/gojo.jpg"},{name:"Anime Sticker",price:20,uniqueId:"three",imageUrl:"./assets/sticker.jpg"},{name:"Anime Hat",price:2000,uniqueId:"four",imageUrl:"./assets/AnimeHat.jpg"},{name:"Waifu T-Shirt",price:150,uniqueId:"five",imageUrl:"./assets/waifuTshirt.jpg"}]);
  const [cartArr, setCartArr] = useState([])
  const [bill,setBill] = useState(0);

  /*function initializeBill(){
    let iniBill=0;
    for(let item of cartArr){
      iniBill+=item.price*item.quantity;
    }
    console.log(iniBill)
    console.log(cartArr)

    return iniBill;
  }*/
  

  function addToCart(product){

    for (let cartItem of cartArr){
      console.log(cartItem.uniqueId, product.uniqueId)
      if (cartItem.uniqueId === product.uniqueId){
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
      console.log(product.uniqueId)
      setCartArr(cartArr.filter(item => item.uniqueId !== product.uniqueId));
    }
    setBill(bill-product.price)
  }

  function deleteItem(product){
    
    setCartArr(cartArr.filter(item => item.uniqueId!==product.uniqueId));
    setBill(bill - product.price*product.quantity)
    
  }

  const allProducts = productArr.map(prod=>{
    return(
        <li key={uniqid()} id ={prod.uniqueId}>
            <img src={require(`${prod.imageUrl}`)} alt="waifu" />
            <p>{prod.name}</p>
            <p>{"$"+prod.price}</p>
            <button  onClick={()=>{addToCart(prod);createShoppingCart(prod)}}>ADD TO CART</button>
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
              <button onClick={()=>{deleteItem(prod);deleteShoppingItem(prod.id)}}>DELETE</button>
            </div>
        
            <div className="quantity">
                <button onClick={()=>{plusOne(prod);incQnt(prod)}}>+</button>
                <p>{prod.quantity}</p>
                <button onClick={()=>{minusOne(prod);decQnt(prod)}} >-</button>
            </div>


        </li>
    )
})

  //create shopping cart
  const createShoppingCart = async(prod) => {
    
    for (let cartItem of cartArr){
      console.log(cartItem.uniqueId, prod.uniqueId)
      if (cartItem.uniqueId === prod.uniqueId){
        return;
      }
    };

    await addDoc(collection(db,"ShoppingCart"),{
      uniqueId:prod.uniqueId,
      imageUrl:prod.imageUrl,
      name:prod.name,
      price:prod.price,
      quantity:1 
    })
  } 

  //read shopping cart

  useEffect(()=>{
    const q = query(collection(db,"ShoppingCart"));
    const unsubscribe = onSnapshot(q,(QuerySnapshot)=>{
      let ShoppingCartArr = [];
      QuerySnapshot.forEach((doc)=>{
        ShoppingCartArr.push({...doc.data(),id:doc.id})
      })
    setCartArr(ShoppingCartArr);
    
    let temp = 0;
    for(let item of ShoppingCartArr){
      temp+= item.price*item.quantity;
    }

    console.log(ShoppingCartArr,cartArr,temp);
    setBill(temp);
    });
    console.log(cartArr)
    return ()=>unsubscribe();
  },[])
  
  //update shopping cart
  const incQnt = async (item) => {
    await updateDoc(doc(db,"ShoppingCart",item.id),{
      quantity : item.quantity
    })
  }

  const decQnt = async (item) => {

    if(item.quantity===0){
      deleteShoppingItem(item.id)
      return;
    }
    await updateDoc(doc(db,"ShoppingCart",item.id),{
      quantity : item.quantity
    })
  }

  // delete shoppingCart
  const deleteShoppingItem = async(id)=>{
    await deleteDoc(doc(db,"ShoppingCart",id))
  }


  return (
    <HashRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Products" element={<Products allProducts={allProducts} />} />
        <Route path="/Shop" element={<Shop cartProducts={cartProducts} bill={bill}/>} />
        <Route path="/Dashboard" element={<Dashboard/>}/>
      </Routes>
    </HashRouter>
  );
};
