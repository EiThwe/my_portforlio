import React, { useEffect, useRef, useState } from "react";

import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Layout>
      <Contact />
      <Hero />
      <About />
    </Layout>
  );
};

export default App;
