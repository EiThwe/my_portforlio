import React, { useEffect, useRef, useState } from "react";

import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  const [activeTab, setActiveTab] = useState("Hero");

  return (
    <Layout activeTab={activeTab}>
      <Hero setActiveTab={setActiveTab} />
      <About setActiveTab={setActiveTab} />
      <Contact setActiveTab={setActiveTab} />
    </Layout>
  );
};

export default App;
