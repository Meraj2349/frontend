import React from "react";
import Headers from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Headers />
      <main className="py-3">
        <h1> Hello from App.js </h1>
      </main>

      <Footer />
    </>
  );
};

export default App;
