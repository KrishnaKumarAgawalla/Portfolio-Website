import React from "react";
import { Navbar } from "./Components";
import { About, Footer, Header, Skills, Testimonial, Work } from "./Containers";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
