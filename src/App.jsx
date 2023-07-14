import React, { useEffect, useRef, useState } from "react";

import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
};

export default App;
