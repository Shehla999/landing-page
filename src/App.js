import React from "react";

import Home from "./components/Home";
import Feature from "./components/Feature";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      {/* <Style /> */}
      <section id="about" className="p-8">
        <Home />
      </section>

      <section id="feature" className="p-8">
        <Feature />
      </section>

      <section id="pricing" className="p-8">
        <Pricing />
      </section>

      <section id="faq" className="p-8">
        <FAQ />
      </section>

      <section id="footer" className="p-8">
        <Footer />
      </section>
    </div>
  );
}

export default App;
