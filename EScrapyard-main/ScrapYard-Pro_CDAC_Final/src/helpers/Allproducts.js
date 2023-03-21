import React, { useState,useEffect } from 'react'
import Products from './Products'
import axios from 'axios'
import { Button, Container, Row } from "reactstrap";

const Allproducts=()=>{

    const getAllProducts=()=>{
        const getuserId = JSON.parse(localStorage.getItem('userId'));
        axios.put("http://localhost:8082/getProduct"+"/"+getuserId).then(
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
    const menuButton = () => {
      const role = localStorage.getItem("roles");
      console.log(role);
      if (role === "industrialist") {
        window.location.href = "/industrialistDash";
      } else if (role === "dealer") {
        window.location.href = "/dealerdash";
      } else if (role === "trader") {
        window.location.href = "/trederdash";
      }
      return null;
    };

    return (
      <div>
        <Container>
          <Row>
            <Button variant="secondary" type="submit" onClick={menuButton}>
              MAIN MENU
            </Button>
          </Row>
        </Container>
        <br></br>
        <center>
          <h1>Sell Product</h1>
        </center>

        {products.length > 0
          ? products.map((item) => (
              <Products key={item.title} products={item} />
            ))
          : "no product found"}
      </div>
    );
};
export default Allproducts;