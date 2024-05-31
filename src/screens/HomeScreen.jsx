import React from "react";
import { useEffect,useState } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

import Product from "../components/product";


const HomeScreen = () => {
  const [products,setProducts]=useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }     
  , []);
  return (
    <>
      <h1>letest product </h1>
      <Row>
        {products.map((product) => (
          // small sereen take 12 and mediam screen 6
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}/>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
