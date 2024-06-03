import React from "react";
import Headers from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <>
      <Headers /> 
      <Container>
       <Outlet/>
      </Container>                                                                                            
      <Footer />
    </>
  );
};

export default App;
