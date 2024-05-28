import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../products";
import Product from "../components/product";
const HomeScreen = () => {
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
