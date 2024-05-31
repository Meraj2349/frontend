//need the id from the url

import { useParams } from "react-router-dom";
//import link
import { Link } from "react-router-dom";
//import rating
import Rating from "../components/Rating";


//import bootstrap
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";

import axios from "axios";

import { useEffect, useState } from "react";




import React from "react";

const ProductScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  } 
  , []);  
  const { id } = useParams();
  const product = products.find((p) => p._id === id);
  console.log(product);

  return<>
  <Link className="btn btn-light my-3" to="/">
    Go Back
  </Link>
  <Row>
    <Col md={6}>
      <Image src={product.image} alt={product.name} fluid />
    </Col>
    <Col md={3}>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <h3>{product.name}</h3>
        </ListGroup.Item>
        <ListGroup.Item>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </ListGroup.Item>
        <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
        <ListGroup.Item>Description: {product.description}</ListGroup.Item>
      </ListGroup>
    </Col>
    <Col md={3}>
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Row>
              <Col>Price:</Col>
              <Col>
                <strong>${product.price}</strong>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>Status:</Col>
              <Col>
                {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button
              className="btn-block"
              type="button"
              disabled={product.countInStock === 0}
            >
              Add To Cart
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>        

  </Row>

  </>
}

export default ProductScreen;
