import React from "react";
import Headers from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { Container } from "react-bootstrap";
const App = () => {
  return (
    <>
      <Headers />
      <main className="py-3">
        <h1> Hello from App.js </h1>
      </main>
      <Container>
        <HomeScreen/>
      </Container>                                                                                            
      <Footer />
    </>
  );
};

export default App;
