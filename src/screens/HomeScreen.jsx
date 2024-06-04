import { Row, Col } from "react-bootstrap";

import Product from "../components/product";

import { useGetProductsQuery } from "../slices/productsApiSlices";
import Loader from "../components/Loader";

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      <h1>Latest Products</h1>
      {isLoading ? (
     <Loader />
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
