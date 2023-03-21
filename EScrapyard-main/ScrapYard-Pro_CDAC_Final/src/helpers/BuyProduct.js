import React, { useState,useEffect } from 'react'
import Products from './Products'
import axios from 'axios';
const BuyProduct=()=>{

    const getAllProducts=()=>{
        const getuserId = JSON.parse(localStorage.getItem('userId'));
        axios.get("http://localhost:8082/getAllStock").then(
            (response)=>{
                console.log(response.data.data);
                console.log(getuserId);
                setProduct(response.data.data);
                
            },
            (error)=>{
                console.log(error);
            }
        )

    }
    useEffect(()=>{
        getAllProducts();
    },[])

    const[products,setProduct]=useState([
     
    ])
    return(
        <div>
            <center><h1 >Buy Product</h1></center>
            
                {products.length>0?products.map((item)=><Products key={item.title} products={item}/>):"no product found"}
         </div>
        );
};
export default BuyProduct;